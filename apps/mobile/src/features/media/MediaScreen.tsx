import { View } from "react-native";

import { AppLayout } from "@/components/layout/AppLayout";
import { ActionButtons } from "@/features/media/components/ActionButtons";
import { DirectionPad } from "@/features/media/components/DirectionPad";
import { MediaController } from "@/features/media/components/MediaController";

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
            
            <View style={styles.left}>
                <DirectionPad />
            </View>
            
            <View style={styles.right}>
                <ActionButtons />
            </View>

        </View>
      </View>
    </AppLayout>
  );
}