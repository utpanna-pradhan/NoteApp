import NoteItem from "./NoteItem";


export default function NoteList({ notes, onDelete }) {
  return (
    <div className="note-list">
      <h2 className="note-list-title">All Notes</h2>

      <div className="notes-container">
        {notes.map((note) => (
          <NoteItem
            key={note.id}
            note={note}
            onDelete={onDelete}
          />
        ))}
      </div>
    </div>
  );
}
