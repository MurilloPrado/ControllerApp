import { MaterialIcons } from "@expo/vector-icons";
import {
  Pressable,
  Text,
  View,
} from "react-native";

import { colors } from "@/theme";

import {
  BUTTON_HEIGHT,
  BUTTON_ICON_SIZE,
} from "./Button.constants";

import { styles } from "./Button.styles";
import { ButtonProps } from "./Button.types";

const variants = {
  primary: {
    backgroundColor: colors.primary,
    textColor: colors.white,
  },

  secondary: {
    backgroundColor: colors.surface,
    textColor: colors.text,
  },

  danger: {
    backgroundColor: colors.white,
    textColor: colors.white,
  },
} as const;

export function Button({
  title,
  onPress,
  variant = "primary",
  size = "large",
  disabled = false,
  leftIcon,
}: ButtonProps) {
  const currentVariant = variants[variant];

  return (
    <Pressable
      disabled={disabled}
      onPress={onPress}
      style={({ pressed }) => [
        styles.container,

        {
          backgroundColor: currentVariant.backgroundColor,
          height: BUTTON_HEIGHT[size],
        },

        disabled && styles.disabled,

        pressed && styles.pressed,
      ]}
    >
      <View style={styles.content}>

        {leftIcon && (
            <MaterialIcons 
                name={leftIcon}
                size={BUTTON_ICON_SIZE[size]}
                color={currentVariant.textColor}
            />
        )}

        <Text
            style={[
                styles.text,
                {
                    color: currentVariant.textColor,
                },
            ]}
        >
            {title}
        </Text>

      </View>
    </Pressable>
  );
}