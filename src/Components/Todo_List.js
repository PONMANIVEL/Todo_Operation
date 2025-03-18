import React, { useEffect, useRef, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import Input from "antd/es/input/Input";
import { addTodo, removeTodo, editTodo } from "../feature/todoSlice";
import { Button } from "antd";

function Todo_List() {
  const [task, setTask] = useState("");
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todo.todos);
  const addRef = useRef(null);

  useEffect(() => {
    addRef.current.focus();
  }, []);

  const handleOnchange = (e) => {
    setTask(e.target.value);
  };

  const handleAddTask = () => {
    if (task.trim() === "") return;
    dispatch(addTodo(task));
    setTask("");
    if (addRef) {
      addRef.current.focus();
    }
  };
  const handleEditTodo = (id, newText) => {
    console.log(newText, "Current Text");
    dispatch(editTodo({ id: id, text: newText }));
  };
  const handleRemoveTask = (id) => {
    dispatch(removeTodo(id));
  };

  return (
    <>
      <div>
        <h2>To do List</h2>
        <Input
          type="text"
          value={task}
          ref={addRef}
          onChange={handleOnchange}
          placeholder="Enter a task"
          style={{ width: "300px", height: "40px" }}
        />
        <Button
          color="cyan"
          style={{ marginLeft: "15px", padding: "20px 40px" }}
          onClick={handleAddTask}
          variant="solid"
        >
          Add
        </Button>
        {todos.map((item, index) => (
          <div key={item.id} style={{ paddingTop: "15px" }}>
            <Input
              type="text"
              value={item.text}
              onChange={(e) => handleEditTodo(item.id, e.target.value)}
              style={{ width: "300px", height: "40px" }}
            />
            <Button
              color="purple"
              style={{ marginLeft: "15px", padding: "20px 40px" }}
              onClick={() => handleRemoveTask(item.id)}
              variant="outlined "
            >
              ❌
            </Button>
          </div>
        ))}
      </div>
    </>
  );
}
export default Todo_List;