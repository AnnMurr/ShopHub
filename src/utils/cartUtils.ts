import { CartItem } from "../types/cart";

export const countQuantity = (items: Array<CartItem>): number => {
    return items.reduce((acc, item) => acc += item.quantity, 0);
}

export const countTotalPrice = (items: Array<CartItem>): number => {
    return items.reduce((acc, item) => acc += item.price, 0);
}