import React from 'react';
import { useAuth0 } from "@auth0/auth0-react";

const Note = ({ note, onDelete, onEdit, onDragEnd }) => {

  const { user, isAuthenticated} = useAuth0();

  const handleDragEnd = (e) => {
    onDragEnd(note._id, { x: e.clientX, y: e.clientY });
  };

  return (
    <div
      className={`p-4 m-2 rounded ${note.color}`}
      draggable
      onDragEnd={handleDragEnd}
    >
      <h3>{note.group}</h3>
      <p>{note.text}</p>
      <button onClick={() => onEdit(note)}>Edit</button>
      <button onClick={() => onDelete(note._id)}>Delete</button>
    </div>
  );
};

export default Note;
