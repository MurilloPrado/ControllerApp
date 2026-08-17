import dgram from "node:dgram";

import {
  DISCOVERY_PORT,
  DISCOVERY_PROTOCOL_VERSION,
  DISCOVERY_REQUEST,
  DISCOVERY_RESPONSE,
  DiscoveryRequest,
  DiscoveryResponse,
} from "./DiscoveryProtocol.js";

export class DiscoveryServer {
  private readonly socket = dgram.createSocket("udp4");

  start() {
    this.socket.on("message", (message, remote) => {
      console.log(
        `Discovery request received from ${remote.address}:${remote.port}`,
      );

      try {
        const request = JSON.parse(
          message.toString(),
        ) as DiscoveryRequest;

        if (
          request.type !== DISCOVERY_REQUEST ||
          request.protocolVersion !==
            DISCOVERY_PROTOCOL_VERSION
        ) {
          console.log("Invalid discovery request.");
          return;
        }

        const response: DiscoveryResponse = {
          type: DISCOVERY_RESPONSE,
          protocolVersion:
            DISCOVERY_PROTOCOL_VERSION,
          device: {
            id: "desktop-001",
            name: "PC Teste",
            port: 8080,
          },
        };

        const responseBuffer = Buffer.from(
          JSON.stringify(response),
        );

        this.socket.send(
          responseBuffer,
          remote.port,
          remote.address,
          (error) => {
            if (error) {
              console.error(
                "Failed to send discovery response:",
                error,
              );

              return;
            }

            console.log(
              `Discovery response sent to ${remote.address}:${remote.port}`,
            );
          },
        );
      } catch (error) {
        console.error(
          "Invalid discovery message:",
          error,
        );
      }
    });

    this.socket.on("error", (error) => {
      console.error(
        "Discovery server error:",
        error,
      );
    });

    this.socket.bind(
      DISCOVERY_PORT,
      "0.0.0.0",
      () => {
        console.log(
          `Discovery server listening on UDP ${DISCOVERY_PORT}`,
        );
      },
    );
  }

  stop() {
    this.socket.close();
  }
}