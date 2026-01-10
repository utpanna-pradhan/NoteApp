import { useState } from "react";
import Loader from "./Component/Loader";
import NoteForm from "./Component/NoteForm";
import NoteList from "./Component/NoteList";
import EmptyState from "./Component/EmptyState";
import "./App.css";

function App() {
  const [notes, setNotes] = useState([]);
  //store all the notes,start with empty array,all new notes will be added here
  const [loading, setLoading] = useState(false);
  //controlss loading..


  const addNote = (note) => {
    setLoading(true);
    //clicks on add note the loading is true
    setTimeout(() => {
      setNotes((prevNotes) => [...prevNotes, note]);
      setLoading(false);
    }, 1000);
    //after 1 sec new note is added to the notelist and loading become false
  };

  const deleteNote = (id) => {
    setNotes((prevNotes) =>
      prevNotes.filter((note) => note.id !== id)
    );
  };
  //delete note with matching id

  return (
    <>
      <h1 className="mainhead">Notes App</h1>

      <NoteForm onAddNote={addNote} />


      {loading ? (
        <Loader />
        // If loading is true show Loader
      ) : notes.length === 0 ? (
        <EmptyState />
        //else if no note show EmptyState
      ) : (
        <NoteList notes={notes} onDelete={deleteNote} />
        //else show notelist
      )}
    </>
  );
}

export default App;
