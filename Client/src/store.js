import { configureStore } from "@reduxjs/toolkit";
import globalReducer from "./states/global.js";

const store = configureStore({
    reducer: {
        global: globalReducer
    }
})

export default store