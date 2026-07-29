import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./slices/counterSlice";

// "Database" of the app, where all the data is stored and managed
export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;