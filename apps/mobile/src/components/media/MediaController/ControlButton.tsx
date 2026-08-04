import { Ionicons } from "@expo/vector-icons";
import { Pressable } from "react-native";

import { colors } from "@/theme";

import { styles } from "./MediaController.styles";
import { ControlButtonProps } from "./ControlButton.types";

export function ControlButton({
  icon,
  position,
  onPress,
}: ControlButtonProps) {
  return (
    <Pressable
        onPress={onPress}
        style={({ pressed }) => [
            styles.controlButton,
            styles[position],
            pressed && styles.pressed,
        ]}
      >
      <Ionicons
        name={icon}
        size={30}
        color={colors.white}
      />
    </Pressable>
  );
}