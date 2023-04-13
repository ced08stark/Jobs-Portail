import { configureStore } from "@reduxjs/toolkit";
import projetRecucer from "./features/projetSlice";
import jobReducer from "./features/jobSlice"
import tokenReducer from "./features/token"

export const store = configureStore({
  reducer: {
    projet: projetRecucer,
    job: jobReducer,
    token: tokenReducer
  },
});

