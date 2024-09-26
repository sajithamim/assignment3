// src/components/AddTodo.js
import React, { useState } from 'react';
import '../App.css'; // Ensure this path is correct

const AddTodo = ({ addTask }) => {
  const [task, setTask] = useState('');

  const handleAddClick = () => {
    if (task.trim()) {
      const formattedTask = task.charAt(0).toUpperCase() + task.slice(1).toLowerCase();
      addTask(formattedTask);
      setTask('');
    }
  };

  return (
    <div className="add-todo-container">
      <input
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        placeholder="Add a new task"
        className="add-todo-input"
      />
      <button onClick={handleAddClick} className="add-todo-button">
        <i className="fas fa-plus"></i> 
      </button>
    </div>
  );
};

export default AddTodo;
