📦 Site Crawler Frontend
A React + TypeScript frontend for a site crawler that allows users to log in to a selected website and view available deals. This project connects to a FastAPI backend and handles authentication using JWT with session-based token persistence.

🚀 Features
🌐 Website selection + login form

🔐 Protected routes with global auth guard

💾 Token storage using sessionStorage

🧾 Deals list displayed after login

🎨 Modern UI built with Tailwind CSS

🧠 State management via Redux Toolkit

🧱 Tech Stack
Library	Purpose
React	UI framework
TypeScript	Type-safe code
Redux Toolkit	State management
React Router	Client-side routing
Axios	HTTP client for API calls
Tailwind CSS	Utility-first CSS framework
sessionStorage	Auth token persistence (per tab)

📂 Project Structure
graphql
Copy
Edit
src/
├── components/        # UI components (LoginForm, DealsList)
├── pages/             # Page-level components
├── redux/             # Redux slices, store, and types
├── services/          # API calls via Axios
├── layout/            # Protected route layout
├── types/             # Shared TypeScript interfaces
├── styles/            # Global styles (Tailwind)
└── App.tsx            # App entry + routes
🛠️ Setup & Installation
1. Clone the repo:
bash
Copy
Edit
git clone https://github.com/yourusername/site-crawler-frontend.git
cd site-crawler-frontend
2. Install dependencies:
bash
Copy
Edit
npm install
3. Configure environment variables:
Create a .env file in the root with:

bash
Copy
Edit
REACT_APP_API_BASE_URL=http://localhost:8000/api/v1
Replace with your actual API base URL if needed.

4. Run the app:
bash
Copy
Edit
npm start
App will be available at:
📍 http://localhost:3000

🔒 Auth Flow
User logs in → receives JWT token.

Token is stored in sessionStorage.

All routes (except /) are protected using a global layout-based route guard.

On logout or session expiry, user is redirected to the login page.

🧪 Future Improvements
Add refresh token mechanism

Persist token in localStorage optionally

Use query caching with RTK Query

Add unit and integration tests

🤝 Backend API
This project is designed to work with a FastAPI backend:

Login Endpoint

Returns: token, deals[], message

🧾 License
MIT © 2025 – [Your Name]

