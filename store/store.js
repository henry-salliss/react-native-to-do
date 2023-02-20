import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counterSlice";
import sessionReducer from "./sessionSlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    session: sessionReducer,
  },
});
