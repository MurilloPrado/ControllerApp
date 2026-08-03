import { StyleSheet } from "react-native";

import { colors, spacing } from "@/theme";

export const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",

    paddingVertical: spacing.md,

    borderTopWidth: 1,

    borderTopColor: colors.border,

    backgroundColor: colors.background,
  },
});