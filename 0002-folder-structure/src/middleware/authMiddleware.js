// src/middleware/authMiddleware.js
export const authMiddleware = (store) => (next) => (action) => {
    if (action.type === 'auth/logout') {
      localStorage.removeItem('token');
      localStorage.removeItem('user');
    }
  
    if (action.error && action.error.message === 'Unauthorized') {
      store.dispatch({ type: 'auth/logout' });
    }
  
    return next(action);
  };
  