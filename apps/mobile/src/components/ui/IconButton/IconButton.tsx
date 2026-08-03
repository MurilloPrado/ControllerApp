import { Pressable } from "react-native";

import { styles } from "./IconButton.styles";
import { IconButtonProps } from "./IconButton.types";

export function IconButton({
  children,
  onPress,
  disabled = false,
  style,
}: IconButtonProps) {
  return (
    <Pressable
      disabled={disabled}
      onPress={onPress}
      style={({ pressed }) => [
        styles.container,
        pressed && styles.pressed,
        disabled && styles.disabled,
        style,
      ]}
    >
      {children}
    </Pressable>
  );
}