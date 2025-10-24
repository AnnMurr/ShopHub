import { PayloadAction, createSlice } from '@reduxjs/toolkit';

import { CartItem, CartState } from '../types/cart';
import { ProductType } from '../types/products';
import { updateCartState } from '../utils/cart';
import { getCartFromLocalStorage } from '../utils/localStorage';

const initialState: CartState = {
  items: [],
  quantity: null,
  totalPrice: null,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    setCartData: (state, action: PayloadAction<Array<ProductType>>) => {
      const persistedCart = getCartFromLocalStorage();

      if (persistedCart.length) {
        const newItems = persistedCart
          .map((data) => {
            const product = action.payload.find((card) => data.id === card.id);

            if (!product) return null;
            return {
              id: product.id,
              title: product.title,
              price: product.price,
              image: product.images[0],
              quantity: data.quantity,
            };
          })
          .filter((item): item is CartItem => item !== null);

        state.items = newItems;
        updateCartState(state);
      }
    },
    addItem: (state, action: PayloadAction<ProductType>) => {
      const item = {
        id: action.payload.id,
        title: action.payload.title,
        price: action.payload.price,
        image: action.payload.images[0],
        quantity: 1,
      };

      const existingItem = state.items.find(
        (item) => item.id === action.payload.id,
      );

      existingItem ? (existingItem.quantity += 1) : state.items.push(item);

      updateCartState(state);
    },
    deleteItem: (state, action: PayloadAction<number>) => {
      state.items = state.items.filter((item) => item.id !== action.payload);

      updateCartState(state);
    },
    increaseItemQuantity: (state, action: PayloadAction<number>) => {
      state.items.forEach(
        (item) => item.id === action.payload && (item.quantity += 1),
      );

      updateCartState(state);
    },
    decreaseItemQuantity: (state, action: PayloadAction<number>) => {
      const item = state.items.find((item) => item.id === action.payload);

      if (!item) return;

      item.quantity === 1
        ? (state.items = state.items.filter(
            (item) => item.id !== action.payload,
          ))
        : (item.quantity -= 1);

      updateCartState(state);
    },
  },
});

export const {
  addItem,
  setCartData,
  deleteItem,
  increaseItemQuantity,
  decreaseItemQuantity,
} = cartSlice.actions;
export default cartSlice.reducer;
