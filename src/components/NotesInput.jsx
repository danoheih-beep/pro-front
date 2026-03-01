import React from "react";

function NotesInput({ text, onChange }) {
  return (
    <div>
      <h3>Your thoughts:</h3>
      <input
        type="text"
        value={text}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Write how you feel..."
        style={{ padding: "5px", width: "200px" }}
      />
    </div>
  );
}

export default NotesInput;