import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./tempSlice";
import basketReducer from "./basketSlice";
import { performanceApi } from "../services/performance";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    basket: basketReducer,
    [performanceApi.reducerPath]: performanceApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(performanceApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
