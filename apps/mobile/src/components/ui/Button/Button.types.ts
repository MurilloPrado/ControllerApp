import { MaterialIcons } from "@expo/vector-icons";

export type ButtonVariant =
  | "primary"
  | "secondary"
  | "danger";

export type ButtonSize =
  | "small"
  | "medium"
  | "large";

export interface ButtonProps {
  title: string;

  onPress?: () => void;

  variant?: ButtonVariant;

  size?: ButtonSize;

  loading?: boolean;

  disabled?: boolean;

  leftIcon?: keyof typeof MaterialIcons.glyphMap;
}