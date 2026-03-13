

# 📚 Bookstore Frontend

A modern, responsive bookstore web application built with React, Vite, and Tailwind CSS. Features dark mode support, user authentication, book browsing, checkout, and a contact form.

---

## 🚀 Tech Stack

- **Framework:** React 19
- **Build Tool:** Vite 7
- **Styling:** Tailwind CSS v4 + DaisyUI v5
- **Routing:** React Router DOM v7
- **Forms:** React Hook Form
- **HTTP Client:** Axios
- **Notifications:** React Hot Toast
- **Carousel:** React Slick
- **Icons:** Lucide React + Heroicons
- **Font:** Poppins (Google Fonts)

---

## 📁 Project Structure

```
frontend/
├── public/
│   └── vite.svg
├── src/
│   ├── components/
│   │   ├── navbar.jsx
│   │   ├── Banner.jsx
│   │   ├── FreeBook.jsx
│   │   ├── Footer.jsx
│   │   ├── CourseContent.jsx
│   │   └── ProtectedRoute.jsx
│   ├── Pages/
│   │   ├── home.jsx
│   │   ├── course.jsx
│   │   ├── signup.jsx
│   │   ├── about.jsx
│   │   ├── ContactUs.jsx
│   │   └── BuyBook.jsx
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── index.html
├── vite.config.js
├── tailwind.config.js
├── eslint.config.js
└── package.json
```

---

## ⚙️ Installation & Setup

### 1. Clone the repository

```bash
git clone https://github.com/your-username/your-repo-name.git
cd your-repo-name/frontend
```

### 2. Install dependencies

```bash
npm install
```

### 3. Start the development server

```bash
npm run dev
```

The app will run at `http://localhost:5173`

### 4. Build for production

```bash
npm run build
```

---

## 🔗 Backend Connection

This frontend connects to a backend API running at `http://localhost:3000`.

Make sure the backend server is running before using the app. See the [backend README](../backend/README.md) for setup instructions.

| Action | API Endpoint |
|--------|-------------|
| Signup | `POST /user/signup` |
| Login | `POST /user/login` |
| Get Books | `GET /book/` |
| Contact Form | `POST /contactUs/` |

---

## 🗺️ Pages & Routes

| Route | Page | Auth Required |
|-------|------|---------------|
| `/` | Home | ❌ |
| `/course` | Browse Books | ✅ |
| `/signup` | Sign Up / Login | ❌ |
| `/aboutus` | About Us | ❌ |
| `/contactus` | Contact Us | ❌ |
| `/buy` | Checkout | ❌ |

> Protected routes redirect unauthenticated users away from `/course`.

---

## ✨ Features

- **Home Page** — Hero banner and featured free books carousel
- **Book Browsing** — Browse all available books (protected, login required)
- **Buy a Book** — Checkout page with delivery form and Cash on Delivery support
- **Authentication** — Sign up and login with form validation
- **Contact Form** — Send messages directly to the backend
- **About Page** — Bookstore mission and info cards
- **Dark Mode** — Full dark/light theme toggle support
- **Toast Notifications** — Real-time feedback on all actions
- **Responsive Design** — Mobile-first, works on all screen sizes

---

## 📜 Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server with HMR |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build |
| `npm run lint` | Run ESLint checks |

---

# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
This project is **private** and not licensed for public distribution.