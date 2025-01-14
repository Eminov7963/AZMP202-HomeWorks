import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const productsApi = createApi({
  reducerPath: "productsApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:8080/" }),
  endpoints: (builder) => ({
    getAllproducts: builder.query({
      query: () => `products`,
      providesTags: ["Categories"],
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
    postProducts: builder.mutation({
      query: (payload) => ({
        url: `products`,
        method: "POST",
        body: payload,
      }),
      invalidatesTags: ["Categories"],
    }),
  }),
});

export const {useGetAllproductsQuery,useDeleteProdutcsByIdMutation,useGetProductsByIdQuery,usePostProductsMutation} = productsApi;