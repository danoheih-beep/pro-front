import React from "react";

function ThemeToggle({ onToggle }) {
  return (
    <button onClick={onToggle} style={{ margin: "10px", padding: "10px" }}>
      Toggle Theme
    </button>
  );
}

export default ThemeToggle;