export default function Stats({ entries }) {
    const total = entries.length;
  
    const avg =
      total === 0
        ? 0
        : (
            entries.reduce((acc, e) => {
              if (e.mood === "😊") return acc + 4;
              if (e.mood === "😐") return acc + 3;
              if (e.mood === "😢") return acc + 2;
              if (e.mood === "😡") return acc + 1;
              return acc;
            }, 0) / total
          ).toFixed(1);
  
    return (
      <div style={{ display: "flex", gap: "10px" }}>
        <div className="card">🔥 Streak: 0 days</div>
        <div className="card">📊 Weekly Avg: {avg}</div>
        <div className="card">📝 Total Entries: {total}</div>
      </div>
    );
  }