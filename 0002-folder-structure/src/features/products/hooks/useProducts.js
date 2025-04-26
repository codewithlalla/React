// src/features/products/hooks/useProducts.js
import { useState, useEffect } from 'react';
import * as productService from '@/features/products/services/productService';

export const useProducts = () => {
  const [products, setProducts] = useState([]);

  const fetchProducts = async () => {
    const res = await productService.getAllProducts();
    setProducts(res);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return { products };
};
