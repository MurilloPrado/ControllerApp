import { StyleSheet } from "react-native";

import { colors } from "@/theme";

import {
  ACTION_BUTTON_GAP,
  ACTION_BUTTON_RADIUS,
  ACTION_BUTTON_SIZE,
} from "./ActionButtons.constants";

export const styles = StyleSheet.create({
  container: {
    alignSelf: "center",
    gap: ACTION_BUTTON_GAP,
  },

  row: {
    flexDirection: "row",
    gap: ACTION_BUTTON_GAP,
  },

  button: {
    width: ACTION_BUTTON_SIZE,
    height: ACTION_BUTTON_SIZE,

    borderRadius: ACTION_BUTTON_RADIUS,

    justifyContent: "center",
    alignItems: "center",

    backgroundColor: colors.black,
  },

  shadow: {
    borderRadius: ACTION_BUTTON_RADIUS,

    paddingBottom: 6,

    overflow: "hidden",
  },

  pressed: {
    opacity: 0.6,
    transform: [{ scale: 0.96 }],
  },
});