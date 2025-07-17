import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [tasks, setTasks] = useState([]);
  const [title, setTitle] = useState('');

  // Fetch tasks from backend
  useEffect(() => {
    fetch('http://localhost:5000/tasks')
      .then(res => res.json())
      .then(data => setTasks(data))
      .catch(err => console.error('Error fetching tasks:', err));
  }, []);

  // Add new task
  const handleAddTask = async (e) => {
    e.preventDefault();

    if (!title.trim()) {
      alert('Task title cannot be empty!');
      return;
    }

    const newTask = {
      title: title.trim(),
      completed: false,
    };

    try {
      const res = await fetch('http://localhost:5000/tasks', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newTask),
      });

      const data = await res.json();
      setTasks([...tasks, data]);
      setTitle('');
    } catch (err) {
      console.error('Error adding task:', err);
    }
  };

  // Toggle completed status
  const handleToggleComplete = async (id) => {
    const task = tasks.find(t => t.id === id);
    if (!task) return;

    try {
      const res = await fetch(`http://localhost:5000/tasks/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ completed: !task.completed }),
      });

      const updated = await res.json();
      setTasks(tasks.map(t => (t.id === id ? updated : t)));
    } catch (err) {
      console.error('Error updating task:', err);
    }
  };

  // Delete task
  const handleDelete = async (id) => {
    try {
      await fetch(`http://localhost:5000/tasks/${id}`, {
        method: 'DELETE',
      });
      setTasks(tasks.filter(t => t.id !== id));
    } catch (err) {
      console.error('Error deleting task:', err);
    }
  };

  return (
    <div className="container">
      <h1>📝 To-Do List</h1>
      <form onSubmit={handleAddTask} className="task-form">
        <input
          type="text"
          placeholder="Enter task title..."
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <button type="submit">Add Task</button>
      </form>

      <ul className="task-list">
        {tasks.map((task) => (
          <li key={task.id} className={task.completed ? 'completed' : ''}>
            {task.title}
            <div className="btn-group">
              <button onClick={() => handleToggleComplete(task.id)}>
                {task.completed ? 'Undo' : 'Complete'}
              </button>
              <button onClick={() => handleDelete(task.id)} className="delete">
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
