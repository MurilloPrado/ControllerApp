import { Pressable, ScrollView, Text, View } from "react-native";

import { HeaderLayout } from "@/components/layout/HeaderLayout";
import { DeviceCard } from "./components/DeviceCard";

import { styles } from "./ConnectionScreen.styles";
import { useState } from "react";
import { EmptyState } from "./components/EmptyState";
import { ConnectingState } from "./components/ConnectingState";

import { Button } from "@/components/ui/Button";
import { DeviceStorage } from "./services/DeviceStorage";
import { DesktopDevice } from "./types/DesktopDevice";

type ConnectionView = "default" | "connecting";

const onlineDevices = [
  {
    id: "1",
    name: "PC Escritório",
    ip: "192.168.0.15",
    status: "available" as const,
  },
  {
    id: "2",
    name: "Notebook",
    ip: "192.168.0.20",
    status: "available" as const,
  },
];

const historyDevices = [
  {
    id: "3",
    name: "PC Gamer",
    ip: "192.168.0.30",
    status: "offline" as const,
  },
];

const handleTestSave = async () => {
  const device: DesktopDevice = {
    id: "pc-001",
    name: "PC Escritório",
    ip: "192.168.0.15",
    port: 8080,
    lastConnectedAt: new Date().toISOString(),
  };

  await DeviceStorage.saveDevice(device);

  console.log("Dispositivo salvo!");
};

const handleTestLoad = async () => {
  const devices = await DeviceStorage.getDevices();

  console.log("Dispositivos salvos:", devices);
};

const handleTestRemove = async () => {
  await DeviceStorage.removeDevice("pc-001");

  console.log("Dispositivo removido!");
};

export function ConnectionScreen() {
  const [view, setView] = useState<ConnectionView>("default");

  const [selectedDeviceId, setSelectedDeviceId] = useState<string | null>(null);

  const recentDevices = historyDevices.slice(0, 5);

  const selectedDevice = [
    ...onlineDevices,
    ...historyDevices,
  ].find(
    (device) => device.id === selectedDeviceId
  );

  const handleAddDevice = () => {
    console.log("Adicionar dispositivo");
  };

  const handleSettings = () => {
    console.log("Configurações");
  };

  const handleDevicePress = (id: string) => {
    setSelectedDeviceId(id);
    setView("connecting");
  };
  
  const handleCancelConnection = () => {
    setSelectedDeviceId(null);
    setView("default");
  };

  // Empty state when there are no devices in history
  if (historyDevices.length === 0) {
    return (
      <EmptyState
        onConnect={handleAddDevice}
      />
    )
  };

  // Connecting state when a device is selected
  if (view === "connecting" && selectedDevice) {
    return (
      <ConnectingState
        deviceName={selectedDevice.name}
        onCancel={handleCancelConnection}
      />
    );
  }

  return (
    <HeaderLayout
      title="Dispositivos"
      leftAction={{
        icon: "settings-outline",
        onPress: handleSettings,
      }}
      rightAction={{
        icon: "add",
        onPress: handleAddDevice,
      }}
    >
      <ScrollView
        contentContainerStyle={styles.content}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>
            Dispositivos online
          </Text>

          {onlineDevices.length > 0 ? (
            <View style={styles.deviceList}>
              {onlineDevices.map((device) => (
                <DeviceCard
                  key={device.id}
                  name={device.name}
                  ip={device.ip}
                  status={device.status}
                  onPress={() =>
                    handleDevicePress(device.id)
                  }
                />
              ))}
            </View>
          ) : (
            <Text style={styles.emptyText}>
              Nenhum dispositivo online.
            </Text>
          )}
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>
            Histórico
          </Text>

          {recentDevices.length > 0 ? (
            <View style={styles.deviceList}>
              {recentDevices.map((device) => (
                <DeviceCard
                  key={device.id}
                  name={device.name}
                  ip={device.ip}
                  status={device.status}
                  onPress={() =>
                    handleDevicePress(device.id)
                  }
                />
              ))}
            </View>
          ) : (
            <Text style={styles.emptyText}>
              Nenhum dispositivo conectado anteriormente.
            </Text>
          )}
        </View>

        <Pressable
            style={styles.helpButton}
            onPress={handleAddDevice}
        >
          <Text style={styles.helpText}>
            Não encontrou seu dispositivo?
          </Text>
        </Pressable>

        <View style={styles.section}>
          <Button
            title="TESTAR SALVAR"
            onPress={handleTestSave}
          />

          <Button
            title="TESTAR LER"
            onPress={handleTestLoad}
          />

          <Button
            title="TESTAR REMOVER"
            onPress={handleTestRemove}
          />
        </View>

      </ScrollView>
    </HeaderLayout>
  );
}