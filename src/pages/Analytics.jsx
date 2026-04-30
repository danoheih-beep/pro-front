import ChartBlock from "../components/ChartBlock";
import { useEntries } from "../context/EntriesContext";
import { useAuth } from "../context/AuthContext";
import Loader from "../components/Loader";
import { useMemo } from "react";

export default function Analytics() {
  const { entries, loading, error } = useEntries();
  const { user } = useAuth();

  const userEntries = useMemo(() => {
    return entries.filter((entry) => entry.username === user?.username);
  }, [entries, user]);

  if (loading) return <Loader />;
  if (error) return <p className="error-text">{error}</p>;

  return (
    <div>
      <h2>Mood Analytics</h2>
      <p className="subtitle">A quick summary of your emotional patterns</p>
      <ChartBlock entries={userEntries} />
    </div>
  );
}