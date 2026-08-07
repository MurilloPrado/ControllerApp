import { StyleSheet } from "react-native";

import { BUTTON_PADDING, BUTTON_RADIUS } from "./Button.constants";

export const styles = StyleSheet.create({
  container: {
    borderRadius: BUTTON_RADIUS,

    justifyContent: "center",

    alignItems: "center",
  },

  content: {
    flexDirection: "row",

    alignItems: "center",

    justifyContent: "center",

    padding: BUTTON_PADDING.large,

    gap: 8,
  },

  text: {
    fontSize: 16,

    fontWeight: "600",
  },

  disabled: {
    opacity: 0.5,
  },

  pressed: {
    transform: [{ scale: 0.98 }],
  },
});