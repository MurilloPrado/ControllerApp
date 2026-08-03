import { MaterialIcons } from "@expo/vector-icons";
import { View } from "react-native";

import { navigationTabs } from "@/constants/navigationTabs";
import { colors } from "@/theme";
import { IconButton } from "@/components/ui/IconButton";

import { styles } from "./BottomNavigation.styles";
import { BottomNavigationProps } from "./BottomNavigation.types";

export function BottomNavigation({
  current,
  onChange,
}: BottomNavigationProps) {
  return (
    <View style={styles.container}>
      {navigationTabs.map((tab) => (
        <IconButton
          key={tab.key}
          onPress={() => onChange?.(tab.key)}
        >
          <MaterialIcons
            name={tab.icon}
            size={24}
            color={
              current === tab.key
                ? colors.primary
                : colors.text
            }
          />
        </IconButton>
      ))}
    </View>
  );
}