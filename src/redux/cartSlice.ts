import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { ProductType } from "../types/products";
import { countQuantity, countTotalPrice } from "../utils/cartUtils";
import { getCartFromLocalStorage } from "../utils/localStorage";
import { CartItem, CartState } from "../types/cart";

const initialState: CartState = {
    items: [],
    quantity: null,
    totalPrice: null
};

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        setCartData: (state, action: PayloadAction<Array<ProductType>>) => {
            const persistedCart = getCartFromLocalStorage();

            if (persistedCart.length) {
                const newItems: Array<CartItem> = action.payload.map((card) => {
                    const exist = persistedCart.find((item) => item.id === card.id);

                    if (!exist) return null;
                    
                    return {
                        id: card.id,
                        title: card.title,
                        price: card.price,
                        image: card.images[0],
                        quantity: exist.quantity
                    }
                }).filter((item): item is CartItem => item !== null)

                state.items = newItems;
                state.quantity = countQuantity(newItems);
                state.totalPrice = countTotalPrice(newItems);
            }
        },
        addItem: (state, action: PayloadAction<ProductType>) => {
            const item = {
                id: action.payload.id,
                title: action.payload.title,
                price: action.payload.price,
                image: action.payload.images[0],
                quantity: 1
            }

            const isItemExist = state.items.find((item) => item.id === action.payload.id);

            if (isItemExist) {
                state.items.map((item) => item.id === action.payload.id && (item.quantity += 1))
            } else {
                state.items.push(item)
            }

            state.quantity = countQuantity(state.items);
            state.totalPrice = countTotalPrice(state.items);
        }
    }
})

export const { addItem, setCartData } = cartSlice.actions;
export default cartSlice.reducer;

