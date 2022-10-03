import { useState } from 'react';
import TodoList from './components/TodoList';
import ToDoForm from './components/ToDoForm';
import ToDoFooter from './components/ToDoFooter';

function App() {

  const items = [
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
  ];

  const [todos, setTodos] = useState(items);

  const onAddHandler = (text) => {
    setTodos([
      ...todos,
      {
        id: Math.random(),
        text: text,
        isCompleted: false
      }
    ]);
  }

  const onDeleteHandler = (todo) => {
    setTodos(todos.filter((t) => t.id !== todo.id));
  }

  const onChangeHandler = (newTodo) => {
    setTodos(todos.map((todo) => {
      if (todo.id === newTodo.id) {
        return newTodo;
      }
      return todo;
    }));
  }

  const onClearCompletedHandler = () => {
    setTodos(todos.filter((todo) => !todo.isCompleted));
  }

  return (
    <>
      <ToDoForm onAdd={onAddHandler} />
      <TodoList todos={todos} onDelete={onDeleteHandler} onChange={onChangeHandler} />
      <ToDoFooter todos={todos} onClearCompleted={onClearCompletedHandler} />
    </>
  );
}

export default App;
