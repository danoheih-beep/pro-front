import { useAuth } from "../context/AuthContext";
import { useEntries } from "../context/EntriesContext";
import { useMemo } from "react";

export default function Profile() {
  const { user } = useAuth();
  const { entries } = useEntries();

  const userEntries = useMemo(() => {
    return entries.filter((entry) => entry.username === user?.username);
  }, [entries, user]);

  return (
    <div className="card">
      <h2>Profile</h2>
      <p><strong>Username:</strong> {user?.username}</p>
      <p><strong>Total entries:</strong> {userEntries.length}</p>
      <p><strong>App type:</strong> Mood tracking SPA</p>
    </div>
  );
}