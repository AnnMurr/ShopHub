import { CartItem } from "../types/cart";

export const countQuantity = (items: Array<CartItem>): number => {
    return items.reduce((acc, item) => acc += item.quantity, 0);
}

export const countTotalPrice = (items: Array<CartItem>): number => {
    return items.reduce((acc, item) => acc += item.price * item.quantity, 0);
}

export const setCartDataToLocalStorage = (items: Array<CartItem>) => {
    const newData =  items.map((item) => ({id: item.id, quantity: item.quantity}));
    localStorage.setItem("cart", JSON.stringify(newData));
}