import { StyleSheet } from "react-native";

import { colors, radius } from "@/theme";

export const styles = StyleSheet.create({
  container: {
    width: 48,
    height: 48,

    justifyContent: "center",
    alignItems: "center",

    borderRadius: radius.md,

    backgroundColor: colors.surface,
  },

  pressed: {
    opacity: 0.7,
  },

  disabled: {
    opacity: 0.4,
  },
});