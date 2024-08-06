import React, { useState, useEffect } from "react";
import Narrow from "../components/Common/Narrow";

const NoteForm = ({ onSave, noteToEdit }) => {
  const [note, setNote] = useState(
    noteToEdit || {
      group: "",
      text: "",
      color: "bg-blue-500",
      position: { x: 0, y: 0 },
    }
  );

  useEffect(() => {
    if (noteToEdit) {
      setNote(noteToEdit);
    }
  }, [noteToEdit]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNote({
      ...note,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(note);
    setNote({
      group: "",
      text: "",
      color: "bg-blue-500",
      position: { x: 0, y: 0 },
    });
  };

  return (
    <Narrow>
      <form onSubmit={handleSubmit} className="flex flex-col">
        <input
          type="text"
          name="group"
          value={note.group}
          onChange={handleChange}
          placeholder="Group"
          className="p-2 m-2 border"
        />
        <textarea
          name="text"
          value={note.text}
          onChange={handleChange}
          placeholder="Text"
          className="p-2 m-2 border"
        />
        <select
          name="color"
          value={note.color}
          onChange={handleChange}
          className="p-2 m-2 border"
        >
          <option value="bg-red-500">Red</option>
          <option value="bg-green-500">Green</option>
          <option value="bg-blue-500">Blue</option>
          <option value="bg-yellow-500">Yellow</option>
          <option value="bg-purple-500">Purple</option>
        </select>
        <button type="submit" className="p-2 m-2 bg-blue-500 text-white">
          Save
        </button>
      </form>
    </Narrow>
  );
};

export default NoteForm;
