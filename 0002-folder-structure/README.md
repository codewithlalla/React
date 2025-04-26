# Code with Lalla - React Boilerplate

🚀 Production-ready, feature-scaled React app with Vite + Redux Toolkit + Testing + CI.

![Tests](https://github.com/codewithlalla/my-app/actions/workflows/test.yml/badge.svg)

## Features

- ✅ Vite + React + Redux Toolkit
- ✅ Feature-based folder structure
- ✅ API services with Axios
- ✅ Custom hooks
- ✅ Auth middleware
- ✅ Route protection (admin, private)
- ✅ Lazy loaded pages
- ✅ Vitest & RTL Testing
- ✅ GitHub Actions CI

project-root/
├── .github/
│   └── workflows/
│       └── test.yml                # GitHub Actions for auto-tests
├── public/
│   └── favicon.svg
├── src/
│   ├── app/
│   │   └── store.js                # Redux store
│   ├── assets/
│   │   └── logo.svg
│   ├── components/
│   │   ├── Button.jsx
│   │   ├── Footer.jsx
│   │   └── Loader.jsx
│   ├── features/
│   │   ├── auth/
│   │   │   ├── components/
│   │   │   │   └── LoginForm.jsx
│   │   │   ├── hooks/
│   │   │   │   ├── useAuth.js
│   │   │   │   └── useAuthApi.js
│   │   │   ├── authSlice.js
│   │   │   ├── services/
│   │   │   │   └── authService.js
│   │   │   └── __tests__/
│   │   │       ├── authSlice.test.js
│   │   │       └── useAuthApi.test.js
│   │   ├── user/
│   │   │   ├── components/
│   │   │   │   └── UserProfile.jsx
│   │   │   ├── hooks/
│   │   │   │   ├── useUser.js
│   │   │   │   └── useUserApi.js
│   │   │   ├── userSlice.js
│   │   │   ├── services/
│   │   │   │   └── userService.js
│   │   │   └── __tests__/
│   │   │       └── userSlice.test.js
│   │   ├── product/
│   │   │   ├── components/
│   │   │   │   └── ProductCard.jsx
│   │   │   ├── hooks/
│   │   │   │   ├── useProduct.js
│   │   │   │   └── useProductApi.js
│   │   │   ├── productSlice.js
│   │   │   ├── services/
│   │   │   │   └── productService.js
│   │   │   └── __tests__/
│   │   │       └── useProductApi.test.js
│   │   └── admin/
│   │       ├── components/
│   │       │   └── AdminDashboard.jsx
│   │       ├── hooks/
│   │       │   ├── useAdmin.js
│   │       │   └── useAdminApi.js
│   │       ├── adminSlice.js
│   │       ├── services/
│   │       │   └── adminService.js
│   │       └── __tests__/
│   │           └── adminSlice.test.js
│   ├── hooks/
│   │   ├── useLocalStorage.js
│   │   ├── useFetch.js
│   │   └── useDebounce.js
│   ├── layouts/
│   │   ├── MainLayout.jsx
│   │   └── AdminLayout.jsx
│   ├── middleware/
│   │   └── authMiddleware.js
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── Login.jsx
│   │   ├── NotFound.jsx
│   │   └── admin/
│   │       └── Dashboard.jsx
│   │   └── __tests__/
│   │       └── Login.test.jsx
│   ├── routes/
│   │   ├── PrivateRoute.jsx
│   │   └── AppRoutes.jsx
│   ├── services/
│   │   └── api.js
│   ├── styles/
│   │   └── global.css
│   ├── utils/
│   │   └── constants.js
│   ├── App.jsx
│   ├── main.jsx
│   └── setupTests.js
├── .env
├── .gitignore
├── index.html
├── package.json
├── README.md
├── vite.config.js

