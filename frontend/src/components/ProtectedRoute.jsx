import { Navigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

export default function ProtectedRoute({ children }) {
  const { admin, loading } = useAuth();
  const token = localStorage.getItem('mehsang_token');

  if (loading) return (
    <div className="min-h-screen flex items-center justify-center bg-cream-50">
      <div className="spinner" />
    </div>
  );

  return admin || token ? children : <Navigate to="/admin/login" replace />;
}
