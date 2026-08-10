import { StyleSheet } from "react-native";

import { colors, spacing, typography } from "@/theme";

export const styles = StyleSheet.create({
  content: {
    flexGrow: 1,
    
    paddingHorizontal: spacing.md,
    paddingBottom: spacing.xl,
  },

  section: {
    marginBottom: spacing.xl,
  },

  sectionTitle: {
    marginBottom: spacing.md,

    color: colors.text,

    fontSize: typography.size.md,

    fontWeight: "600",
  },

  deviceList: {
    gap: spacing.sm,
  },

  emptyText: {
    color: colors.textSecondary,

    alignSelf: "center",

    fontSize: typography.size.sm,
  },

  helpButton: {
    alignSelf: "center",

    marginTop: "auto",
    marginBottom: spacing.xl,
  },

  helpText: {
    color: colors.primary,

    fontSize: typography.size.sm,

    textAlign: "center",
  },
});