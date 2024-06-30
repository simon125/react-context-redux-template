import { combineReducers, configureStore } from "@reduxjs/toolkit";
import counterReducer from "../slices/counterSlice";
import todosReducer from "../slices/todolistSlice";

export const store = configureStore({
  reducer: combineReducers({
    counter: counterReducer,
    todos: todosReducer,
    // todolist: todolistReducer,
    // user: userReducer,
    // products: productsReducer
  }),
});
