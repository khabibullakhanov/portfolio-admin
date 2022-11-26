import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { reAdmin } from "./Admin";
import { reLoading } from "./Loading";
import { reOpenMenu } from "./OpenMenu";


const reducer = combineReducers({
    openMenu: reOpenMenu,
    admin: reAdmin,
    loading: reLoading,
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
