import { View } from "react-native";

import { AppLayout } from "@/components/layout/AppLayout";
import { ActionButtons } from "@/components/media/ActionButtons";
import { DirectionPad } from "@/components/media/DirectionPad";
import { MediaController } from "@/components/media/MediaController";

import { styles } from "./MediaScreen.styles";

export function MediaScreen() {
  return (
    <AppLayout
      title="Multimídia"
      currentTab="media"
      onPowerPress={() => console.log("Power")}
      onSettingsPress={() => console.log("Settings")}
    >
      <View style={styles.container}>

        <View style={styles.topSection}>
            <MediaController />
        </View>

        <View style={styles.bottomSection}>
            <DirectionPad />

            <ActionButtons />
        </View>
      </View>
    </AppLayout>
  );
}