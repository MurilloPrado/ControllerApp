import { Pressable, ScrollView, Text, View } from "react-native";

import { HeaderLayout } from "@/components/layout/HeaderLayout";
import { DeviceCard } from "./components/DeviceCard";

import { styles } from "./ConnectionScreen.styles";

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

export function ConnectionScreen() {
  const recentDevices = historyDevices.slice(0, 5);

  const handleAddDevice = () => {
    console.log("Adicionar dispositivo");
  };

  const handleSettings = () => {
    console.log("Configurações");
  };

  const handleDevicePress = (id: string) => {
    console.log("Selecionar dispositivo:", id);
  };

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

      </ScrollView>
    </HeaderLayout>
  );
}