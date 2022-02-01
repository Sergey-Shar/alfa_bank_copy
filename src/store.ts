import { configureStore } from "@reduxjs/toolkit";
import dataRateReducer from "./slices/dataRateSlice";
import dataCurenciesReducer from "./slices/dataCurenciesSlice";

export const store = configureStore({
  reducer: {
    dataRate: dataRateReducer,
    dataCurrencies: dataCurenciesReducer 
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
