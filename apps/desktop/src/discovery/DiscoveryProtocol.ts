export const DISCOVERY_PORT = 41234;

export const DISCOVERY_PROTOCOL_VERSION = 1;

export const DISCOVERY_REQUEST = "DISCOVERY_REQUEST";
export const DISCOVERY_RESPONSE = "DISCOVERY_RESPONSE";

export interface DiscoveryRequest {
  type: typeof DISCOVERY_REQUEST;
  protocolVersion: typeof DISCOVERY_PROTOCOL_VERSION;
}

export interface DiscoveryResponse {
  type: typeof DISCOVERY_RESPONSE;
  protocolVersion: typeof DISCOVERY_PROTOCOL_VERSION;
  device: {
    id: string;
    name: string;
    port: number;
  };
}