import { Ionicons } from "@expo/vector-icons";
import { Pressable } from "react-native";

import { colors } from "@/theme";

import { styles } from "./DirectionPad.styles";
import { DirectionButtonProps } from "./DirectionButton.types";
import { PAD_ICON_SIZE } from "./DirectionPad.constants";

export function DirectionButton({
  icon,
  onPress,
  style
}: DirectionButtonProps) {
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => [
        styles.button,
        style,
        pressed && styles.pressed,
      ]}
    >
      <Ionicons
        name={icon}
        size={PAD_ICON_SIZE}
        color={colors.white}
      />
    </Pressable>
  );
}