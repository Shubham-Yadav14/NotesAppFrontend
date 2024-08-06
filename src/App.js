import React, { useState, useEffect } from "react";
import axios from "axios";
import NoteForm from "./components/NoteForm";
import NoteList from "./components/NoteList";
import "./App.css";
import { useAuth0 } from "@auth0/auth0-react";

const App = () => {
  const { loginWithRedirect, isAuthenticated, logout } = useAuth0();

  const [notes, setNotes] = useState([]);
  const [noteToEdit, setNoteToEdit] = useState(null);

  useEffect(() => {
    fetchNotes();
  }, []);

  const fetchNotes = async () => {
    const response = await axios.get("http://localhost:5000/api/notes");
    setNotes(response.data);
  };

  const addNote = async (note) => {
    const response = await axios.post("http://localhost:5000/api/notes", note);
    setNotes([...notes, response.data]);
  };

  const updateNote = async (id, updatedNote) => {
    const response = await axios.put(`http://localhost:5000/api/notes/${id}`, updatedNote);
    setNotes(notes.map((note) => (note._id === id ? response.data : note)));
  };

  const deleteNote = async (id) => {
    await axios.delete(`http://localhost:5000/api/notes/${id}`);
    setNotes(notes.filter((note) => note._id !== id));
  };

  const handleEdit = (note) => {
    setNoteToEdit(note);
  };

  const handleSave = (note) => {
    if (note._id) {
      updateNote(note._id, note);
    } else {
      addNote(note);
    }
    setNoteToEdit(null);
  };

  const handleDragEnd = (id, position) => {
    const note = notes.find((note) => note._id === id);
    updateNote(id, { ...note, position });
  };

  return (
    <div className="App">
      {!isAuthenticated && (
        <button onClick={(e) => loginWithRedirect()}>Login with Redirect</button>
      )}
      {isAuthenticated && (
        <>
          <button onClick={(e) => logout()}>Logout</button>
          <NoteForm onSave={handleSave} noteToEdit={noteToEdit} />
          <NoteList
            notes={notes}
            onDelete={deleteNote}
            onEdit={handleEdit}
            onDragEnd={handleDragEnd}
          />
        </>
      )}
    </div>
  );
};

export default App;
