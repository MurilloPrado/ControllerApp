import { MaterialIcons } from "@expo/vector-icons";

import { NavigationTab } from "@/types/NavigationTab";

export const navigationTabs: {
  key: NavigationTab;
  label: string;
  icon: keyof typeof MaterialIcons.glyphMap;
}[] = [
  {
    key: "media",
    label: "Media",
    icon: "settings-remote",
  },
  {
    key: "mouse",
    label: "Mouse",
    icon: "mouse",
  },
  {
    key: "keyboard",
    label: "Keyboard",
    icon: "keyboard",
  },
  {
    key: "tablet",
    label: "Sketch",
    icon: "create",
  },
];