import React from "react";
import ToDo from "./ToDo";

export default function ToDoList({ todos, clickToDo }) {
  return todos.map((todo) => {
    return <ToDo key={todo.id} clickToDo={clickToDo} todo={todo} />;
  });
}
