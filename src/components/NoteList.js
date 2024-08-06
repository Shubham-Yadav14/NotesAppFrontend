import React, { useEffect, useState } from "react";
import Note from "./Note";
import Narrow from "./Common/Narrow";
import { useAuth0 } from "@auth0/auth0-react";

const NoteList = ({ notes, onDelete, onEdit, onDragEnd }) => {
  const { user, isAuthenticated } = useAuth0();
  const [filteredNotes, setFilteredNotes] = useState([]);
  const [selectedColor, setSelectedColor] = useState("");
  const [groupFilter, setGroupFilter] = useState("");
  const [groupByData, setGroupByData] = useState([]);
  const [selectedGroupBy, setSelectedGroupBy] = useState(false);

  useEffect(() => {
    if (isAuthenticated && user) {
      let filtered = notes.filter((note) => note.email === user.email);

      if (selectedColor) {
        filtered = filtered.filter((note) => note.color === selectedColor);
      }

      if (groupFilter) {
        filtered = filtered.filter((note) =>
          note.group.toLowerCase().includes(groupFilter.toLowerCase())
        );
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

  const handleGroupBy = () => {
    if (!selectedGroupBy) {
      const groupedData = filteredNotes.reduce((acc, note) => {
        if (!acc[note.group]) {
          acc[note.group] = {
            count: 0,
            notes: [],
          };
        }
        acc[note.group].count += 1;
        acc[note.group].notes.push(note);
        return acc;
      }, {});

      const groupedArray = Object.keys(groupedData).map((group) => ({
        group,
        count: groupedData[group].count,
        notes: groupedData[group].notes,
      }));

      console.log(groupedArray);
      setGroupByData(groupedArray);
      setSelectedGroupBy(true);
    } else {
      setSelectedGroupBy(false);
    }
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

        <button className="border p-2 rounded-md" onClick={handleGroupBy}>
          Group Notes
        </button>
      </div>
      {selectedGroupBy !== true ? (
        <div className="flex flex-wrap">
          {filteredNotes.map((note) => (
            <Note
              key={note._id}
              note={note}
              onDelete={onDelete}
              onEdit={onEdit}
              onDragEnd={onDragEnd}
            />
          ))}
        </div>
      ) : (
        <div className="flex">
          {groupByData.map((group) => (
            <div key={group.group} className="border-2 m-3 p-3 w-auto">
              <h2>{group.group}</h2>
              {group.notes.map((note) => (
                <Note
                  key={note._id}
                  note={note}
                  onDelete={onDelete}
                  onEdit={onEdit}
                  onDragEnd={onDragEnd}
                />
              ))}
            </div>
          ))}
        </div>
      )}
    </Narrow>
  );
};

export default NoteList;
