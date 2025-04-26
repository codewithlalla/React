// src/layouts/Sidebar.jsx
import { Link } from 'react-router-dom';

export default function Sidebar() {
  return (
    <aside className="w-60 bg-gray-800 text-white p-4">
      <h3 className="text-lg font-bold mb-4">Admin</h3>
      <nav className="flex flex-col space-y-2">
        <Link to="/admin/dashboard">Dashboard</Link>
        <Link to="/admin/users">Users</Link>
        <Link to="/admin/posts">Posts</Link>
      </nav>
    </aside>
  );
}
