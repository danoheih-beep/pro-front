import { useState } from "react";
import { useAuth } from "../context/AuthContext";

const moods = ["😊", "😐", "😢", "😡"];

export default function MoodCard({ onAdd }) {
  const [selected, setSelected] = useState("");
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");
  const [message, setMessage] = useState("");
  const { user } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!selected || !title.trim() || !text.trim()) {
      setMessage("Please fill in all fields.");
      return;
    }

    const newEntry = {
      mood: selected,
      title: title.trim(),
      text: text.trim(),
      date: new Date().toLocaleString(),
      username: user?.username
    };

    try {
      await onAdd(newEntry);
      setTitle("");
      setText("");
      setSelected("");
      setMessage("Entry added successfully!");
    } catch (error) {
      setMessage("Failed to add entry.");
    }
  };

  return (
    <form className="card" onSubmit={handleSubmit}>
      <div className="card-header">
        <h3>Daily Check-in</h3>
        <button type="submit" className="add-btn">
          + Add Entry
        </button>
      </div>

      <div className="mood-list">
        {moods.map((mood) => (
          <span
            key={mood}
            onClick={() => setSelected(mood)}
            className={selected === mood ? "active" : ""}
          >
            {mood}
          </span>
        ))}
      </div>

      <input
        type="text"
        placeholder="Entry Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="form-input"
      />

      <textarea
        placeholder="How was your day?"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />

      {message && <p className="subtitle">{message}</p>}
    </form>
  );
}