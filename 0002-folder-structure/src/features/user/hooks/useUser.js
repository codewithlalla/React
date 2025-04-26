// src/features/user/hooks/useUser.js
import { useEffect, useState } from 'react';
import * as userService from '@/features/user/services/userService';

export const useUser = () => {
  const [user, setUser] = useState(null);

  const fetchUser = async () => {
    const res = await userService.getUserProfile();
    setUser(res);
  };

  useEffect(() => {
    fetchUser();
  }, []);

  return { user, fetchUser };
};
