import { Link } from "react-router-dom";

export default function EntryCard({ entry, onDelete }) {
  return (
    <div className="entry-card">
      <div className="entry-header">
        <div className="emoji-bg">{entry.mood}</div>
        <div>
          <strong style={{ display: "block" }}>{entry.title}</strong>
          <small className="subtitle">{entry.date}</small>
        </div>
      </div>

      <p style={{ fontSize: "14px", lineHeight: "1.5" }}>{entry.text}</p>

      <div className="entry-actions">
        <Link to={`/entries/${entry.id}`} className="details-link">
          View Details
        </Link>
        <button onClick={() => onDelete(entry.id)} className="delete-btn">
          Delete
        </button>
      </div>
    </div>
  );
}