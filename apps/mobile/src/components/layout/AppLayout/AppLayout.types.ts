import { ReactNode } from "react";

import { NavigationTab } from "@/types/NavigationTab";

export interface AppLayoutProps {
  children: ReactNode;

  title: string;

  currentTab: NavigationTab;

  onTabChange?: (tab: NavigationTab) => void;

  onPowerPress?: () => void;

  onSettingsPress?: () => void;
}