// src/app/store.js
import { configureStore } from '@reduxjs/toolkit';
import { authMiddleware } from '@/middleware/authMiddleware';
import authReducer from '@/features/auth/authSlice';
import userReducer from '@/features/user/userSlice';
import productsReducer from '@/features/products/productsSlice';
import adminReducer from '@/features/admin/adminSlice';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    user: userReducer,
    admin: adminReducer,
    products: productsReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(authMiddleware),
});
