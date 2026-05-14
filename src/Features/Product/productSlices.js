import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: JSON.parse(localStorage.getItem("products")) || [],
  filterValue: JSON.parse(localStorage.getItem("products")) || [],
};

export const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    allProducts: (state, action) => {
      state.value = action.payload;
      localStorage.setItem("products", JSON.stringify(action.payload));
    },
    filteredProducts: (state, action) => {
      state.value = action.payload;
      localStorage.setItem("products", JSON.stringify(action.payload));
    },
  },
});

export const { allProducts, filteredProducts } = productSlice.actions;

export default productSlice.reducer;
