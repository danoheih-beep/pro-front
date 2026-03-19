export default function StatsCard({ title, value }) {
    return (
      <div className="card small">
        <p className="subtitle">{title}</p>
        <h3>{value}</h3>
      </div>
    );
  }