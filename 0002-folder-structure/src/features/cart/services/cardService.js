// src/features/cart/services/cartService.js
import api from '@/services/api';

export const getCartItems = async () => {
  const res = await api.get('/cart');
  return res.data;
};

export const addToCart = async (product) => {
  const res = await api.post('/cart', product);
  return res.data;
};

export const removeFromCart = async (productId) => {
  const res = await api.delete(`/cart/${productId}`);
  return res.data;
};

export const clearCart = async () => {
  const res = await api.delete('/cart');
  return res.data;
};
