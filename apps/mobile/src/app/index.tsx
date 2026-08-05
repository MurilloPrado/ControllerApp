import { AppLayout } from "@/components/layout/AppLayout";
import { ActionButtons } from "@/components/media/ActionButtons/ActionPanel";
import { DirectionPad } from "@/components/media/DirectionPad/DirectionPad";
import { MediaController } from "@/components/media/MediaController";
import { Text } from "react-native";

export default function MediaScreen() {
  return (
    <AppLayout
      title="Multimídia"
      currentTab="media"
      onPowerPress={() => console.log("Power")}
      onSettingsPress={() => console.log("Settings")}
      onTabChange={(tab) => console.log(tab)}
    >
      <Text>Conteúdo da tela</Text>
      <MediaController/>
      <DirectionPad />
      <ActionButtons />
    </AppLayout>
  );
}