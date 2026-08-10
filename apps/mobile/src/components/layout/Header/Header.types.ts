import { Ionicons } from "@expo/vector-icons";

export interface HeaderAction {
  icon: keyof typeof Ionicons.glyphMap;
  onPress?: () => void;
}

export interface HeaderProps {
  title: string;

  leftAction?: HeaderAction;

  rightAction?: HeaderAction;
}