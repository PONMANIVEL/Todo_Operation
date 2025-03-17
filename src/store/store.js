import { configureStore } from "@reduxjs/toolkit";
import  todoReducer  from "../feature/todoSlice";
const store = configureStore({
  reducer: {
    todo: todoReducer,
  },
});

export default store;
