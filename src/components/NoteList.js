import React, { useEffect, useState } from 'react';
import Note from './Note';
import Narrow from './Common/Narrow';
import { useAuth0 } from "@auth0/auth0-react";

const NoteList = ({ notes, onDelete, onEdit, onDragEnd }) => {
  const { user, isAuthenticated } = useAuth0();
  const [filteredNotes, setFilteredNotes] = useState([]);
  const [selectedColor, setSelectedColor] = useState('');
  const [groupFilter, setGroupFilter] = useState('');

  useEffect(() => {
    if (isAuthenticated && user) {
      let filtered = notes.filter(note => note.email === user.email);

      if (selectedColor) {
        filtered = filtered.filter(note => note.color === selectedColor);
      }

      if (groupFilter) {
        filtered = filtered.filter(note => note.group.toLowerCase().includes(groupFilter.toLowerCase()));
      }

      setFilteredNotes(filtered);
    }
  }, [user, notes, selectedColor, groupFilter, isAuthenticated]);

  const handleColorChange = (event) => {
    setSelectedColor(event.target.value);
  };

  const handleGroupChange = (event) => {
    setGroupFilter(event.target.value);
  };

  console.log("Filtered Notes:", filteredNotes); // Debugging log

  return (
    <Narrow>
      <div className="filter-controls">
        <select onChange={handleColorChange} value={selectedColor}>
          <option value="">All Colors</option>
          <option value="bg-red-500">Red</option>
          <option value="bg-green-500">Green</option>
          <option value="bg-blue-500">Blue</option>
          <option value="bg-yellow-500">Yellow</option>
          <option value="bg-purple-500">Purple</option>
        </select>

        <input
          type="text"
          placeholder="Search by Group"
          value={groupFilter}
          onChange={handleGroupChange}
          className="p-2 m-2 border"
        />
      </div>

      <div className="flex flex-wrap">
        {filteredNotes.map(note => (
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
