import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { ProductQueryParams, ProductType, ProductsDataType } from '../types/products';

export const productsApi = createApi({
    reducerPath: "productsApi",
    baseQuery: fetchBaseQuery({ baseUrl: "https://dummyjson.com" }),
    endpoints: (build) => ({
        getProducts: build.query<ProductsDataType, ProductQueryParams>({
            query: ({ sortBy, order, category, search } = {}) => {
                let url = "products?limit=194";

                if (category) url = `products/category/${category}?limit=194`;

                if (sortBy && order) url += `&sortBy=${sortBy}&order=${order}`;

                if (search) url = `products/search?q=${search}`;

                return url;
            }
        }),
        getSingleProduct: build.query<ProductType, number>({
            query: (id) => `product/${id}`
        }),
        getAllCategories: build.query<Array<string>, void>({
            query: () => "products/category-list"
        })
    })
})

export const { useGetProductsQuery, useGetSingleProductQuery, useGetAllCategoriesQuery } = productsApi;