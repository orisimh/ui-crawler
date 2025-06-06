# 📦 Site Crawler Frontend

A **React + TypeScript** frontend for a site crawler that allows users to log in to a selected website and view available deals. It connects to a FastAPI backend and handles authentication using JWT with session-based persistence.

---

## 🚀 Features

- 🌐 Website selection + login form
- 🔐 Protected routes with global auth guard
- 🧾 Deals list displayed after login
- 🎨 Modern UI built with **Tailwind CSS**
- 🧠 State management via **Redux Toolkit**

---

## 🧱 Tech Stack

| Library            | Purpose                            |
|--------------------|------------------------------------|
| `React`            | UI framework                       |
| `TypeScript`       | Type-safe development              |
| `Redux Toolkit`    | Global state management            |
| `Tailwind CSS`     | Utility-first CSS framework        |

---

## 📂 Folder Structure

src/
├── components/ # LoginForm, DealsList
├── pages/ # LoginPage, DealsPage
├── redux/ # Redux store, slices, types
├── services/ # API calls (axios)
├── layout/ # Global auth guard (ProtectedLayout)
├── styles/ # Tailwind CSS config
└── App.tsx # Entry point with routing



---

## 🛠️ Getting Started

### 1. Clone the repository
```bash
git clone https://github.com/yourusername/site-crawler-frontend.git
cd site-crawler-frontend
2. Install dependencies

npm install
3. Configure environment
Create a .env file in the root directory:


REACT_APP_API_BASE_URL=http://localhost:8000/api/v1
🔁 Replace the URL with your actual backend address if needed.

4. Start the development server
bash
Copy
Edit
npm start
The app will be available at:
📍 http://localhost:3000

---

🔒 Authentication Flow
After login, a JWT token is received and stored in sessionStorage.

All protected routes use a global layout-based guard.

If the token is missing or expired, the user is redirected to the login page.

On logout, the token is cleared from session storage.

🧪 Planned Improvements
Add refresh token support

Move token handling to interceptors

Improve UI/UX with Tailwind animations

Add unit and integration tests


---


🔗 Backend API
This app is designed to connect with a FastAPI backend:

POST /api/v1/login – login and get token + deals


---

