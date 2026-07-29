import { Button, Text, View } from "react-native";

import { increment } from "@/store/slices/counterSlice";
import {
  useAppDispatch,
  useAppSelector,
} from "@/store/hooks";

export default function HomeScreen() {
  const dispatch = useAppDispatch();

  const counter = useAppSelector(
    (state) => state.counter.value
  );

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        gap: 20,
      }}
    >
      <Text>Valor: {counter}</Text>

      <Button
        title="Incrementar"
        onPress={() => dispatch(increment())}
      />
    </View>
  );
}