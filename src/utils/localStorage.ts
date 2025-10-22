import { UserType } from '../types/user';

const USER_KEY = 'userData';
const TOKEN_KEY = 'token';

export const saveUserToStorage = (user: UserType, token: string): void => {
  localStorage.setItem('token', token);
  localStorage.setItem('userData', JSON.stringify(user));
};

export const clearUserDataFromStorage = () => {
  localStorage.removeItem(USER_KEY);
  localStorage.removeItem(TOKEN_KEY);
};

export const getDataFromStorage = (key: string) => {
  return localStorage.getItem(key);
};

export const getCartFromLocalStorage = (): Array<{
  id: number;
  quantity: number;
}> => {
  const data = localStorage.getItem('cart');
  return data ? JSON.parse(data) : [];
};
