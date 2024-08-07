import React from "react";

const TrashNote = ({ note, onDelete }) => {
  return (
    <div className={`p-4 m-2 hover:cursor-move rounded max-w-[400px] ${note.color}`}>
      <h3 className="text-3xl">{note.group}</h3>
      <p className="text-xl mt-5">{note.text}</p>
      <div className="flex gap-10 mt-10">
        <button onClick={() => onDelete(note._id)}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" width="24" height="24">
            <path fill="#000000" d="M163.8 0L284.2 0c12.1 0 23.2 6.8 28.6 17.7L320 32l96 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 96C14.3 96 0 81.7 0 64S14.3 32 32 32l96 0 7.2-14.3C140.6 6.8 151.7 0 163.8 0zM32 128l384 0L394.8 467c-1.6 25.3-22.6 45-47.9 45l-245.8 0c-25.3 0-46.3-19.7-47.9-45L32 128zm192 64c-6.4 0-12.5 2.5-17 7l-80 80c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l39-39L200 408c0 13.3 10.7 24 24 24s24-10.7 24-24l0-134.1 39 39c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-80-80c-4.5-4.5-10.6-7-17-7z" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default TrashNote;