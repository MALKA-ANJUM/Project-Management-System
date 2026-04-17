## 📌 Project Management System

A full-stack Project Management web application built using **Node.js + Express** , **React.js** , and **MySQL + Sequelize ORM**.


This system allows users to manage projects, tasks, team members, and comments, and collaborate in real time.

---

## 🚀 Features

- 🔐 **JWT-Based Authentication** – Register, Login, Secure API Access  
- 👥 **Role-Based Access Control** – Admin & User permissions  
- 📁 **Project Management (CRUD)** – Create and manage multiple projects  
- 🧑‍🤝‍🧑 **Project Members** – Assign users to projects (Many-to-Many)  
- 📝 **Task Management** – Add, update, delete tasks under projects  
- 📌 **Task Assignment** – Assign tasks to team members  
- 📊 **Task Status Tracking** – todo → in-progress → completed  
- 💬 **Comments System** – Collaborate on tasks with real-time comments  
- 📜 **Activity Log System** – Track user actions on tasks & comments  
- 🎨 **Modern UI** – Built with React + Bootstrap  
- 🔄 **REST API communication** between React and Node.js

---

## 🛠️ Tech Stack

| Layer       | Technology                       |
|-------------|-----------------------------------|
| Frontend    | React.js, Axios, Bootstrap |
| Backend     | Node.js, Express.js               |
| Database    | MySQL with Sequelize ORM          |
| Auth        | JWT + bcrypt                      |

---

## ⚙️ Installation Guide

### 🔹 1. Clone the Repository

```bash
git clone https://github.com/MALKA-ANJUM/project-management-system.git
cd project-management-system
```

🔹 2. Backend Setup (Node.js + Express)
```bash
cd backend
npm install
```
Create a .env file:
```bash
PORT=5000

DB_HOST=localhost
DB_USER=root
DB_PASSWORD=
DB_NAME=project_management

JWT_SECRET=your_jwt_secret
```
Run database migration (Sequelize sync):
```bash
npm run sync
```
Start the backend server:
```bash
npm run dev
```
Backend runs at:
```bash
👉 http://localhost:5000
```

🔹 3. Frontend Setup (React)
```bash
cd frontend
npm install
npm start
```
Frontend runs at:
```bash
👉 http://localhost:3000
```

## API Modules

- 🔐 **Authentication APIs** – User registration, login, and JWT-based authentication  
- 👤 **User Authorization** – Middleware to validate and protect private routes using tokens  
- 📁 **Project APIs** – Create, update, delete projects & fetch user-specific projects  
- 👥 **Project Member APIs** – Add or remove members from a project (Many-to-Many relation)  
- 📝 **Task APIs** – Add tasks to projects, update task details, and manage task lifecycle  
- 📌 **Task Assignment API** – Assign tasks to users within a project  
- 📊 **Task Status API** – Update task status (todo → in-progress → completed)  
- 💬 **Comment APIs** – Add comments inside tasks for collaboration  
- 📜 **Activity Log APIs** – Record and fetch user actions on tasks, comments, and project updates  

💡 Developed By:

### 👩‍💻 **Malka Anjum**
**FullStack Developer (React + Node.js + MySQL)**  
