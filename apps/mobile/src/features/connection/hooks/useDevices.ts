// responsable for save, remove and load devices
import { useCallback, useEffect, useState } from "react";

import { DeviceStorage } from "../services/DeviceStorage";
import { DeviceDiscovery } from "../services/DeviceDiscovery";
import { DesktopDevice } from "../types/DesktopDevice";
import { DiscoveredDevice } from "../types/DiscoveredDevice";

export function useDevices() {
  const [devices, setDevices] = useState<DesktopDevice[]>([]);
  const [discoveredDevices, setDiscoveredDevices] = useState<DiscoveredDevice[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isDiscovering, setIsDiscovering] = useState(false);
 
  const loadDevices = useCallback(async () => {
    try {
      setIsLoading(true);

      const storedDevices =
        await DeviceStorage.getDevices();

      setDevices(storedDevices);
    } catch (error) {
      console.error(
        "Erro ao carregar dispositivos:",
        error,
      );
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    loadDevices();
  }, [loadDevices]);

  const discoverDevices = useCallback(async () => {
    try {
      setIsDiscovering(true);

      const foundDevices =
        await DeviceDiscovery.discover();

      setDiscoveredDevices(foundDevices);

      return foundDevices;
    } catch (error) {
      console.error(
        "Erro ao descobrir dispositivos:",
        error,
      );

      setDiscoveredDevices([]);

      return [];
    } finally {
      setIsDiscovering(false);
    }
  }, []);

  const saveDevice = useCallback(
    async (device: DesktopDevice) => {
      await DeviceStorage.saveDevice(device);

      setDevices((currentDevices) => {
        const filteredDevices = currentDevices.filter(
          (item) => item.id !== device.id,
        );

        return [device, ...filteredDevices];
      });
    },
    [],
  );

  const removeDevice = useCallback(
    async (id: string) => {
      await DeviceStorage.removeDevice(id);

      setDevices((currentDevices) =>
        currentDevices.filter(
          (device) => device.id !== id,
        ),
      );
    },
    [],
  );

  return {
    devices,
    discoveredDevices,
    isLoading,
    isDiscovering,
    saveDevice,
    removeDevice,
    discoverDevices,
    refreshDevices: loadDevices,
  };
}