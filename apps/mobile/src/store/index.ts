import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./slices/counterSlice";
import { baseApi } from "@/services/api/baseApi";

// "Database" of the app, where all the data is stored and managed
export const store = configureStore({
  reducer: {
    counter: counterReducer,

    [baseApi.reducerPath]: baseApi.reducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
        baseApi.middleware
    ),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;