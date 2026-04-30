export default function ChartBlock({ entries = [] }) {
  const counts = entries.reduce(
    (acc, entry) => {
      acc[entry.mood] = (acc[entry.mood] || 0) + 1;
      return acc;
    },
    { "😊": 0, "😐": 0, "😢": 0, "😡": 0 }
  );

  return (
    <div className="card">
      <h3>This Week’s Mood Overview</h3>

      {entries.length === 0 ? (
        <p>No data yet</p>
      ) : (
        <div className="mood-stats">
          <div>😊 Happy: {counts["😊"]}</div>
          <div>😐 Neutral: {counts["😐"]}</div>
          <div>😢 Sad: {counts["😢"]}</div>
          <div>😡 Angry: {counts["😡"]}</div>
        </div>
      )}
    </div>
  );
}