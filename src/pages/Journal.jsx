import { useMemo, useState } from "react";
import MoodCard from "../components/MoodCard";
import StatsCard from "../components/StatsCard";
import ChartBlock from "../components/ChartBlock";
import EntriesList from "../components/EntriesList";
import Loader from "../components/Loader";
import { useEntries } from "../context/EntriesContext";
import { useAuth } from "../context/AuthContext";
import useDebounce from "../hooks/useDebounce";

export default function Journal() {
  const { entries, loading, error, addEntry, deleteEntry } = useEntries();
  const { user } = useAuth();
  const [searchTerm, setSearchTerm] = useState("");
  const debouncedSearch = useDebounce(searchTerm, 400);

  const userEntries = useMemo(() => {
    return entries.filter((entry) => entry.username === user?.username);
  }, [entries, user]);

  const filteredEntries = useMemo(() => {
    if (!debouncedSearch.trim()) return userEntries;

    const query = debouncedSearch.toLowerCase();

    return userEntries.filter(
      (entry) =>
        entry.title.toLowerCase().includes(query) ||
        entry.text.toLowerCase().includes(query)
    );
  }, [userEntries, debouncedSearch]);

  const happyCount = useMemo(() => {
    return userEntries.reduce(
      (acc, entry) => (entry.mood === "😊" ? acc + 1 : acc),
      0
    );
  }, [userEntries]);

  return (
    <>
      <MoodCard onAdd={addEntry} />

      <div className="stats-row">
        <StatsCard title="Total Entries" value={userEntries.length} />
        <StatsCard title="Happy Moments" value={happyCount} />
        <div className="card small search-container">
          <p className="subtitle">Quick Search</p>
          <input
            type="text"
            placeholder="Search your entries..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="form-input"
          />
        </div>
      </div>

      <ChartBlock entries={userEntries} />

      <h3>Recent Journal Entries</h3>

      {loading && <Loader />}
      {error && <p className="error-text">{error}</p>}
      {!loading && !error && (
        <EntriesList entries={filteredEntries} onDelete={deleteEntry} />
      )}
    </>
  );
}