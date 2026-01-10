import { useState } from "react";

export default function NoteForm({ onAddNote }) {
  const [title, setTitle] = useState("");
  //Stores what user types in title input
  const [description, setDescription] = useState("");
  //Stores what user types in description textarea
  const [error, setError] = useState("");
  //Stores validation error text
  const [hasSubmitted, setHasSubmitted] = useState(false);
  //Has user clicked Add Note?,Helps disable button & show error properly

  const handleSubmit = (e) => {
    e.preventDefault();
    setHasSubmitted(true);
    //User clicked Add Note

    if (title.trim() === "") {
      setError("Title cannot be empty");
      return;
    }
    //Show error

    const newNote = {
      id: Date.now(),
      title: title.trim(),
      description: description.trim(),
    };
    //Creates one note with:unique id,clean title,clean description

    onAddNote(newNote);//Send Note to App.jsx.Calls addNote() in App.js,App shows loader,App adds note after delay

    // reset everything after success
    setTitle("");
    setDescription("");
    setError("");
    setHasSubmitted(false);
  };

  const handleTitleChange = (e) => {
    setTitle(e.target.value);

    if (e.target.value.trim() !== "") {
      setError("");
      setHasSubmitted(false);
    }
  };
  //As soon as user types something valid,Error disappears,Button becomes enabled

  return (
    <form className="note-form" onSubmit={handleSubmit}>
      <h2>Add Note</h2>

      <div className="form-group">
        <label>Title *</label>
        <input
          type="text"
          value={title}
          placeholder="Enter Title"
          onChange={handleTitleChange}
        />

        {error && <p className="error-text">{error}</p>}
      </div>

      <div className="form-group">
        <label>Description</label>
        <textarea
          value={description}
          placeholder="Enter Description"
          onChange={(e) => setDescription(e.target.value)}
        />
      </div>

      <button
        type="submit"
        disabled={hasSubmitted && title.trim() === ""}
      >
        Add Note
      </button>
    </form>
  );
}
