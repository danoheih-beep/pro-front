import { createContext, useContext, useEffect, useMemo, useState } from "react";
import { entryService } from "../services/entryService";

const EntriesContext = createContext(null);

export function EntriesProvider({ children }) {
  const [entries, setEntries] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const fetchEntries = async () => {
    try {
      setLoading(true);
      setError("");
      const data = await entryService.getAll();
      setEntries(data.reverse());
    } catch (err) {
      setError(err.message || "Something went wrong while loading entries");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchEntries();
  }, []);

  const addEntry = async (entry) => {
    const created = await entryService.create(entry);
    setEntries((prev) => [created, ...prev]);
  };

  const deleteEntry = async (id) => {
    await entryService.remove(id);
    setEntries((prev) => prev.filter((entry) => entry.id !== id));
  };

  const value = useMemo(
    () => ({
      entries,
      loading,
      error,
      fetchEntries,
      addEntry,
      deleteEntry
    }),
    [entries, loading, error]
  );

  return (
    <EntriesContext.Provider value={value}>
      {children}
    </EntriesContext.Provider>
  );
}

export function useEntries() {
  return useContext(EntriesContext);
}