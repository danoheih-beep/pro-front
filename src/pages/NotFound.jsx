import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="auth-page">
      <div className="card auth-card">
        <h2>404 - Page Not Found</h2>
        <p className="subtitle">The page you are looking for does not exist.</p>
        <Link to="/dashboard/journal" className="add-btn link-btn">
          Go Back
        </Link>
      </div>
    </div>
  );
}