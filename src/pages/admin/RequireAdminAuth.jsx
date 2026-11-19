import { Navigate, useLocation } from 'react-router-dom';
import { useAdminAuth } from '../../context/AdminAuthContext';

function RequireAdminAuth({ children }) {
  const { user } = useAdminAuth();
  const location = useLocation();

  if (user === undefined) {
    return <div className="text-center py-24 text-gray-500">Cargando…</div>;
  }
  if (user === null) {
    return <Navigate to="/admin/login" state={{ from: location.pathname }} replace />;
  }
  return children;
}

export default RequireAdminAuth;
