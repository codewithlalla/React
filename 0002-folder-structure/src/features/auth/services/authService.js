// src/features/auth/services/authService.js
import api from './api';

export const login = async (credentials) => {
  const res = await api.post('/auth/login', credentials);
  return res.data;
};

export const register = async (data) => {
  const res = await api.post('/auth/register', data);
  return res.data;
};

export const logout = async () => {
  const res = await api.post('/auth/logout');
  return res.data;
};

export const refreshToken = async () => {
  const res = await api.post('/auth/refresh');
  return res.data;
};
