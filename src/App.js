import React from 'react'
import { TodoCounter } from "./todos/TodoCounter"
import { TodoItem } from "./todos/TodoItem"
import { CreateTodoButton } from "./todos/CreateTodoButton"
import { TodoList } from "./todos/TodoList"
import { TodoSearch } from "./todos/TodoSearch"
// import logo from './logo.svg';
import './App.css';
const todos = [
  { text: 'Cual es tu comida Favorita', completed: true },
  { text: 'Pregunta 2', completed: false },
  { text: 'Pregunta 3', completed: false },
  { text: 'Pregunta 4', completed: false }
];
function App(props) {
  const [search, setSearch]=React.useState('')
  return (
    <React.Fragment>
      <TodoCounter />
      <TodoSearch search={search} setSearch={setSearch}>
      </TodoSearch>
      
      <TodoList>
        {todos.map(todos => (
          <TodoItem
            completed={todos.completed}
            key={todos.text}
            text={todos.text} />
        ))}
      </TodoList>
      <CreateTodoButton />
    </React.Fragment>
  );
}

export default App;
