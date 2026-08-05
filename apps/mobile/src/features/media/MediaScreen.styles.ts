import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  topSection: {
    flex: 1.2,
    justifyContent: "center",
    alignItems: "center",
  },

  bottomSection: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    paddingHorizontal: 24,
    paddingBottom: 32,
  },
});