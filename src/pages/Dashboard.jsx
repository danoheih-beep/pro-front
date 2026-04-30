import { NavLink, Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import { useAuth } from "../context/AuthContext";

export default function Dashboard() {
  const { logout, user } = useAuth();

  return (
    <div className="layout">
      <Sidebar />

      <div className="main">
        <div className="topbar">
          <Header />
          <div className="topbar-actions">
            <span className="subtitle">Hi, {user?.username || "User"}</span>
            <button className="delete-btn" onClick={logout}>
              Logout
            </button>
          </div>
        </div>

        <div className="subnav">
          <NavLink to="/dashboard/journal">Journal</NavLink>
          <NavLink to="/dashboard/analytics">Analytics</NavLink>
          <NavLink to="/dashboard/profile">Profile</NavLink>
        </div>

        <Outlet />
      </div>
    </div>
  );
}