import { MaterialIcons } from "@expo/vector-icons";
import {
  Pressable,
  Text,
  View,
} from "react-native";

import { colors } from "@/theme";

import {
  DEVICE_ICON_SIZE,
} from "./DeviceCard.constants";

import { styles } from "./DeviceCard.styles";
import {
  DeviceCardProps,
  DeviceStatus,
} from "./DeviceCard.types";

const statusColors: Record<DeviceStatus, string> = {
  available: colors.success,

  connecting: colors.warning,

  connected: colors.primary,

  offline: colors.border,
};

export function DeviceCard({
  name,
  ip,
  status = "available",
  onPress,
}: DeviceCardProps) {
  return (
    <View style={styles.container}>
      <Pressable
        onPress={onPress}
        style={({ pressed }) => [
          styles.card,
          pressed && styles.pressed,
        ]}
      >
        <View style={styles.left}>
          <MaterialIcons
            name="desktop-windows"
            size={DEVICE_ICON_SIZE}
            color={colors.text}
          />
        </View>

        <View style={styles.content}>
          <Text style={styles.title}>
            {name}
          </Text>

          <Text style={styles.subtitle}>
            {ip}
          </Text>
        </View>

        <View style={styles.right}>
          <View
            style={[
              styles.status,
              {
                backgroundColor:
                  statusColors[status],
              },
            ]}
          />

          <MaterialIcons
            name="chevron-right"
            size={24}
            color={colors.textSecondary}
          />
        </View>
      </Pressable>
    </View>
  );
}