import { Pressable, View } from "react-native";

import { DirectionButton } from "./DirectionButton";
import { styles } from "./DirectionPad.styles";
import { DirectionPadProps } from "./DirectionPad.types";

export function DirectionPad({
  onUp,
  onDown,
  onLeft,
  onRight,
  onCenter,
}: DirectionPadProps) {
  return (
    <View style={styles.container}>
        
        <View style={styles.horizontalBarShadow} />
        <View style={styles.horizontalBar} />
        <View style={styles.verticalBarShadow} />
        <View style={styles.verticalBar} />

        <DirectionButton
            style={styles.top}
            icon="chevron-up"
            onPress={onUp}
        />

        <DirectionButton
            style={styles.left}
            icon="chevron-back"
            onPress={onLeft}
        />

        <DirectionButton
            style={styles.right}
            icon="chevron-forward"
            onPress={onRight}
        />

        <DirectionButton
            style={styles.bottom}
            icon="chevron-down"
            onPress={onDown}
        />

        <Pressable
            style={styles.center}
            onPress={onCenter}
        />

    </View>
  );
}