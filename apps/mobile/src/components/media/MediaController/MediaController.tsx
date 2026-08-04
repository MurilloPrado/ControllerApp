import { Ionicons } from "@expo/vector-icons";
import { Pressable, View } from "react-native";

import { colors } from "@/theme";

import { styles } from "./MediaController.styles";
import { MediaControllerProps } from "./MediaController.types";
import { ControlButton } from "./ControlButton";
import { PLAY_ICON_SIZE } from "./MediaController.constants";

export function MediaController({
  onPlayPause,
  onNext,
  onPrevious,
  onVolumeUp,
  onVolumeDown,
}: MediaControllerProps) {
  return (
    <View style={styles.container}>
      <View style={styles.outerCircleShadow} />
      <View style={styles.outerCircle}>

        <ControlButton
          icon="add"
          position="top"
          onPress={onVolumeUp}
        />

        <ControlButton
          icon="play-skip-back"
          position="left"
          onPress={onPrevious}
        />

        <ControlButton
          icon="play-skip-forward"
          position="right"
          onPress={onNext}
        />

        <ControlButton
          icon="remove"
          position="bottom"
          onPress={onVolumeDown}
        />

        <View style={styles.innerCircle}>
          <Pressable
            onPress={onPlayPause}
            style={({ pressed }) => pressed && styles.pressed}
            >
            <Ionicons
                name="pause"
                size={PLAY_ICON_SIZE}
                color={colors.text}
            />
          </Pressable>
        </View>

      </View>
    </View>
  );
}