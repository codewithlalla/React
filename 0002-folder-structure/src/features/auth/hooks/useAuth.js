// src/features/auth/hooks/useAuth.js
export const useAuth = () => {
  
    const user = JSON.parse(localStorage.getItem('user')) || null;
    const isAuthenticated = !!user;
  
    return { isAuthenticated, user };
  };
  