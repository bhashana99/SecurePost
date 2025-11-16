# SecurePost – Node.js & MySQL RESTful API

![Node](https://img.shields.io/badge/Node-22.14.0-green) ![MySQL](https://img.shields.io/badge/MySQL-8.0-blue) ![Docker](https://img.shields.io/badge/Docker-Yes-blue)

**Version:** 1.0.0  
**Last Updated:** 16-Nov-2025  
**Author:** Bhashana Chamodya  
**License:** MIT  

---

## Overview

SecurePost is a **RESTful API** built with **Node.js, Express.js, and MySQL**, enabling management of users and posts. It supports:

- User registration, login, and update  
- Create, read, update, and delete posts  
- JWT-based authentication for secure endpoints  
- Input validation (e.g., email format)  
- Proper HTTP status codes and error handling  

---

## Tech Stack

- Node.js 22.14.0  
- Express.js 5.1.0  
- MySQL  
- JWT for authentication  
- Docker + Docker Compose  
- JavaScript & SQL  

---

## Getting Started

### Option 1: Using Docker Compose (Recommended)

1. **Clone the repository**  
```bash
git clone https://github.com/bhashana99/SecurePost.git
cd SecurePost
```

2. **Start services with Docker Compose**
   ```bash
   docker-compose up --build
   ```
   
3. **Access the API**
   The backend will run at: http://localhost:3000

Docker Compose automatically starts both Node.js API and MySQL database.

### Option 2: Local Setup

1. **Clone the repository**  
```bash
git clone https://github.com/bhashana99/SecurePost.git
cd SecurePost
```

2. **Install dependencies**
   ```bash
   npm install
   ```
   
3. **Setup Environment Variables**
   ```bash
   DB_HOST=localhost
   DB_USER=root
   DB_PASSWORD=yourpassword
   DB_NAME=securepost
   JWT_SECRET=yourSecretKey
   ```

4. **Run MySQL locally**
   Ensure a MySQL instance is running and the database securepost exists.
   Important: For local development, open config/db.js and uncomment DB_HOST while commenting out DB_HOST_DOCKER:
   ```bash
   // host: process.env.DB_HOST_DOCKER,  // Comment this line
      host: process.env.DB_HOST,            // Uncomment this line
   ```

5. **Run the API**
   ```bash
   npm run dev
   ```
5. **Test API Endpoints**
   Use http://localhost:3000 and refer to the API endpoints below.


   ## API Endpoints
   All endpoints except /register and /login require a JWT token in the Authorization header:
   <img width="394" height="58" alt="image" src="https://github.com/user-attachments/assets/1a741884-4edf-4bde-b7d0-5a78cdcf79dd" />
   <img width="848" height="290" alt="image" src="https://github.com/user-attachments/assets/7994773a-44a5-4889-ae6e-e32e55d8f03e" />
   <img width="849" height="397" alt="image" src="https://github.com/user-attachments/assets/2091b36f-38a2-460a-b55e-6fcef054c84d" />

   ## Example Requests

### 1. Register User
```http
POST http://localhost:3000/api/users/register
Content-Type: application/json

{
  "name": "John Doe",
  "email": "john@example.com",
  "password": "123456"
}
```

### 2. Register User
```http
POST http://localhost:3000/api/users/login
Content-Type: application/json

{
  "email": "john@example.com",
  "password": "123456"
}
```

### 3. Update User (JWT Required)
```http
PUT http://localhost:3000/api/users/update
Content-Type: application/json
Authorization: Bearer <your-jwt-token>

{
  "name": "John Updated",
  "email": "johnupdated@example.com"
}
```

### 4. Create Post (JWT Required)
```http
POST http://localhost:3000/api/posts/create
Content-Type: application/json
Authorization: Bearer <your-jwt-token>

{
  "title": "My First Post",
  "content": "This is the post content."
}

```

### 5. Get All Posts of User (JWT Required)
```http
GET http://localhost:3000/api/posts/
Authorization: Bearer <your-jwt-token>

```

### 6. Get Post by ID (JWT Required)
```http
GET http://localhost:3000/api/posts/1
Authorization: Bearer <your-jwt-token>

```

### 7. Update Post by ID (JWT Required) (JWT Required)
```http
PUT http://localhost:3000/api/posts/1
Content-Type: application/json
Authorization: Bearer <your-jwt-token>

{
  "title": "Updated Post Title",
  "content": "Updated content."
}

```

### 8. Delete Post by ID (JWT Required)
```http
DELETE http://localhost:3000/api/posts/1
Authorization: Bearer <your-jwt-token>

```






   
