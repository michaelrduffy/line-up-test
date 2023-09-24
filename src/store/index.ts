import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./tempSlice";
import { performanceApi } from "../services/performace";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    [performanceApi.reducerPath]: performanceApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(performanceApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
