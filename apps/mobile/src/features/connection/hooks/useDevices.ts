// responsable for save, remove and load devices
import { useCallback, useEffect, useState } from "react";

import { DeviceStorage } from "../services/DeviceStorage";
import { DesktopDevice } from "../types/DesktopDevice";

export function useDevices() {
  const [devices, setDevices] = useState<DesktopDevice[]>([]);
  const [isLoading, setIsLoading] = useState(true);

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
    isLoading,
    saveDevice,
    removeDevice,
    refreshDevices: loadDevices,
  };
}