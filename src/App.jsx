import './App.css';
import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';
import { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    axios
      .get('http://localhost:3001/todos')
      .then((res) => {
        console.log(res);
        setTodos(res.data);
      })
      .catch((err) => {
        console.error('Error occured on fetching', err);
      });
  }, []);

  function addTodo(todo) {
    axios
      .post('http://localhost:3001/todos', {
        title: todo,
        completed: false,
      })
      .then((res) => {
        console.log('Todo added:', res.data);
        setTodos([...todos, res.data]);
      })
      .catch((err) => {
        console.error('Error occurred on adding todo:', err);
      });
  }

  function modCompleted(id) {
    axios
      .put(`http://localhost:3001/todos/${id}`, {
        completed: !todos.find((todo) => todo.id === id).completed,
      })
      .then((res) => {
        console.log('Todo completed status updated:', res.data);
        setTodos(
          todos.map((todo) =>
            todo.id === id ? { ...todo, completed: !todo.completed } : todo
          )
        );
      })
      .catch((err) => {
        console.error('Error occurred on updating todo:', err);
      });
  }

  function todoDelect(id) {
    axios
      .delete(`http://localhost:3001/todos/${id}`)
      .then((res) => {
        console.log('Todo deleted:', id);
        const newTodos = todos.filter((todo) => todo.id !== id);
        setTodos(newTodos);
      })
      .catch((err) => {
        console.error('Error occurred on deleting todo:', err);
      });
  }

  function updateTodo(newTodo) {
    axios
      .put(`http://localhost:3001/todos/${newTodo.id}`, newTodo)
      .then((res) => {
        console.log('Todo updated:', res.data);
        setTodos(
          todos.map((todo) => (todo.id === newTodo.id ? { ...newTodo } : todo))
        );
      })
      .catch((err) => {
        console.error('Error occurred on updating todo:', err);
      });
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
