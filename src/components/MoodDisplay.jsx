import React from "react";

function MoodDisplay({ mood }) {
  return (
    <div style={{ margin: "10px 0" }}>
      <h3>Your current mood:</h3>
      <p>{mood || "Not selected yet"}</p>
    </div>
  );
}

export default MoodDisplay;