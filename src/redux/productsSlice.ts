import { createSlice } from '@reduxjs/toolkit';
import { ProductType } from "../types/products";

interface ProductsState {
    products: Array<ProductType> | null,
}

const initialState: ProductsState = {
    products: null,
}

const productsSlice = createSlice({
    name: "products",
    initialState,
    reducers: {
        setProducts: (state, action) => {
            state.products = action.payload
        }
    }
})

export const { setProducts } = productsSlice.actions;
export default productsSlice.reducer;