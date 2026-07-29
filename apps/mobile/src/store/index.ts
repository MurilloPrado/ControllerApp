import { configureStore } from "@reduxjs/toolkit";

// "Database" of the app, where all the data is stored and managed
export const store = configureStore({
  reducer: {},
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;