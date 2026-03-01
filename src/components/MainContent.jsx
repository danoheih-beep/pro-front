import React, { useState } from "react";
import "../styles/main.css";
import MoodButton from "./MoodButton";
import MoodDisplay from "./MoodDisplay";
import NotesInput from "./NotesInput";
import Counter from "./Counter";
import ThemeToggle from "./ThemeToggle";

function MainContent() {
  const [mood, setMood] = useState("");
  const [notes, setNotes] = useState("");
  const [dark, setDark] = useState(true);

  const handleMoodSelect = (selectedMood) => {
    setMood(selectedMood);
  };

  const toggleTheme = () => {
    setDark(!dark);
  };

  return (
    <main className={dark ? "main dark" : "main light"} style={{ minHeight: "80vh" }}>
      <h2>Welcome to MindTrack</h2>

      <ThemeToggle onToggle={toggleTheme} />

      <div style={{ margin: "20px 0" }}>
        <h3>Select your mood:</h3>
        <MoodButton mood="😊 Happy" onSelect={handleMoodSelect} />
        <MoodButton mood="😐 Neutral" onSelect={handleMoodSelect} />
        <MoodButton mood="😔 Sad" onSelect={handleMoodSelect} />
      </div>

      <MoodDisplay mood={mood} />

      <div style={{ margin: "20px 0" }}>
        <NotesInput text={notes} onChange={setNotes} />
      </div>

      <Counter />
    </main>
  );
}

export default MainContent;