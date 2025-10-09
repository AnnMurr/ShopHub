import { createSlice } from "@reduxjs/toolkit";
import { UserType } from "../types/user";
import { clearUserDataFromStorage, saveUserToStorage } from "../utils/localStorage";

interface AuthState {
    user: UserType | null,
    token: string | null,
}

const initialState: AuthState = {
    user: null,
    token: null,
};

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        setCredentials: (state, action) => {
            state.user = action.payload.user;
            state.token = action.payload.token;
            saveUserToStorage(action.payload.token, action.payload.user)
        },
        logout: (state) => {
            state.user = null;
            state.token = null;
            clearUserDataFromStorage()
        },
    },
});

export const { setCredentials, logout } = authSlice.actions;
export default authSlice.reducer;