import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import TodoList from './TodoList';
import ToDoForm from './ToDoForm';
import ToDoFooter from './ToDoFooter';

function App() {

  const [todos, setTodos] = useState([
    {
      id: Math.random(),
      text: "en projectic em exav????",
      isCompleted: false
    },
    {
      id: Math.random(),
      text: "Learn CSS",
      isCompleted: false
    },
    {
      id: Math.random(),
      text: "Learn React",
      isCompleted: false
    }
  ]);

  return (
    <div className="App">
      <ToDoForm onAdd={(text) => {
        setTodos([
          ...todos,
          {
            id: Math.random(),
            text: text,
            isCompleted: false
          }
        ]);
      }} />
      <TodoList
        todos={todos}
        onDelete={(todo) => {
          setTodos(todos.filter((t) => t.id !== todo.id));
        }}
        onChange={(newTodo) => {
          setTodos(todos.map((todo) => {
            if (todo.id === newTodo.id) {
              return newTodo;
            }
            return todo;
          }));
        }}
      />
      <ToDoFooter todos={todos} onClearCompleted={() => {
        setTodos(todos.filter((todo) => !todo.isCompleted));
      }}
      />
    </div>
  );
}

export default App;
