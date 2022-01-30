import { configureStore } from "@reduxjs/toolkit";
import dataRateReducer from "./slices/dateSlice";

export const store = configureStore({
  reducer: {
    dataRate: dataRateReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
