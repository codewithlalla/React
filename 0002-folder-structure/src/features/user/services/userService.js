// src/features/user/services/userService.js
import api from '@/services/api';

export const getUserProfile = async () => {
  const res = await api.get('/user/profile');
  return res.data;
};

export const updateUserProfile = async (data) => {
  const res = await api.put('/user/profile', data);
  return res.data;
};
