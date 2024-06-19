// src/components/TodoInput.jsx
import React, { useState } from 'react';
import { FiPlus } from 'react-icons/fi'; // FiPlus 아이콘 import

function TodoInput() {
  const [input, setInput] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.trim()) {
      // 여기서 추가 로직을 추가할 수 있습니다 (예: 할 일을 추가하는 함수 호출)
      setInput('');
    }
  };

  return (
    <form className="flex items-center mt-4 bg-green-100 p-2 rounded-lg shadow-md mb">
      <input
        className="border-none outline-none p-2 flex-grow bg-green-100 focus:ring-0"
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Add a todo"
      />
      <button
        type="submit"
        className="bg-green-500 rounded-full text-white p-2 shadow-md hover:bg-green-600 transition duration-300"
        onClick={handleSubmit}
      >
        <FiPlus size={20} /> {/* FiPlus 아이콘을 사용하고 크기를 20으로 설정 */}
      </button>
    </form>
  );
}

export default TodoInput;
