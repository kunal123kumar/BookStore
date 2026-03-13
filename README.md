# 📚 Bookstore — Full Stack Web Application

A full-stack bookstore web application with a React frontend and a Node.js/Express backend connected to MongoDB. Users can browse books, sign up, log in, buy books (Cash on Delivery), and contact the store.

---

## 🗂️ Project Structure

```
project/
├── frontend/               # React + Vite application
│   ├── public/
│   ├── src/
│   │   ├── components/     # Navbar, Banner, FreeBook, Footer, CourseContent, ProtectedRoute
│   │   ├── Pages/
│   │   │   ├── home.jsx
│   │   │   ├── course.jsx
│   │   │   ├── signup.jsx
│   │   │   ├── ContactUs.jsx
│   │   │   ├── about.jsx
│   │   │   └── BuyBook.jsx
│   │   ├── App.jsx
│   │   ├── main.jsx
│   │   └── index.css
│   ├── index.html
│   ├── vite.config.js
│   ├── tailwind.config.js
│   └── package.json
│
└── backend/                # Node.js + Express REST API
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
    └── package.json
```

---

## ✨ Features

- 🏠 **Home Page** — Hero banner + free books section
- 📖 **Course/Books Page** — Browse all available books (protected route)
- 🛒 **Buy Book** — Checkout page with Cash on Delivery support
- 🔐 **Authentication** — Signup & Login with bcrypt password hashing
- 📬 **Contact Us** — Submit messages stored in MongoDB
- ℹ️ **About Page** — Store story, mission, and values
- 🌙 **Dark Mode** — Full dark/light theme support via Tailwind CSS
- 🔒 **Protected Routes** — Course page accessible only after login
- 🔔 **Toast Notifications** — Real-time feedback on all actions

---

## 🖥️ Frontend

### Tech Stack

| Tool | Version | Purpose |
|------|---------|---------|
| React | 19 | UI framework |
| Vite | 7 | Build tool & dev server |
| React Router DOM | 7 | Client-side routing |
| Tailwind CSS | 4 | Utility-first styling |
| DaisyUI | 5 | UI component library |
| Axios | 1 | HTTP requests to backend |
| React Hook Form | 7 | Form handling & validation |
| React Hot Toast | 2 | Toast notifications |
| Lucide React | 0.5 | Icon library |
| React Slick | 0.31 | Carousel/slider component |

### Pages & Routes

| Route | Page | Access |
|-------|------|--------|
| `/` | Home | Public |
| `/course` | Books/Course | 🔒 Login required |
| `/signup` | Signup | Public |
| `/contactus` | Contact Us | Public |
| `/aboutus` | About | Public |
| `/buy` | Buy Book | Public |

### Installation & Running

```bash
# Navigate to frontend folder
cd frontend

# Install dependencies
npm install

# Start development server
npm run dev
```

The frontend will run at **http://localhost:5173**

### Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start dev server |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build |
| `npm run lint` | Run ESLint |

---

## ⚙️ Backend

### Tech Stack

| Tool | Version | Purpose |
|------|---------|---------|
| Node.js | - | Runtime |
| Express | 5 | Web framework |
| MongoDB | - | Database |
| Mongoose | 9 | MongoDB ODM |
| bcrypt | 6 | Password hashing |
| dotenv | 17 | Environment variables |
| cors | 2 | Cross-origin requests |
| nodemon | 3 | Auto-restart in dev |

### Installation & Running

```bash
# Navigate to backend folder
cd backend

# Install dependencies
npm install

# Create .env file and add your values
touch .env

# Start the server
npm start
```

The backend will run at **http://localhost:3001**

### Environment Variables

Create a `.env` file in the `backend/` directory:

```env
MONGO_URL=your_mongodb_connection_string
PORT=3001
```

### API Endpoints

#### 📖 Books

| Method | Endpoint | Description | Auth |
|--------|----------|-------------|------|
| GET | `/book/` | Get all books | No |

---

#### 👤 Users

| Method | Endpoint | Description | Auth |
|--------|----------|-------------|------|
| POST | `/user/signup` | Register a new user | No |
| POST | `/user/login` | Login a user | No |

**Signup — Request Body:**
```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "password": "yourpassword"
}
```

**Login — Request Body:**
```json
{
  "email": "john@example.com",
  "password": "yourpassword"
}
```

**Login — Response:**
```json
{
  "message": "Login successful",
  "login": true,
  "name": "John Doe",
  "email": "john@example.com"
}
```

---

#### 📬 Contact Us

| Method | Endpoint | Description | Auth |
|--------|----------|-------------|------|
| POST | `/contactUs/` | Submit a contact message | No |

**Request Body:**
```json
{
  "name": "Jane Doe",
  "email": "jane@example.com",
  "message": "I would like to know more about..."
}
```

---

### Data Models

#### Book
```js
{
  id:       Number  // required
  title:    String  // required
  price:    Number  // required
  image:    String  // required (URL)
  type:     String  // required (e.g. "Free", "Paid")
  author:   String  // required
  category: String  // required
}
```

#### User
```js
{
  name:     String  // required
  email:    String  // required, unique
  password: String  // required, bcrypt hashed
}
```

#### ContactUs
```js
{
  name:    String  // required
  email:   String  // required
  message: String  // required
}
```

---

## 🚀 Running the Full Project

Open two terminals and run both servers simultaneously:

**Terminal 1 — Backend:**
```bash
cd backend
npm install
npm start
```

**Terminal 2 — Frontend:**
```bash
cd frontend
npm install
npm run dev
```

Then open **http://localhost:5173** in your browser.

> ⚠️ Make sure MongoDB is running and your `MONGO_URL` is set correctly in the backend `.env` file.

---

## 📦 Deployment Notes

- **Frontend:** Build with `npm run build` and deploy the `dist/` folder to Vercel, Netlify, or any static host.
- **Backend:** Deploy to Railway, Render, or any Node.js-compatible host. Set environment variables on the hosting platform.
- **Database:** Use [MongoDB Atlas](https://www.mongodb.com/atlas) for a cloud-hosted MongoDB instance.

---

## 📄 License

This project is licensed under the **ISC License**.
