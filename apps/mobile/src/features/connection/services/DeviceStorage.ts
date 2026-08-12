import AsyncStorage from "@react-native-async-storage/async-storage";

import { DesktopDevice } from "../types/DesktopDevice";

const DEVICES_STORAGE_KEY = "@remote-control/devices";

export const DeviceStorage = {
  async getDevices(): Promise<DesktopDevice[]> {
    const storedDevices =
      await AsyncStorage.getItem(DEVICES_STORAGE_KEY);

    if (!storedDevices) {
      return [];
    }

    return JSON.parse(storedDevices);
  },

  async saveDevice(device: DesktopDevice): Promise<void> {
    const devices = await this.getDevices();

    const filteredDevices = devices.filter(
      (item) => item.id !== device.id,
    );

    filteredDevices.unshift(device);

    await AsyncStorage.setItem(
      DEVICES_STORAGE_KEY,
      JSON.stringify(filteredDevices),
    );
  },

  async removeDevice(id: string): Promise<void> {
    const devices = await this.getDevices();

    const filteredDevices = devices.filter(
      (device) => device.id !== id,
    );

    await AsyncStorage.setItem(
      DEVICES_STORAGE_KEY,
      JSON.stringify(filteredDevices),
    );
  },
};