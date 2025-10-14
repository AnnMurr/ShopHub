import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { ProductType, ProductsDataType } from '../types/products';

export const productsApi = createApi({
    reducerPath: "productsApi",
    baseQuery: fetchBaseQuery({ baseUrl: "https://dummyjson.com" }),
    endpoints: (build) => ({
        getProducts: build.query<ProductsDataType, { sortBy?: string; order?: 'asc' | 'desc'; category?: string }>({
            query: ({ sortBy, order, category } = {}) => {
                let url = "products?limit=194";

                if (category) {
                    url = `products/category/${category}?limit=194`;
                    if (sortBy && order) url += `&sortBy=${sortBy}&order=${order}`;

                } else if (sortBy && order) {
                    url += `&sortBy=${sortBy}&order=${order}`;
                }

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