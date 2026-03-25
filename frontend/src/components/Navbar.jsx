import { Link, NavLink, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const Navbar = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <header className="navbar">
      <Link to="/" className="brand">
        Campus<span>Voice</span>
      </Link>

      <nav className="nav-links">
        <NavLink to="/">Home</NavLink>
        <a href="/#about">About Us</a>
        {!user && <NavLink to="/login">Login</NavLink>}
        {!user && <NavLink to="/register">Register</NavLink>}
        {user?.role === "student" && <NavLink to="/student">Student Dashboard</NavLink>}
        {user?.role === "admin" && <NavLink to="/admin">Admin Dashboard</NavLink>}
      </nav>

      <div className="nav-actions">
        {user ? (
          <>
            <span className="welcome-chip">
              {user.name} · {user.role}
            </span>
            <button type="button" className="ghost-button" onClick={handleLogout}>
              Logout
            </button>
          </>
        ) : (
          <Link to="/login" className="primary-button">
            Enter Portal
          </Link>
        )}
      </div>
    </header>
  );
};

export default Navbar;
