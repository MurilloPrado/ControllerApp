import { GestureResponderEvent } from "react-native";

import { Ionicons } from "@expo/vector-icons";

export type ControlButtonPosition =
  | "top"
  | "right"
  | "bottom"
  | "left";

export interface ControlButtonProps {
  icon: keyof typeof Ionicons.glyphMap;

  position: ControlButtonPosition;

  onPress?: (event: GestureResponderEvent) => void;
}