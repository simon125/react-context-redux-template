import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
};

const shoppingCartSlice = createSlice({
  initialState,
  name: "shoppingCart",
  reducers: {
    addProduct: (state, action) => {
      state.products.push({ ...action.payload, amount: 1 });
    },
    updateProductAmount: (state, action) => {
      const { id, amount } = action.payload;

      state.products.forEach((product) => {
        if (product.id === id && amount > 0) {
          product.amount = amount;
        }
      });
    },
    removeProduct: (state, action) => {
      const id = action.payload;
      state.products = state.products.filter((product) => product.id !== id);
    },
    resetState: () => {
      return initialState;
    },
  },
});

export const { addProduct, updateProductAmount, removeProduct, resetState } =
  shoppingCartSlice.actions;

export default shoppingCartSlice.reducer;
