import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { entryService } from "../services/entryService";
import { useAuth } from "../context/AuthContext";
import Loader from "../components/Loader";

export default function EntryDetails() {
  const { id } = useParams();
  const { user } = useAuth();
  const [entry, setEntry] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    let isMounted = true;

    const fetchEntry = async () => {
      try {
        setLoading(true);
        setError("");
        const data = await entryService.getById(id);

        if (isMounted) {
          if (data.username !== user?.username) {
            setError("You do not have access to this entry.");
            setEntry(null);
          } else {
            setEntry(data);
          }
        }
      } catch (err) {
        if (isMounted) {
          setError(err.message || "Failed to load entry");
        }
      } finally {
        if (isMounted) {
          setLoading(false);
        }
      }
    };

    fetchEntry();

    return () => {
      isMounted = false;
    };
  }, [id, user]);

  if (loading) return <Loader />;
  if (error) return <p className="error-text">{error}</p>;
  if (!entry) return <p className="error-text">Entry not found</p>;

  return (
    <div className="details-page">
      <Link to="/dashboard/journal" className="back-link">
        ← Back to Journal
      </Link>

      <div className="card">
        <div className="entry-header">
          <div className="emoji-bg">{entry.mood}</div>
          <div>
            <h2>{entry.title}</h2>
            <p className="subtitle">{entry.date}</p>
          </div>
        </div>

        <p>{entry.text}</p>
      </div>
    </div>
  );
}