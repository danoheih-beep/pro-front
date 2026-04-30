const moods = ["😊", "😐", "😢", "😡"];

export default function MoodSelector({ selected, onSelect }) {
  return (
    <div>
      {moods.map((m) => (
        <button
          key={m}
          onClick={() => onSelect(m)}
          style={{
            fontSize: "24px",
            margin: "5px",
            background: selected === m ? "#d0d8ff" : "white",
          }}
        >
          {m}
        </button>
      ))}
    </div>
  );
}