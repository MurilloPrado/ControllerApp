import { Screen } from "@/components/layout/Screen";
import { Header } from "@/components/layout/Header";
import { BottomNavigation } from "@/components/layout/BottomNavigation";
import { useState } from "react";

export default function TestScreen() {
  const [current,setCurrent] = useState<any>("media");
  console.log("TestScreen current:", current);

  return (
    <Screen>
      <Header
        title="Multimídia"
        onPowerPress={() => console.log("Power")}
        onSettingsPress={() => console.log("Settings")}
      />

      <BottomNavigation
        current={current}
        onChange={setCurrent}
      />
      
    </Screen>
  );
}