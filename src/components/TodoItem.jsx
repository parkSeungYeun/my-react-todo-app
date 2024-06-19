// src/components/TodoItem.jsx
import React from 'react';
import { FiEdit, FiTrash2 } from 'react-icons/fi'; // FiEdit와 FiTrash2 아이콘 import

function TodoItem() {
  return (
    <li className="flex justify-between items-center bg-gray-100 p-4 my-2 rounded-lg shadow-md">
      <div className="flex-grow">리액트 공부하기</div>
      <div className="flex space-x-2">
        <button className="p-2 rounded-full shadow-md transition duration-300 bg-orange-500 hover:bg-orange-600 text-white">
          <FiEdit />
        </button>
        <button className="p-2 rounded-full shadow-md transition duration-300 bg-red-500 hover:bg-red-600 text-white">
          <FiTrash2 />
        </button>
      </div>
    </li>
  );
}

export default TodoItem;