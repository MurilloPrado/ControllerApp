import { DiscoveredDevice } from "../types/DiscoveredDevice";

export const DeviceDiscovery = {
  async discover(): Promise<DiscoveredDevice[]> {
    return [
      {
        id: "desktop-001",
        name: "PC Teste UDP",
        ip: "192.168.0.15",
        port: 8080,
      },
    ];
  },
};