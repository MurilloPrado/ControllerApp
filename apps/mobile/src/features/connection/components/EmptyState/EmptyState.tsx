import { MaterialIcons } from "@expo/vector-icons";
import { View, Text } from "react-native";

import { Button } from "@/components/ui/Button";
import { colors } from "@/theme";

import { EmptyStateProps } from "./EmptyState.types";
import { styles } from "./EmptyState.styles";

export function EmptyState({
  onConnect,
}: EmptyStateProps) {
  return (
    <View style={styles.container}>
      <View style={styles.illustration}>
        <MaterialIcons
          name="desktop-windows"
          size={72}
          color={colors.text}
        />

        <MaterialIcons
          name="wifi"
          size={48}
          color={colors.primary}
        />

        <MaterialIcons
          name="smartphone"
          size={72}
          color={colors.text}
        />
      </View>

      <Text style={styles.title}>
        Conecte-se ao seu computador
      </Text>

      <Text style={styles.description}>
        Certifique-se de que o aplicativo desktop está em execução.
      </Text>

      <Button
        title="Buscar dispositivos"
        onPress={onConnect}
      />
    </View>
  );
}