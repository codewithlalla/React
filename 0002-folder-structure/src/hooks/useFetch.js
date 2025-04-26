// src/hooks/useFetch.js
import { useEffect, useState } from 'react';
import api from '@/services/api';

export const useFetch = (url, autoFetch = true) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(autoFetch);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    setLoading(true);
    try {
      const res = await api.get(url);
      setData(res.data);
    } catch (err) {
      setError(err);
    }
    setLoading(false);
  };

  useEffect(() => {
    if (autoFetch) fetchData();
  }, [url]);

  return { data, loading, error, refetch: fetchData };
};
