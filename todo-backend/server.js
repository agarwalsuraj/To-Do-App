const express = require('express');
const cors = require('cors');

const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(express.json());

let tasks = [
  { id: 1, title: "Sample Task", completed: false }
];

// Root route (just for testing)
app.get('/', (req, res) => {
  res.send('To-Do Backend is running!');
});

app.get('/tasks', (req, res) => {
  res.json(tasks);
});

app.post('/tasks', (req, res) => {
  const { title } = req.body;

  // Validation
  if (!title || title.trim() === '') {
    return res.status(400).json({ error: 'Title is required' });
  }

  const newTask = {
    id: Date.now(), // simple unique ID
    title: title.trim(),
    completed: false
  };

  tasks.push(newTask);
  res.status(201).json(newTask);
});

app.put('/tasks/:id', (req, res) => {
  const taskId = parseInt(req.params.id);
  const task = tasks.find(t => t.id === taskId);

  if (!task) {
    return res.status(404).json({ error: 'Task not found' });
  }

  // Toggle the completed status
  task.completed = !task.completed;

  res.json(task);
});

app.delete('/tasks/:id', (req, res) => {
  const taskId = parseInt(req.params.id);

  const index = tasks.findIndex(t => t.id === taskId);
  if (index === -1) {
    return res.status(404).json({ error: 'Task not found' });
  }

  const deletedTask = tasks.splice(index, 1);
  res.json({ message: 'Task deleted', task: deletedTask[0] });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
