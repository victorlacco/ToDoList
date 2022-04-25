import './App.css';
import ToDoList from './ToDoList';
import React, { useState, useRef, useEffect } from 'react';
import uniqid from 'uniqid';

const LOCAL_STORAGE = 'todoApp'

function App() {
  const [todos, setToDos] = useState([])
  const toDoName = useRef();

  //Hook para traer los ToDos que guardamos en LocalStorage(parseándolos a objetos nuevamente) en el hook de abajo,
  //aunque no me estaría funcionando no sé por qué
  useEffect(() => {
    const savedToDos = JSON.parse(localStorage.getItem(LOCAL_STORAGE));
    console.log(savedToDos)
    if (savedToDos) setToDos(savedToDos)
  }, [])

  //Hook para guardar los ToDos en LocalStorage como strings
  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE, JSON.stringify(todos))
  }, [todos])


  function handleAddToDo() {
    const name = toDoName.current.value;
    if (name === '') {
      return alert("Escribí algo!")
    }
    setToDos(prevTodos => {
      return [...prevTodos, { id: uniqid(), name: name, completed: false }]
    })
    toDoName.current.value = null;
  }
  function clickToDo(id) {
    const copyTodos = [...todos];
    const toDo = copyTodos.find(todo => todo.id === id);
    toDo.completed = !toDo.completed;
    setToDos(copyTodos)
  }

  function clearCompleted() {
    const copyTodos = [...todos];
    setToDos(copyTodos.filter(todo => !todo.completed));
  }

  return (
    <>
      <ToDoList todos={todos} clickToDo={clickToDo} />
      <input ref={toDoName} type="text" />
      <button onClick={handleAddToDo}>Add ToDo</button>
      <button onClick={clearCompleted}>Clear completed tasks</button>
    </>
  )
}

export default App;
