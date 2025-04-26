import { lazy, Suspense } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import PrivateRoute from './PrivateRoute';
import Loader from '../components/Loader';
import NotFound from '../pages/NotFound';

// Lazy load pages
const Home = lazy(() => import('../pages/Home'));
const Login = lazy(() => import('../pages/Login'));
const Dashboard = lazy(() => import('../pages/admin/Dashboard'));
const Profile = lazy(() => import('../pages/Profile'));
const Products = lazy(() => import('../pages/Products'));

function AppRoutes() {
  return (
    <Suspense fallback={<Loader />}>

      <Routes>

        {/* Public Routes */}
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/products" element={<Products />} />

        {/* Private Routes (Require Login) */}
        <Route element={<PrivateRoute />}>

          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/profile" element={<Profile />} />

        </Route>

        {/* Admin Protected Routes */}
        {/* <Route element={<PrivateRoute isAdmin />}>
          <Route path="/admin" element={<AdminDashboard />} />
        </Route> */}

        {/* Not Found */}
        <Route path="*" element={<NotFound />} />
      </Routes>
      
    </Suspense>
  );
}

export default AppRoutes;
