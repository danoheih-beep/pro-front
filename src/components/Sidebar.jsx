export default function Sidebar() {
    return (
      <div className="sidebar">
        <div className="sidebar-top">
          <div className="logo-section">
            <div className="logo-icon">✨</div>
            <div>
              <h3>MindTrack</h3>
              <p className="subtitle">Your mental wellness companion</p>
            </div>
          </div>
  
          <nav>
            <p className="active">Dashboard</p>
            <p>Journal</p>
            <p>Analytics</p>
            <p>Profile</p>
          </nav>
        </div>
  
        <div className="daily-reminder">
          <p className="reminder-label">Daily reminder</p>
          <p className="reminder-text">
            Take a moment to breathe and check in with yourself 🌿
          </p>
        </div>
      </div>
    );
  }