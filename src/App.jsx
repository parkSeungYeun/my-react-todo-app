import './App.css';
import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';
import { useState, useEffect } from 'react';

function App() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3001/todos')
      .then((res) => res.json())
      .then((data) => setTodos(data))
      .catch((err) => console.log('Error')); // 구문 오류 수정
  }, []);

  function addTodo(todo) {
    setTodos([
      ...todos,
      { id: todos.length + 1, title: todo, completed: false },
    ]);
  }

  function modCompleted(id) {
    setTodos(
      todos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, completed: !todo.completed };
        }
        return todo;
      })
    );
  }

  function todoDelect(id) {
    const newTodos = todos.filter((todo) => todo.id !== id);
    setTodos(newTodos);
  }

  function updateTodo(newTodo) {
    console.log(newTodo);
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
