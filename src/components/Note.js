import React from 'react';

const Note = ({ note, onDelete, onEdit, onDragEnd }) => {


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
