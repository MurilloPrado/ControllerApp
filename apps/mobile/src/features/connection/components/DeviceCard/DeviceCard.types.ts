export type DeviceStatus =
  | "available"
  | "connecting"
  | "connected"
  | "offline";

export interface DeviceCardProps {
  name: string;

  ip: string;

  status?: DeviceStatus;

  onPress?: () => void;
}