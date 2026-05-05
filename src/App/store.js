import { configureStore } from "@reduxjs/toolkit";
import { productSlice } from "../Features/Product/productSlices";

export const store = configureStore({
  reducer: {
    getProduct: productSlice.reducer,
  },
});
