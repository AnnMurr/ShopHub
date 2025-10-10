import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { ProductsDataType } from '../types/products';

export const productsApi = createApi({
    reducerPath: "productsApi",
    baseQuery: fetchBaseQuery({ baseUrl: "https://dummyjson.com" }),
    endpoints: (build) => ({
        getProducts: build.query<ProductsDataType, void>({
            query: () => "products?limit=194",
        })
    })
})

export const { useGetProductsQuery } = productsApi;