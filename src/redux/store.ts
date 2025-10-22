import { configureStore } from '@reduxjs/toolkit';

import authReducer from './authSlice';
import cartReducer from './cartSlice';
import { authApi } from '../services/authApi';
import { productsApi } from '../services/productsApi';
import { getDataFromStorage } from '../utils/localStorage';

const persistedUserData = getDataFromStorage('userData');
const persistedToken = getDataFromStorage('token');

const preloadedState = {
  auth: persistedUserData
    ? {
        user: JSON.parse(persistedUserData),
        token: persistedToken,
      }
    : { user: null, token: null },
};

export const store = configureStore({
  reducer: {
    auth: authReducer,
    cart: cartReducer,
    [authApi.reducerPath]: authApi.reducer,
    [productsApi.reducerPath]: productsApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(authApi.middleware)
      .concat(productsApi.middleware),
  preloadedState,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
