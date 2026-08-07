import { StyleSheet } from "react-native";

import { colors } from "@/theme";

export const styles = StyleSheet.create({
  container: {
    flex: 1,

    justifyContent: "center",

    alignItems: "center",

    paddingHorizontal: 32,
  },

  illustration: {
    flexDirection: "row",

    alignItems: "center",

    gap: 12,

    marginBottom: 40,
  },

  title: {
    fontSize: 24,

    fontWeight: "600",

    color: colors.text,

    textAlign: "center",
  },

  description: {
    marginTop: 12,

    marginBottom: 40,

    textAlign: "center",

    color: colors.textSecondary,

    lineHeight: 22,
  },
});