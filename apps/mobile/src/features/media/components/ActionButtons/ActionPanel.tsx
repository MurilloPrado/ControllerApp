import { View } from "react-native";

import { ActionButton } from "./ActionButton";
import { styles } from "./ActionButtons.styles";
import { ActionButtonsProps } from "./ActionButtons.types";

export function ActionButtons({
  onFullscreen,
  onMute,
  onSkipBackward,
  onSkipForward,
}: ActionButtonsProps) {
  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <ActionButton
          icon="fullscreen"
          shadowColor="#39E68A"
          onPress={onFullscreen}
        />

        <ActionButton
          icon="volume-off"
          shadowColor="#FF3FD5"
          onPress={onMute}
        />
      </View>

      <View style={styles.row}>
        <ActionButton
          icon="fast-rewind"
          shadowColor="#3C83F6"
          onPress={onSkipBackward}
        />

        <ActionButton
          icon="fast-forward"
          shadowColor="#FF3838"
          onPress={onSkipForward}
        />
      </View>
    </View>
  );
}