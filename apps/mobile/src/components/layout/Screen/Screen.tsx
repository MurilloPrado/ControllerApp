import { SafeAreaView } from "react-native-safe-area-context";

import { ScreenProps } from "./Screen.types";
import { styles } from "./Screen.styles";

export function Screen({ children, style }: ScreenProps) {
  return (
    <SafeAreaView
      style={[styles.container, style]}
      edges={["top", "left", "right"]}
    >
      {children}
    </SafeAreaView>
  );
}