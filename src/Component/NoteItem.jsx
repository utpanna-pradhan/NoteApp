export default function NoteItem({ note, onDelete }) {
  return (
    <div style={{ border: "1px solid #ccc", margin: "10px 0", padding: "10px" }}>
      <h3>{note.title}</h3>
      {note.description && <p>{note.description}</p>}

      <button onClick={() => onDelete(note.id)}>
        Delete
      </button>
    </div>
  );
}
