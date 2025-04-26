// src/features/user/hooks/useUserApi.js
import { useDispatch } from 'react-redux';
import { fetchProfileStart, fetchProfileSuccess, fetchProfileFailure } from '../userSlice';
import api from '@/services/api';

export const useUserApi = () => {
  const dispatch = useDispatch();

  const fetchProfile = async () => {
    try {
      dispatch(fetchProfileStart());
      const response = await api.get('/user/profile');
      dispatch(fetchProfileSuccess(response.data));
    } catch (error) {
      dispatch(fetchProfileFailure(error.message));
    }
  };

  return { fetchProfile };
};
