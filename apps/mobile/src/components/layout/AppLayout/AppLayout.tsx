import { View } from "react-native";

import { Screen } from "../Screen";
import { Header } from "../Header";
import { BottomNavigation } from "../BottomNavigation";

import { styles } from "./AppLayout.styles";
import { AppLayoutProps } from "./AppLayout.types";

export function AppLayout({
  children,
  title,
  currentTab,
  onTabChange,
  onPowerPress,
  onSettingsPress,
}: AppLayoutProps) {
  return (
    <Screen>
      <Header
        title={title}
        onPowerPress={onPowerPress}
        onSettingsPress={onSettingsPress}
      />

      <View style={styles.content}>
        {children}
      </View>

      <BottomNavigation
        current={currentTab}
        onChange={onTabChange}
      />
    </Screen>
  );
}