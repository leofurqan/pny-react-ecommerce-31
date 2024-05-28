import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./userRedux"

export const store = configureStore({
    reducer: rootReducer
})