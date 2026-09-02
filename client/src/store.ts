import { configureStore } from "@reduxjs/toolkit";
import authslice from "./ReduxSlice/authslice";

const store = configureStore({
    reducer: {
        auth: authslice,
    },
});

export type Rootstate = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch;

export default store;

