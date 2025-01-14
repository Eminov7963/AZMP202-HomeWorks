import { configureStore } from '@reduxjs/toolkit'
import {productsApi} from "../services/products"
import { setupListeners } from "@reduxjs/toolkit/query";

import wishlistReducer from "../features/wishlistSlice";
export const store = configureStore({
  reducer: {
    wishlist: wishlistReducer,
    [productsApi.reducerPath]: productsApi.reducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(productsApi.middleware),
});
setupListeners(store.dispatch);