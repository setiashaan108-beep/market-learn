import useAuth from '../../features/auth/hooks/useAuth';
import { Navigate, Outlet } from 'react-router-dom';
import type { UserRole } from '../../types/user';

function ProtectedRoute({ allowedRoles }: { allowedRoles?: UserRole[] }) {
  const { user } = useAuth();

  if (!user) {
    return <Navigate to="/login" replace />;
  }

  if (allowedRoles && !allowedRoles.includes(user.role)) {
    return <Navigate to="/unauthorized" replace />;
  }

  return <Outlet />;
}

export default ProtectedRoute;
