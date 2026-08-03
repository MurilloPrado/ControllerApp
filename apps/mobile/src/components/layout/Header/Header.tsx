import { Ionicons } from "@expo/vector-icons";
import { Text, View } from "react-native";

import { colors } from "@/theme";
import { IconButton } from "@/components/ui/IconButton";

import { styles } from "./Header.styles";
import { HeaderProps } from "./Header.types";

export function Header({
  title,
  onPowerPress,
  onSettingsPress,
}: HeaderProps) {
  return (
    <View style={styles.container}>
      <View style={styles.side}>
        <IconButton onPress={onPowerPress}>
          <Ionicons
            name="power-outline"
            size={24}
            color={colors.text}
          />
        </IconButton>
      </View>

      <View style={styles.titleContainer}>
        <Text style={styles.title}>{title}</Text>
      </View>

      <View style={styles.side}>
        <IconButton onPress={onSettingsPress}>
          <Ionicons
            name="settings-outline"
            size={24}
            color={colors.text}
          />
        </IconButton>
      </View>
    </View>
  );
}