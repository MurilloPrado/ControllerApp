import { NavigationTab } from "@/types/NavigationTab";

export interface BottomNavigationProps {
  current: NavigationTab;

  onChange?: (tab: NavigationTab) => void;
}