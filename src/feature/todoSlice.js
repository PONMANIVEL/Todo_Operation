import { createSlice, current } from "@reduxjs/toolkit";

const initialState = {
  todos: [],
};

const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      state.todos.push({ id: Date.now(), text: action.payload });
    },
    removeTodo: (state, action) => {
      console.log(current(state, "remove value"));
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    },
    editTodo: (state, action) => {
      console.log(action.payload, "Edit");
      const { id, newText } = action.payload;
      const todo = state.todos.find((todo) => todo.id === id);
      if (todo) {
        todo.text = newText;
      }
    },
  },
});
export const { addTodo, removeTodo, editTodo } = todoSlice.actions;
export default todoSlice.reducer;
