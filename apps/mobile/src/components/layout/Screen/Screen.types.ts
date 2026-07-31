import { ReactNode } from "react";
import { StyleProp, ViewStyle } from "react-native";

export interface ScreenProps {
  children: ReactNode;
  style?: StyleProp<ViewStyle>;
}