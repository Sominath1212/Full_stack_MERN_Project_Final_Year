# 📊 Project Management System (MERN Stack)

A fully working Project Management System built using the MERN Stack (MongoDB, Express.js, React.js, Node.js).

This application allows users to register, log in, create projects, manage tasks, update task statuses, and track overall progress in a clean and responsive interface.

---

# 🚀 Features

- 🔐 User Authentication (Register / Login)
- 🔑 JWT-Based Authorization
- 📁 Create / Edit / Delete Projects
- 📝 Create / Update / Delete Tasks
- 📌 Task Status (To Do, In Progress, Completed)
- 📅 Due Date Management
- 📊 Project Progress Tracking
- 🌐 RESTful API
- 📱 Responsive Design

---

# 🛠️ Tech Stack

Frontend:
- React.js
- Axios
- React Router DOM

Backend:
- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT
- bcrypt.js

Database:
- MongoDB (Local or Atlas)

---

# 📦 Complete Setup Guide (Step-by-Step)

---

# 1️⃣ Clone Repository

```bash
git clone https://github.com/Sominath1212/Full_stack_MERN_Project_Final_Year
cd project-management-system
```

---

# 2️⃣ Backend Setup

```bash
cd backend
npm init -y
```

Install dependencies:

```bash
npm install express mongoose cors dotenv bcryptjs jsonwebtoken
npm install nodemon --save-dev
```

Add scripts inside `package.json`:

```json
"scripts": {
  "start": "node server.js",
  "dev": "nodemon server.js"
}
```

Create a `.env` file inside backend folder:

```
PORT=5000
MONGO_URI=mongodb://127.0.0.1:27017/projectManagementDB
JWT_SECRET=your_secret_key
```

Start backend server:

```bash
npm run dev
```

Backend will run on:

```
http://localhost:5000
```

---

# 3️⃣ Frontend Setup

Open a new terminal:

```bash
cd frontend
```

If frontend does not exist:

```bash
npx create-react-app frontend
cd frontend
```

Install dependencies:

```bash
npm install axios react-router-dom
```

Start frontend:

```bash
npm start
```

Frontend will run on:

```
http://localhost:3000
```

---

# 🔐 Authentication

- Passwords are hashed using bcrypt
- JWT token is generated on login
- Protected routes require Authorization header

Example header:

```
Authorization: Bearer <your_token>
```

---

# 🗂️ Database Models

## User
- name
- email
- password
- createdAt

## Project
- title
- description
- userId
- createdAt

## Task
- title
- description
- status
- dueDate
- projectId
- createdAt

---

# 📊 Application Flow

1. User registers
2. User logs in
3. JWT token is generated
4. User creates project
5. User adds tasks
6. Tasks can be updated or marked complete
7. Progress is calculated automatically

---

# 📌 Available Scripts

## Backend

```bash
npm run dev
```

```bash
npm start
```

## Frontend

```bash
npm start
```

```bash
npm run build
```

---

# 🌍 Deployment

Backend:
- Render
- Railway

Frontend:
- Vercel
- Netlify

Before deployment, update API base URL to production backend URL.

---

# 🔮 Future Improvements

- 👥 Team Collaboration
- 📊 Dashboard Analytics
- 🔔 Notifications
- 📎 File Attachments
- 🌙 Dark Mode
- 🧠 AI Task Suggestions

---

# 📄 License

This project is open-source and free to use for learning and development purposes.

---

# 👨‍💻 Author

Developed as a complete full-stack MERN Project to demonstrate authentication, CRUD operations, API design, and real-world architecture.

---

# ✅ Conclusion

✔ Full-stack MERN application  
✔ Authentication & Authorization  
✔ REST API integration  
✔ Structured backend & frontend  
✔ Ready for portfolio or production scaling  

