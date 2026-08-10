import { ActivityIndicator, Text, View } from "react-native";

import { Button } from "@/components/ui/Button";

import { styles } from "./ConnectingState.styles";
import { ConnectingStateProps } from "./ConnectingState.types";

export function ConnectingState({
  deviceName,
  onCancel,
}: ConnectingStateProps) {
  return (
    <View style={styles.container}>
      <ActivityIndicator
        size="large"
      />

      <Text style={styles.title}>
        Conectando...
      </Text>

      <Text style={styles.deviceName}>
        {deviceName}
      </Text>

      <View style={styles.buttonContainer}>
        <Button
          title="Cancelar"
          variant="primary"
          size="large"
          onPress={onCancel}
        />
      </View>
    </View>
  );
}