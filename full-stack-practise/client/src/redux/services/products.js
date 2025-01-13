import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const productsApi = createApi({
  reducerPath: "productsApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:8080/" }),
  endpoints: (builder) => ({
    getAllproducts: builder.query({
      query: () => `products`,
    }),
    getProductsById: builder.query({
      query: (id) => `products/${id}`,
      providesTags: ["Category"],
    }),
    deleteProdutcsById: builder.mutation({
      query: (id) => ({
        url: `products/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Categories"],
    }),
  }),
});

export const {useGetAllproductsQuery,useDeleteProdutcsByIdMutation,useGetProductsByIdQuery} = productsApi;