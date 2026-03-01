import React from "react";

function MoodButton({ mood, onSelect }) {
  return (
    <button onClick={() => onSelect(mood)} style={{ margin: "5px", padding: "10px" }}>
      {mood}
    </button>
  );
}

export default MoodButton;