import dgram from "node:dgram";

const DISCOVERY_PORT = 41234;

export class DiscoveryServer {
  private readonly socket = dgram.createSocket("udp4");

  start() {
    this.socket.on("message", (message, remote) => {
      console.log(
        `Discovery request received from ${remote.address}:${remote.port}`,
      );

      console.log("Message:", message.toString());
    });

    this.socket.on("error", (error) => {
      console.error("Discovery server error:", error);
    });

    this.socket.bind(DISCOVERY_PORT, "0.0.0.0", () => {
      console.log(
        `Discovery server listening on UDP ${DISCOVERY_PORT}`,
      );
    });
  }

  stop() {
    this.socket.close();
  }
}