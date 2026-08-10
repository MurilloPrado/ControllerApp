import { View } from "react-native";

import { Screen } from "../Screen";
import { Header } from "../Header";

import { styles } from "./HeaderLayout.styles";
import { HeaderLayoutProps } from "./HeaderLayout.types";

export function HeaderLayout({
  children,
  title,
  leftAction,
  rightAction,
}: HeaderLayoutProps) {
  return (
    <Screen>
      <Header
        title={title}
        leftAction={leftAction}
        rightAction={rightAction}
      />

      <View style={styles.content}>
        {children}
      </View>
    </Screen>
  );
}