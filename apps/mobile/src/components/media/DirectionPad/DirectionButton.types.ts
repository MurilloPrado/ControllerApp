import { GestureResponderEvent, StyleProp, ViewStyle } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export interface DirectionButtonProps {
  icon: keyof typeof Ionicons.glyphMap;

  onPress?: (event: GestureResponderEvent) => void;

  style?: StyleProp<ViewStyle>;
}