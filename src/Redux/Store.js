import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { reAdmin } from "./Admin";
import { reOpenMenu } from "./OpenMenu";


const reducer = combineReducers({
    openMenu: reOpenMenu,
    admin: reAdmin,
});

export const Store = configureStore({
    reducer,
    devTools: process.env.NODE_ENV !== "production",
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false,
            immutableCheck: false,
        }),
});
