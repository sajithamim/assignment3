import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle, faCircle, faTrash } from '@fortawesome/free-solid-svg-icons';
import '../style/todoItem.css'; // Import the CSS file

const TodoItem = ({ task, index, toggleTask, deleteTask }) => {
  return (
    <li className="todo-item">
      <FontAwesomeIcon
        icon={task.completed ? faCheckCircle : faCircle}
        className={`icon ${task.completed ? 'completed' : 'incomplete'}`} // Apply class based on completion status
        onClick={() => toggleTask(task.id)}
        aria-label={task.completed ? "Mark as incomplete" : "Mark as complete"}
      />

      <span
        className={`task-text ${task.completed ? 'completed' : ''}`} // Apply class based on completion status
      >
        {task.text}
      </span>

      {/* Improved delete button */}
      <button
        onClick={() => deleteTask(task.id)}
        className="delete-button"
        aria-label="Delete task"
      >
        <FontAwesomeIcon icon={faTrash} />
      </button>
    </li>
  );
};

export default TodoItem;
