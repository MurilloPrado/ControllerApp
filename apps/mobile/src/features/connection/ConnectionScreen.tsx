import { Pressable, ScrollView, Text, View } from "react-native";

import { HeaderLayout } from "@/components/layout/HeaderLayout";
import { DeviceCard } from "./components/DeviceCard";

import { styles } from "./ConnectionScreen.styles";
import { useState } from "react";
import { EmptyState } from "./components/EmptyState";
import { ConnectingState } from "./components/ConnectingState";
import { useDevices } from "./hooks/useDevices"

import { Button } from "@/components/ui/Button";
import { DeviceStorage } from "./services/DeviceStorage";
import { DesktopDevice } from "./types/DesktopDevice";
import { DiscoveredDevice } from "./types/DiscoveredDevice";
import { is } from "zod/v4/locales";

type ConnectionView = "default" | "connecting";

export function ConnectionScreen() {
  const [view, setView] = useState<ConnectionView>("default");

  const [selectedDeviceId, setSelectedDeviceId] = useState<DiscoveredDevice | null>(null);

  const {
    devices,
    discoveredDevices,
    isLoading,
    isDiscovering,
    discoverDevices
  } = useDevices();

  const handleTestDiscovery = async () => {
    const foundDevices = await discoverDevices();

    console.log("Dispositivos encontrados:", foundDevices);
  };

  const recentDevices = devices.slice(0, 5);

  const selectedDevice = selectedDeviceId;

  const handleAddDevice = () => {
    console.log("Adicionar dispositivo");
  };

  const handleSettings = () => {
    console.log("Configurações");
  };

  const handleDevicePress = ( device: DiscoveredDevice, ) => {
    setSelectedDeviceId(device);
    setView("connecting");
  };
    
  const handleCancelConnection = () => {
    setSelectedDeviceId(null);
    setView("default");
  };

  // Empty state when there are no devices in history
  if (devices.length === 100) {
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
        device={selectedDevice}
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

          {discoveredDevices.length > 0 ? (
            <View style={styles.deviceList}>
              {discoveredDevices.map((device) => (
                <DeviceCard
                  key={device.id}
                  name={device.name}
                  ip={device.ip}
                  onPress={() =>
                    handleDevicePress(device)
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
                  onPress={() =>
                    handleDevicePress(device)
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
            title={
              isDiscovering
                ? "Procurando..."
                : "TESTAR DESCOBERTA"
            }
            onPress={handleTestDiscovery}
            disabled={isDiscovering}
          />
        </View>

      </ScrollView>
    </HeaderLayout>
  );
}