import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function Login() {
  const [username, setUsername] = useState("");
  const [error, setError] = useState("");
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!username.trim()) {
      setError("Please enter your username");
      return;
    }

    login(username.trim());
    navigate("/dashboard/journal");
  };

  return (
    <div className="auth-page">
      <form className="card auth-card" onSubmit={handleSubmit}>
        <h2>Login to MindTrack</h2>
        <p className="subtitle">Track your daily mood and journal entries</p>

        <input
          className="form-input"
          type="text"
          placeholder="Enter your username"
          value={username}
          onChange={(e) => {
            setUsername(e.target.value);
            setError("");
          }}
        />

        {error && <p className="error-text">{error}</p>}

        <button type="submit" className="add-btn">
          Login
        </button>
      </form>
    </div>
  );
}