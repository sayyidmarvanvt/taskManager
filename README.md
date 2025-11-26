# MERN Assessment - Task Manager with Authentication, E-commerce & Rate Limiting

## 📋 Project Overview

This is a full-stack MERN application built as part of an intermediate-level assessment. The project demonstrates progressive feature implementation across 4 levels:

1. **Level 1**: Task Manager with Categories
2. **Level 2**: User Authentication System (JWT)
3. **Level 3**: E-commerce Product Listing with Filtering/Sorting
4. **Level 4**: API Rate Limiting

## 🛠️ Tech Stack

**Backend:**
- Node.js
- Express.js
- MongoDB with Mongoose
- JWT for authentication
- bcryptjs for password hashing
- express-rate-limit for rate limiting
- CORS for cross-origin requests

**Frontend:**
- React 19
- React Router DOM for routing
- Axios for API calls
- Tailwind CSS for styling
- Context API for global state management

## 📁 Project Structure

```
mern-assessment/
├── backend/
│   ├── config/
│   │   └── db.js                 # MongoDB connection
│   ├── middleware/
│   │   ├── auth.js               # JWT authentication middleware
│   │   └── rateLimiter.js        # Rate limiting middleware
│   ├── models/
│   │   ├── User.js               # User model with password hashing
│   │   ├── Category.js           # Category model
│   │   ├── Task.js               # Task model (refs Category & User)
│   │   └── Product.js            # Product model
│   ├── routes/
│   │   ├── auth.js               # Signup, login, get current user
│   │   ├── categories.js         # CRUD for categories
│   │   ├── tasks.js              # CRUD for tasks
│   │   └── products.js           # Get products with filters
│   ├── .env                      # Environment variables
│   ├── .env.example              # Example environment file
│   ├── server.js                 # Express server setup
│   ├── seed.js                   # Seed database with sample data
│   └── package.json
│
└── frontend/
    ├── public/
    ├── src/
    │   ├── components/
    │   │   ├── Auth/
    │   │   │   ├── Login.jsx
    │   │   │   └── Signup.jsx
    │   │   ├── Tasks/
    │   │   │   ├── TaskList.jsx
    │   │   │   ├── TaskForm.jsx
    │   │   │   └── CategoryManager.jsx
    │   │   ├── Products/
    │   │   │   ├── ProductList.jsx
    │   │   │   └── ProductFilters.jsx
    │   │   └── Layout/
    │   │       ├── Navbar.jsx
    │   │       └── PrivateRoute.jsx
    │   ├── context/
    │   │   └── AuthContext.jsx   # Global auth state
    │   ├── utils/
    │   │   └── api.js            # Axios configuration
    │   ├── App.jsx               # Main app component
    │   ├── main.jsx              # React entry point
    │   └── index.css             # Tailwind imports
    ├── tailwind.config.js
    ├── postcss.config.js
    └── package.json
```

## 🔧 Installation & Setup

### Prerequisites
- Node.js (v16 or higher)
- MongoDB (local or Atlas)
- npm or yarn

### Clone or Create Project Structure

```bash
# Create project directory
mkdir mern-assessment
cd mern-assessment
```

### Backend Setup

```bash
# Create and navigate to backend folder
mkdir backend
cd backend

# Initialize npm
npm init -y

# Install dependencies
npm install express mongoose jsonwebtoken bcryptjs dotenv cors express-rate-limit

# Install dev dependency
npm install --save-dev nodemon

# Create .env file
touch .env
```
