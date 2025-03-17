import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addTodo, removeTodo } from "../feature/todoSlice";

function Todo_List() {
  const [task, setTask] = useState("");
  const todos = useSelector((state) => state.todo.todos);

  const handleOnchange = (e) => {
    setTask(e.target.value);
  };

  const handleAddTask = (
    
  ) => {

  };
  return (
    <>
      <div>
        <h2>To do List</h2>
        <input
          type="text"
          value={task}
          onChange={handleOnchange}
          placeholder="Enter a task"
        />
        <button onClick={handleAddTask}>Add</button>
        <ul>
            {task}
          <li>List Item</li>
        </ul>
      </div>
    </>
  );
}
export default Todo_List;
