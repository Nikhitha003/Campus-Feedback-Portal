import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const RoleRoute = ({ role }) => {
  const { user, loading } = useAuth();

  if (loading) {
    return <div className="page-shell">Loading dashboard...</div>;
  }

  if (!user) {
    return <Navigate to="/login" replace />;
  }

  return user.role === role ? <Outlet /> : <Navigate to={user.role === "admin" ? "/admin" : "/student"} replace />;
};

export default RoleRoute;
