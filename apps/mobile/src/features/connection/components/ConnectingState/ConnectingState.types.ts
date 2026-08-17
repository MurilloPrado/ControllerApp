import { DiscoveredDevice } from "../../types/DiscoveredDevice";

export interface ConnectingStateProps {
  device: DiscoveredDevice;
  onCancel: () => void;
}