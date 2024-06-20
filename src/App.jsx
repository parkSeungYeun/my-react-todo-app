import './App.css';
import TodoInput from './components/TodoInput';
// import TodoItem from './components/TodoItem';
import TodoList from './components/TodoList';
import { useState } from 'react';

function App() {
  const [todos, setTodos] = useState([
    {
      id: 1,
      completed: true,
      title: '리액트 공부하기',
    },
    {
      id: 2,
      completed: false,
      title: '축구 연습하기',
    },
  ]);
  function addTodo(todo) {
    setTodos([
      ...todos,
      { id: todos.length + 1, title: todo, completed: false },
    ]);
  }

  function modCompleted(id) {
    setTodos(
      todos.map((todo) => {
        if (todo.id == id) {
          todo.completed = !todo.completed;
        }
        return todo;
      })
    );
  }

  function todoDelect(id) {
    const newTodos = [...todos];
    const index = newTodos.findIndex((todo) => {
      return id == todo.id;
    });
    newTodos.splice(index, 1);

    setTodos(newTodos);
  }

  function updateTodo(newTodo) {
    setTodos(
      todos.map((todo) => (todo.id === newTodo.id ? { ...newTodo } : todo))
    );
  }

  return (
    <div className="bg-blue-400 min-h-screen flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <div className="flex items-center justify-center mb-6">
          <h1 className="text-4xl font-bold text-black-600 ml-2">TodoList</h1>
        </div>
        <TodoInput addTodo={addTodo} />
        <TodoList
          todos={todos}
          modCompleted={modCompleted}
          updateTodo={updateTodo}
          todoDelect={todoDelect}
        />
      </div>
    </div>
  );
}

export default App;
