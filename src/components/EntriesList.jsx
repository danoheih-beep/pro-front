import EntryCard from "./EntryCard";

export default function EntriesList({ entries, onDelete }) {
  return (
    <div>
      {entries.length === 0 ? (
        <p className="no-data">No matching entries found</p>
      ) : (
        <div className="entries">
          {entries.map((entry) => (
            <EntryCard key={entry.id} entry={entry} onDelete={onDelete} />
          ))}
        </div>
      )}
    </div>
  );
}