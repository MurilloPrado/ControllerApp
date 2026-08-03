import { ReactNode } from "react";
import {
  GestureResponderEvent,
  StyleProp,
  ViewStyle,
} from "react-native";

export interface IconButtonProps {
  children: ReactNode;

  onPress?: (event: GestureResponderEvent) => void;

  disabled?: boolean;

  style?: StyleProp<ViewStyle>;
}