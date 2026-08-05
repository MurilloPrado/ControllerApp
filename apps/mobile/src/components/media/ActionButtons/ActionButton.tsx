import { MaterialIcons } from "@expo/vector-icons";
import { Pressable, View } from "react-native";

import { colors } from "@/theme";

import {
  ACTION_ICON_SIZE,
} from "./ActionButtons.constants";

import { styles } from "./ActionButtons.styles";

interface ActionButtonProps {
  icon: keyof typeof MaterialIcons.glyphMap;

  shadowColor: string;

  onPress?: () => void;
}

export function ActionButton({
  icon,
  shadowColor,
  onPress,
}: ActionButtonProps) {
  return (
    <View
      style={[
        styles.shadow,
        {
          backgroundColor: shadowColor,
        },
      ]}
    >
        <Pressable
        onPress={onPress}
        style={({ pressed }) => [
            styles.button,
            pressed && styles.pressed,
        ]}
        >
        <MaterialIcons
            name={icon}
            size={ACTION_ICON_SIZE}
            color={colors.white}
        />
        </Pressable>

    </View>
  );
}