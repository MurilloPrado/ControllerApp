import { StyleSheet } from "react-native";

import { colors, spacing, typography } from "@/theme";

export const styles = StyleSheet.create({
  container: {
    flex: 1,

    alignItems: "center",

    justifyContent: "center",

    paddingHorizontal: spacing.xl,
  },

  title: {
    marginTop: spacing.lg,

    color: colors.text,

    fontSize: typography.size.lg,

    fontWeight: "600",
  },

  deviceName: {
    marginTop: spacing.sm,

    color: colors.textSecondary,

    fontSize: typography.size.md,
  },

  buttonContainer: {
    position: "absolute",

    bottom: spacing["3xl"],

    width: "65%",
  },
});