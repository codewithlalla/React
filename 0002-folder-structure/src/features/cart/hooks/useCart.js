// src/features/cart/hooks/useCart.js
import { useState, useEffect } from 'react';
import * as cartService from '@/features/cart/services/cartService';

export const useCart = () => {
  const [items, setItems] = useState([]);

  const fetchCart = async () => {
    const res = await cartService.getCartItems();
    setItems(res);
  };

  useEffect(() => {
    fetchCart();
  }, []);

  return { items, fetchCart };
};
