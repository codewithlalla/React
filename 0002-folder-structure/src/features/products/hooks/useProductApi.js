// src/features/product/hooks/useProductApi.js
import { useDispatch } from 'react-redux';
import { fetchProductsStart, fetchProductsSuccess, fetchProductsFailure } from '../productSlice';
import api from '@/services/api';

export const useProductApi = () => {
  const dispatch = useDispatch();

  const fetchProducts = async () => {
    try {
      dispatch(fetchProductsStart());
      const response = await api.get('/products');
      dispatch(fetchProductsSuccess(response.data));
    } catch (error) {
      dispatch(fetchProductsFailure(error.message));
    }
  };

  return { fetchProducts };
};
