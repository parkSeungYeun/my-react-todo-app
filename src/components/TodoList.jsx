// TodoList.js
import React from 'react';
import TodoItem from './TodoItem';

function TodoList({ todos, modCompleted, todoDelect, updateTodo }) {
  return (
    <div>
      {todos.map((todo, index) => (
        <TodoItem
          key={index}
          {...todo}
          modCompleted={modCompleted}
          todoDelect={todoDelect}
          updateTodo={updateTodo}
        />
      ))}
    </div>
  );
}

export default TodoList;
