import { createSlice } from "@reduxjs/toolkit";

const intialState = {
  todos: [],
};

const todoSlice = createSlice({
  name: "todo",
  intialState,
  reducers: {
    addTodo: (state, action) => {
      state.todos.push(action.payload);
    },
    removeTodo: (state, action) => {
      state.todos = state.todos.filter(
        (todo, index) => index !== action.payload
      );
    },
  },
});
export const { addTodo, removeTodo } = todoSlice.actions;
export default todoSlice.reducer;
