import { createSlice } from "@reduxjs/toolkit";

const todolistSlice = createSlice({
  initialState: {
    list: [],
  },
  name: "todos",
  reducers: {
    addTodo: (state, cokolwiek) => {
      state.list.push(cokolwiek.payload);
    },
    // removeTodo: (state, action) => {
    //   state.list = state.list.filter((todoItem) => {
    //     if (todoItem.id === action.payload) {
    //       return false;
    //     } else {
    //       return true;
    //     }
    //   });
    // },
    removeTodo: (state, action) => {
      state.list = state.list.filter(
        (todoItem) => todoItem.id !== action.payload
      );
    },
    editTodo: () => {},
    toggleTodoStatus: (state, action) => {
      state.list.forEach((todoItem) => {
        if (todoItem.id === action.payload) {
          todoItem.status = !todoItem.status;
        }
      });
    },
    // removeCompleted: (state) => {
    //     state.list = state.list.filter((todoItem)=>{
    //         if(todoItem.status === true){
    //             return false;
    //         }else {
    //             return true;
    //         }
    //     })
    // },
    removeCompleted: (state) => {
      state.list = state.list.filter((todoItem) => !todoItem.status);
    },
  },
});

export const {
  addTodo,
  editTodo,
  toggleTodoStatus,
  removeCompleted,
  removeTodo,
} = todolistSlice.actions;

export default todolistSlice.reducer;
