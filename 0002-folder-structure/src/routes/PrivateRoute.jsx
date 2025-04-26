// src/routes/PrivateRoute.jsx
import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from '@/features/auth/hooks/useAuth';

const PrivateRoute = ({ role = 'user' })=> {
  const { isAuthenticated, user } = useAuth();

  if (!isAuthenticated) {
    return <Navigate to="/login" />;
  }

  if (role === 'admin' && user?.role !== 'admin') {
    return <Navigate to="/adminDashbord" />;
  }

  return <Outlet />;
}

export default PrivateRoute
