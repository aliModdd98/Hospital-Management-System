import { configureStore } from "@reduxjs/toolkit";
import loggerMiddleware from "./loggerMiddleware";

const store = configureStore({
  reducer: {},
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(loggerMiddleware),
});

export default store;
