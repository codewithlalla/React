// src/features/auth/hooks/useAuthApi.js
import { useDispatch } from 'react-redux';
import { login, logout } from '../authSlice';
import api from '@/services/api';

export const useAuthApi = () => {
  const dispatch = useDispatch();

  const loginUser = async (credentials) => {
    const response = await api.post('/auth/login', credentials);
    const { user, token } = response.data;
    localStorage.setItem('token', token);
    localStorage.setItem('user', JSON.stringify(user));
    dispatch(login({ user, token }));
  };

  const logoutUser = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    dispatch(logout());
  };

  return { loginUser, logoutUser };
};
