import { combineReducers, configureStore } from "@reduxjs/toolkit";
import shoppingCartReducer from "./shoppingCart/shoppingCartSlice";

export const reducer = combineReducers({
  shoppingCart: shoppingCartReducer,
});

export const store = configureStore({
  reducer,
});
