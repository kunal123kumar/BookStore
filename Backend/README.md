# 📚 Bookstore Backend API

A RESTful API backend for a bookstore application built with Node.js, Express, and MongoDB. It supports user authentication, book browsing, and a contact form.

---

## 🚀 Tech Stack

- **Runtime:** Node.js
- **Framework:** Express.js v5
- **Database:** MongoDB (via Mongoose)
- **Authentication:** bcrypt (password hashing)
- **Other:** dotenv, cors, nodemon

---

## 📁 Project Structure

```
backend/
├── controller/
│   ├── book.controller.js
│   ├── user.controller.js
│   └── contactUs.controller.js
├── models/
│   ├── book.model.js
│   ├── user.models.js
│   └── ContactUs.model.js
├── routes/
│   ├── books.route.js
│   ├── user.route.js
│   └── contactUs.route.js
├── index.js
├── package.json
└── .env
```

---

## ⚙️ Installation & Setup

### 1. Clone the repository

```bash
git clone https://github.com/your-username/your-repo-name.git
cd your-repo-name/backend
```

### 2. Install dependencies

```bash
npm install
```

### 3. Configure environment variables

Create a `.env` file in the root of the project:

```env
MONGO_URL=your_mongodb_connection_string
PORT=3001
```

### 4. Start the server

npm  run start

The server will run at `http://localhost:3001`

---

## 📡 API Endpoints

### 📖 Books

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/book/` | Get all books |

---

### 👤 Users

| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/user/signup` | Register a new user |
| POST | `/user/login` | Login an existing user |

#### Signup — Request Body
```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "password": "yourpassword"
}
```

#### Login — Request Body
```json
{
  "email": "john@example.com",
  "password": "yourpassword"
}
```

#### Login — Response
```json
{
  "message": "Login successful",
  "login": true,
  "name": "John Doe",
  "email": "john@example.com"
}
```

---

### 📬 Contact Us

| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/contactUs/` | Submit a contact message |

#### Request Body
```json
{
  "name": "Jane Doe",
  "email": "jane@example.com",
  "message": "I'd like to know more about..."
}
```

---

## 🗄️ Data Models

### Book
| Field | Type | Required |
|-------|------|----------|
| id | Number | ✅ |
| title | String | ✅ |
| price | Number | ✅ |
| image | String | ✅ |
| type | String | ✅ |
| author | String | ✅ |
| category | String | ✅ |

### User
| Field | Type | Required | Unique |
|-------|------|----------|--------|
| name | String | ✅ | ❌ |
| email | String | ✅ | ✅ |
| password | String | ✅ | ❌ |

> Passwords are hashed using **bcrypt** before storage.

### ContactUs
| Field | Type | Required |
|-------|------|----------|
| name | String | ✅ |
| email | String | ✅ |
| message | String | ✅ |

---

## 📜 Scripts

| Command | Description |
|---------|-------------|
| `npm start` | Start server with nodemon (auto-reload) |

---

## 📄 License

This project is licensed under the **ISC License**.