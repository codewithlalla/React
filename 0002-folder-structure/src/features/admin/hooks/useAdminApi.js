// src/features/admin/hooks/useAdminApi.js
import { useDispatch } from 'react-redux';
import { fetchAdminDataStart, fetchAdminDataSuccess, fetchAdminDataFailure } from '../adminSlice';
import api from '@/services/api';

export const useAdminApi = () => {
  const dispatch = useDispatch();

  const fetchAdminData = async () => {
    try {
      dispatch(fetchAdminDataStart());
      const response = await api.get('/admin/dashboard');
      dispatch(fetchAdminDataSuccess(response.data));
    } catch (error) {
      dispatch(fetchAdminDataFailure(error.message));
    }
  };

  return { fetchAdminData };
};
