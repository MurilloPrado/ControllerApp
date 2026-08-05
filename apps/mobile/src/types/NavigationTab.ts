import { MaterialIcons } from "@expo/vector-icons";
import { Href } from "../../.expo/types/router";

export type NavigationTab =
  | "media"
  | "mouse"
  | "keyboard"
  | "tablet";

export interface NavigationTabConfig {
  key: NavigationTab;
  label: string;
  icon: keyof typeof MaterialIcons.glyphMap;
  route: Href;
}