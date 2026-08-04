import { StyleSheet } from "react-native";

import { colors } from "@/theme";

import {
  BORDER_RADIUS,
  MEDIA_CONTROLLER_BUTTON_SIZE,
  MEDIA_CONTROLLER_PADDING,
  MEDIA_CONTROLLER_SIZE,
  INNER_CIRCLE_SIZE,
} from "./MediaController.constants";

export const styles = StyleSheet.create({
  container: {
    width: MEDIA_CONTROLLER_SIZE,
    height: MEDIA_CONTROLLER_SIZE,
    alignSelf: "center",
  },

  outerCircle: {
    flex: 1,

    borderRadius: BORDER_RADIUS,

    backgroundColor: colors.black,

    justifyContent: "center",
    alignItems: "center",
  },

  outerCircleShadow: {
    position: "absolute",

    width: MEDIA_CONTROLLER_SIZE,
    height: MEDIA_CONTROLLER_SIZE,

    borderRadius: 999,

    borderWidth: 8,
    borderColor: colors.primary,

    top: 8,
  },

  innerCircle: {
    width: INNER_CIRCLE_SIZE,
    height: INNER_CIRCLE_SIZE,

    borderRadius: BORDER_RADIUS,

    backgroundColor: colors.background,

    justifyContent: "center",
    alignItems: "center",
  },

  controlButton: {
    position: "absolute",

    width: MEDIA_CONTROLLER_BUTTON_SIZE,
    height: MEDIA_CONTROLLER_BUTTON_SIZE,

    justifyContent: "center",
    alignItems: "center",
  },

  top: {
    top: MEDIA_CONTROLLER_PADDING,
    alignSelf: "center",
  },

  bottom: {
    bottom: MEDIA_CONTROLLER_PADDING,
    alignSelf: "center",
  },

  left: {
    left: MEDIA_CONTROLLER_PADDING,
    top: "50%",
    marginTop: -(MEDIA_CONTROLLER_BUTTON_SIZE / 2),
  },

  right: {
    right: MEDIA_CONTROLLER_PADDING,
    top: "50%",
    marginTop: -(MEDIA_CONTROLLER_BUTTON_SIZE / 2),
  },

  pressed: {
    opacity: 0.6,
    transform: [{ scale: 0.95 }],
  },
});