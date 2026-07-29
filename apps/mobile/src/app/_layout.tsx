import { Stack } from "expo-router";
import { Provider } from "react-redux";

import { store } from "@/store";

export default function RootLayout() {
  return (
    // Provider is a component that makes the Redux store available to any nested components that need to access the Redux store.
    <Provider store={store}>
      <Stack />
    </Provider>
  );
}