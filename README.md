# Book Catalog API

A RESTful API for managing a digital book catalog with user authentication and authorization. Built with Node.js, Express, and MongoDB.

## 📋 Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Environment Setup](#environment-setup)
- [Running the Server](#running-the-server)
- [API Endpoints](#api-endpoints)
- [Authentication](#authentication)
- [Project Structure](#project-structure)
- [Contributing](#contributing)
- [License](#license)

## ✨ Features

- **User Authentication**: Secure registration and login with JWT tokens
- **Book Management**: Create, read, update, and delete books
- **Protected Routes**: Book operations require authentication
- **Password Encryption**: Secure password hashing with bcryptjs
- **CORS Enabled**: Cross-origin requests support
- **Environment Configuration**: Flexible configuration using environment variables

## 🛠 Tech Stack

- **Runtime**: Node.js
- **Framework**: Express.js v5
- **Database**: MongoDB with Mongoose ODM
- **Authentication**: JWT (JSON Web Tokens)
- **Security**: bcryptjs for password hashing
- **CORS**: Express CORS middleware
- **Development**: Nodemon for auto-reload

## 📦 Prerequisites

Before you begin, ensure you have the following installed:

- Node.js (v14 or higher)
- npm or yarn package manager
- MongoDB (local or MongoDB Atlas cloud instance)

## 💾 Installation

1. **Clone or navigate to the project directory**:
   ```bash
   cd book_catalog
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

## ⚙️ Environment Setup

Create a `.env` file in the root directory with the following variables:

```env
# Database Configuration
MONGO_URI=mongodb://localhost:27017/book_catalog

# Server Configuration
PORT=5000

# JWT Configuration (if needed for advanced setup)
JWT_SECRET=your_secret_key_here
```

### Environment Variables Explanation

- `MONGO_URI`: MongoDB connection string (local or cloud)
- `PORT`: Server port (default: 5000)

## 🚀 Running the Server

### Development Mode
```bash
npm run dev
```
This will start the server with nodemon, which auto-reloads on file changes.

### Production Mode
```bash
node server.js
```

The server will start and display:
```
Server running on port 5000
MongoDB Connected
```

## 📚 API Endpoints

### User Routes (`/api/users`)

#### Register User
- **POST** `/api/users/register`
- **Description**: Create a new user account
- **Body**: 
  ```json
  {
    "username": "john_doe",
    "email": "john@example.com",
    "password": "securePassword123"
  }
  ```

#### Login User
- **POST** `/api/users/login`
- **Description**: Authenticate user and receive JWT token
- **Body**:
  ```json
  {
    "email": "john@example.com",
    "password": "securePassword123"
  }
  ```
- **Response**:
  ```json
  {
    "token": "eyJhbGciOiJIUzI1NiIs..."
  }
  ```

### Book Routes (`/api/books`)

#### Get All Books
- **GET** `/api/books`
- **Description**: Retrieve all books from the catalog
- **Authentication**: Not required

#### Get Book by ID
- **GET** `/api/books/:id`
- **Description**: Retrieve a specific book by its ID
- **Authentication**: Not required

#### Create Book
- **POST** `/api/books`
- **Description**: Add a new book to the catalog
- **Authentication**: Required (JWT token)
- **Body**:
  ```json
  {
    "title": "The Great Gatsby",
    "author": "F. Scott Fitzgerald",
    "genre": "Fiction",
    "price": 12.99,
    "inStock": true
  }
  ```

#### Update Book
- **PUT** `/api/books/:id`
- **Description**: Update an existing book
- **Authentication**: Required (JWT token)
- **Body**: (same structure as Create)

#### Delete Book
- **DELETE** `/api/books/:id`
- **Description**: Remove a book from the catalog
- **Authentication**: Required (JWT token)

## 🔐 Authentication

This API uses JWT (JSON Web Tokens) for authentication.

### How to Authenticate

1. **Register** at `/api/users/register` with your credentials
2. **Login** at `/api/users/login` to receive a JWT token
3. **Use the token** in the Authorization header for protected endpoints:
   ```
   Authorization: Bearer <your_jwt_token>
   ```

### Protected Routes

The following endpoints require authentication:
- `POST /api/books` (Create)
- `PUT /api/books/:id` (Update)
- `DELETE /api/books/:id` (Delete)

Public endpoints:
- `GET /api/books` (Read all)
- `GET /api/books/:id` (Read one)
- `POST /api/users/register`
- `POST /api/users/login`

## 📁 Project Structure

```
book_catalog/
├── config/
│   └── db.js              # MongoDB connection configuration
├── controllers/
│   ├── bookController.js  # Book CRUD operations logic
│   └── userController.js  # User registration and login logic
├── middleware/
│   └── authMiddleware.js  # JWT authentication middleware
├── models/
│   ├── Book.js            # Book schema definition
│   └── User.js            # User schema definition
├── routes/
│   ├── bookRoutes.js      # Book API endpoints
│   └── userRoutes.js      # User API endpoints
├── .env                   # Environment variables
├── package.json           # Project metadata and dependencies
├── server.js              # Express server setup and configuration
└── README.md              # This file
```

## 🔌 Testing the API

You can test the API using tools like:
- **Postman**: GUI-based API testing
- **cURL**: Command-line API testing
- **Thunder Client**: VS Code extension
- **REST Client**: VS Code extension

### Example cURL Commands

**Register:**
```bash
curl -X POST http://localhost:5000/api/users/register \
  -H "Content-Type: application/json" \
  -d '{"username":"john","email":"john@example.com","password":"pass123"}'
```

**Login:**
```bash
curl -X POST http://localhost:5000/api/users/login \
  -H "Content-Type: application/json" \
  -d '{"email":"john@example.com","password":"pass123"}'
```

**Get All Books:**
```bash
curl http://localhost:5000/api/books
```

**Create Book:**
```bash
curl -X POST http://localhost:5000/api/books \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer YOUR_JWT_TOKEN" \
  -d '{"title":"Sample Book","author":"Author Name","genre":"Fiction","price":19.99,"inStock":true}'
```

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the ISC License - see the `package.json` file for details.

## 📞 Support

For issues, questions, or suggestions, please create an issue in the repository or contact the project maintainers.

---

**Happy coding! 📚**
