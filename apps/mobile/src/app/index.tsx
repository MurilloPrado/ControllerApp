import { AppLayout } from "@/components/layout/AppLayout";
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
    </AppLayout>
  );
}