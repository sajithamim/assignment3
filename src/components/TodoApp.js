import React, { useState, useEffect } from 'react';
import AddTodo from './AddTodo';
import TodoList from './TodoList';
import Filter from './Filter';
import '../App.css';
import { v4 as uuidv4 } from 'uuid'; // For generating unique IDs

const TodoApp = () => {
  const [tasks, setTasks] = useState([]);
  const [filter, setFilter] = useState('All');

  useEffect(() => {
    const fetchTasksFromAPI = async () => {
      try {
        const response = await fetch('https://dummyjson.com/todos');
        const data = await response.json();
        const apiTasks = data.todos.map((task) => ({
          id: uuidv4(), // Assign unique ID
          text: task.todo,
          completed: task.completed,
        }));
        
        // Check if localStorage has tasks
        const savedTasks = localStorage.getItem('tasks');
        if (savedTasks) {
          // Merge API tasks with saved tasks
          const localTasks = JSON.parse(savedTasks);
          const mergedTasks = [...apiTasks, ...localTasks];
          setTasks(mergedTasks);
        } else {
          setTasks(apiTasks);
        }
      } catch (error) {
        console.error('Error fetching tasks:', error);
      }
    };

    fetchTasksFromAPI();
  }, []);

  useEffect(() => {
    if (tasks.length > 0) {
      localStorage.setItem('tasks', JSON.stringify(tasks));
    }
  }, [tasks]);
  const addTask = (taskText) => {
    const newTask = { id: uuidv4(), text: taskText, completed: false };
    const updatedTasks = [...tasks, newTask];
    localStorage.setItem('tasks', JSON.stringify(updatedTasks));
    setTasks(updatedTasks);
  };

  const toggleTask = (id) => {
    const updatedTasks = tasks.map((task) => 
      task.id === id ? { ...task, completed: !task.completed } : task
    );
    setTasks(updatedTasks);  // Always create a new array with updated tasks
  };

  const deleteTask = (id) => {
    const updatedTasks = tasks.filter((task) => task.id !== id);
    setTasks(updatedTasks);
  };

  const filteredTasks = tasks.filter((task) => {
    if (filter === 'Completed') return task.completed;
    if (filter === 'Pending') return !task.completed;
    return true;
  });

  return (
    <div>
      <h1>Todo List</h1>
      <AddTodo addTask={addTask} />
      {tasks.length > 0 && <Filter setFilter={setFilter} filter={filter} />}
      <TodoList tasks={filteredTasks} toggleTask={toggleTask} deleteTask={deleteTask} />
    </div>
  );
};

export default TodoApp;
  