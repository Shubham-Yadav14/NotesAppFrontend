import React from 'react';
import Note from './Note';
import Narrow from './Common/Narrow';

const NoteList = ({ notes, onDelete, onEdit, onDragEnd }) => {
  return (
    <Narrow>
      <div className="flex flex-wrap">
      {notes.map(note => (
        <Note
          key={note._id}
          note={note}
          onDelete={onDelete}
          onEdit={onEdit}
          onDragEnd={onDragEnd}
        />
      ))}
    </div>
    </Narrow>
  );
};

export default NoteList;
