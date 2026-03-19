import { useState } from "react";

const moods = ["😊", "😐", "😢", "😡"];

export default function MoodCard({ onAdd }) {
  const [selected, setSelected] = useState("");
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!selected || !title.trim() || !text.trim()) {
      alert("Please fill all fields!");
      return;
    }

    onAdd({
      id: Date.now(),
      mood: selected,
      title,
      text,
      date: new Date().toLocaleString(),
    });

    setTitle("");
    setText("");
    setSelected("");
  };

  return (
    <form className="card" onSubmit={handleSubmit}>
      <div className="card-header">
        <h3>Daily Check-in</h3>
        <button type="submit" className="add-btn">+ Add Entry</button>
      </div>

      <div className="mood-list">
        {moods.map((m) => (
          <span key={m} onClick={() => setSelected(m)} className={selected === m ? "active" : ""}>
            {m}
          </span>
        ))}
      </div>

      <input 
        type="text" 
        placeholder="Entry Title (e.g. Rainy Day)" 
        value={title} 
        onChange={(e) => setTitle(e.target.value)}
        className="form-input"
      />

      <textarea
        placeholder="How was your day?"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
    </form>
  );
}