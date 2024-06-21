// TodoItem.js
import React, { useState } from 'react';
import { FiEdit2, FiTrash2, FiCheck } from 'react-icons/fi';

function TodoItem({
  id,
  title,
  completed,
  modCompleted,
  todoDelect,
  updateTodo,
}) {
  const [isEditing, setIsEditing] = useState(false);
  const [inputTitle, setInputTitle] = useState(title);

  function handleCompleted(e) {
    if (e.target.tagName === 'LI' || e.target.tagName === 'SPAN') {
      modCompleted(id);
    }
  }

  function handleRemove() {
    todoDelect(id);
  }

  function handleTitleChange(e) {
    setInputTitle(e.target.value);
  }

  function handleUpdate() {
    updateTodo({
      id,
      title: inputTitle,
      completed,
    });
    setIsEditing(false);
  }

  return (
    <li
      onClick={handleCompleted}
      className="flex justify-between items-center bg-gray-100 p-4 my-2 rounded-lg shadow-md"
    >
      {!isEditing ? (
        <span
          className={`${
            completed ? 'line-through' : ''
          } flex-grow hover:cursor-default`}
        >
          {title}
        </span>
      ) : (
        <input
          value={inputTitle}
          onChange={handleTitleChange}
          onBlur={handleUpdate}
          type="text"
          className="focus:ring-0 border-none outline-none flex-grow p-0 bg-gray-100"
        />
      )}
      <div className="flex space-x-2">
        <button
          onClick={() => setIsEditing(!isEditing)}
          className={`p-2 rounded-full shadow-md transition duration-300 ${
            isEditing
              ? 'bg-green-400 hover:bg-green-500'
              : 'bg-sky-500 hover:bg-sky-600'
          } text-white`}
        >
          {isEditing ? <FiCheck /> : <FiEdit2 />}
        </button>
        <button
          onClick={handleRemove}
          className="p-2 rounded-full shadow-md transition duration-300 bg-red-500 hover:bg-red-600 text-white"
        >
          <FiTrash2 />
        </button>
      </div>
    </li>
  );
}

export default TodoItem;
