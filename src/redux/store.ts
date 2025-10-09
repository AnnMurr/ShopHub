import { configureStore } from "@reduxjs/toolkit";
import { authApi } from "../services/authApi";
import authReducer from "./authSlice";
import { getDataFromStorage } from "../utils/localStorage";

const persistedUserData = getDataFromStorage("userData");
const persistedToken = getDataFromStorage("token");

export const store = configureStore({
    reducer: {
        auth: authReducer,
        [authApi.reducerPath]: authApi.reducer
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(authApi.middleware),
    preloadedState: persistedUserData
        ? {
            auth: {
                user: JSON.parse(persistedUserData),
                token: persistedToken,
            },
        }
        : undefined,
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;