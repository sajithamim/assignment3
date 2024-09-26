// src/components/TodoList.js
import React from 'react';
import TodoItem from './TodoItem';

const TodoList = ({ tasks, toggleTask, deleteTask }) => {
    return (
      <ul>
      {tasks.map((task) => (
        <TodoItem
          key={task.id}  // Use a unique task identifier, not index
          task={task}
          toggleTask={toggleTask}
          deleteTask={deleteTask}
        />
      ))}
    </ul>
      );
};

export default TodoList;
