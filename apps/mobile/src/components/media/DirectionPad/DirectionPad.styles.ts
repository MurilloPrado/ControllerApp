import { StyleSheet } from "react-native";

import { colors } from "@/theme";

import {
  PAD_BORDER_RADIUS,
  PAD_BUTTON_SIZE,
  PAD_SIZE,
  PAD_GAP,
} from "./DirectionPad.constants";

export const styles = StyleSheet.create({
  container: {
    width: PAD_SIZE,
    height: PAD_SIZE,

    position: "relative",

    justifyContent: "center",
    alignSelf: "center",
    alignItems: "center",
  },

  horizontalBar: {
    position: "absolute",

    width: PAD_SIZE * 0.9,
    height: PAD_BUTTON_SIZE,

    backgroundColor: "#000",

    borderRadius: 10,
  },

  verticalBar: {
    position: "absolute",

    width: PAD_BUTTON_SIZE,
    height: PAD_SIZE * 0.9,

    backgroundColor: "#000",

    borderRadius: 10,
  },

  horizontalBarShadow: {
    position: "absolute",

    width: PAD_SIZE * 0.9,
    height: PAD_BUTTON_SIZE,

    backgroundColor: colors.gray,

    borderRadius: 10,

    transform: [
        { translateY: 12 },
    ],
  },

  verticalBarShadow: {
    position: "absolute",

    width: PAD_BUTTON_SIZE,
    height: PAD_SIZE * 0.9,

    backgroundColor: colors.gray,

    borderRadius: 10,

    transform: [
        { translateY: 12 },
    ],
  },

  button: {
    width: PAD_BUTTON_SIZE,
    height: PAD_BUTTON_SIZE,

    borderRadius: PAD_BORDER_RADIUS,

    backgroundColor: "transparent",

    justifyContent: "center",
    alignItems: "center",
  },

  top: {
    position: "absolute",
    top: 0,
    left: "50%",
    marginLeft: -PAD_BUTTON_SIZE / 2,
  },

  bottom: {
    position: "absolute",
    bottom: 0,
    left: "50%",
    marginLeft: -PAD_BUTTON_SIZE / 2,
  },

  left: {
    position: "absolute",
    left: 0,
    top: "50%",
    marginTop: -PAD_BUTTON_SIZE / 2,
    
  },

  right: {
    position: "absolute",
    right: 0,
    top: "50%",
    marginTop: -PAD_BUTTON_SIZE / 2,
  },

  center: {
    position: "absolute",

    width: 56,
    height: 56,

    borderRadius: 28,

    backgroundColor: "#FFF",

    justifyContent: "center",
    alignItems: "center",

    zIndex: 5,
  },

  pressed: {
    opacity: 0.6,
    transform: [{ scale: 0.96 }],
  },
});