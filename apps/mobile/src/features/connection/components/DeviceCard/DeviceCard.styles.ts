import { StyleSheet } from "react-native";

import { colors } from "@/theme";

import {
  DEVICE_CARD_PADDING,
  DEVICE_CARD_RADIUS,
} from "./DeviceCard.constants";

export const styles = StyleSheet.create({
  container: {
    width: "100%",
  },

  card: {
    flexDirection: "row",

    alignItems: "center",

    padding: DEVICE_CARD_PADDING,

    borderRadius: DEVICE_CARD_RADIUS,

    backgroundColor: colors.surface,
  },

  left: {
    marginRight: 16,
  },

  content: {
    flex: 1,
  },

  title: {
    fontSize: 18,

    fontWeight: "600",

    color: colors.text,
  },

  subtitle: {
    marginTop: 4,

    fontSize: 14,

    color: colors.textSecondary,
  },

  right: {
    flexDirection: "row",

    alignItems: "center",

    gap: 12,
  },

  status: {
    width: 12,

    height: 12,

    borderRadius: 999,
  },

  pressed: {
    opacity: 0.9,

    transform: [{ scale: 0.98 }],
  },
});