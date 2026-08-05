import { NavigationTabConfig } from "@/types/NavigationTab";

export const navigationTabs: NavigationTabConfig[] = [
  {
    key: "media",
    label: "Media",
    icon: "settings-remote",
    route: "/media",
  },
  {
    key: "mouse",
    label: "Mouse",
    icon: "mouse",
    route: "/mouse",
  },
  {
    key: "keyboard",
    label: "Keyboard",
    icon: "keyboard",
    route: "/keyboard",
  },
  {
    key: "tablet",
    label: "Tablet",
    icon: "create",
    route: "/tablet",
  },
];