# 📝 To-Do List Web Application

This is a simple full-stack To-Do List application built with:

- 📦 **Backend**: Node.js (Express)
- 🎨 **Frontend**: React with Vite
- 🛠️ RESTful API Integration

---

## 📌 Features

- ✅ Add a new task  
- 📋 View all existing tasks  
- 🖊️ Edit/update a task  
- ❌ Delete a task  
- 📱 Fully mobile responsive  
- 🎨 Clean, minimal UI using CSS  
- 🔗 Connected frontend & backend via RESTful API

---

## 🛠️ Tech Stack

### Frontend
- React (with Vite)
- JSX
- CSS
- Axios

### Backend
- Node.js
- Express.js
- CORS & Body Parser
- RESTful API

---

## 📂 Project Structure
```text
todo-app/
├── todo-frontend/             # Frontend (React + Vite)
│   ├── public/
│   ├── src/
│   │   ├── App.jsx            # Main UI
│   │   ├── main.jsx
│   │   └── App.css            # Styling
│   ├── eslint.config.js
│   ├── index.html
│   ├── package.json
│   ├── package-lock.json
│   └── vite.config.js
│
├── todo-backend/              # Backend (Node.js + Express)
│   ├── server.js              # API server with 4 endpoints
│   ├── package.json
│   └── package-lock.json
│
├── .gitignore               # Unified gitignore at root
└── README.md                # Project-wide documentation
```

---

## 🚀 Getting Started

### 🔧 Prerequisites

- Node.js and npm installed
- Git installed

---

### 🔄 Setup Instructions

#### 1. Clone the repository

> git clone https://github.com/YOUR_USERNAME/todo-app.git
> cd todo-app

▶️ Start the Backend

> cd todo-backend
> npm install
> node server.js
>> Runs on: http://localhost:5000

▶️ Start the Frontend

> cd ../todo-frontend
> npm install
> npm run dev
>> Runs on: http://localhost:5173

- Make sure your backend is running before starting the frontend.

---

## ✅ Test the Features in the Browser

- Open your browser and go to:
> 👉 http://localhost:5173

# Now test each functionality:

🆕 Add Task

- Type a task and click "Add".
- It should appear below instantly.

📋 Get All Tasks

- On app load, it should automatically fetch all tasks.
- Data comes from backend (GET /tasks).

🗑️ Delete Task

- Click "Delete" next to a task.
- It should disappear from the list and call (DELETE /tasks/:id).

♻️ Update / Toggle Complete
- Click "Toggle Complete" (if implemented).
- It should update task status via (PUT /tasks/:id).

---

🧪 API Endpoints

| Method | Endpoint        | Description     |
| ------ | --------------- | --------------- |
| GET    | /api/tasks      | Get all tasks   |
| POST   | /api/tasks      | Create new task |
| PUT    | /api/tasks/\:id | Update a task   |
| DELETE | /api/tasks/\:id | Delete a task   |

---

🙌 Acknowledgements

- Vite
- React
- Express

---

🪪 License

MIT License © 2025 Suraj Agarwal

---

🙋‍♂️ Author

Made by Suraj Agarwal
