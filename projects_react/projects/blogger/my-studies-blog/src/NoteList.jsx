import React from 'react';
import Note from './Note'; // Importa el componente Note

const NoteList = ({ notes }) => {
  return (
    <div className="note-list">
      {notes.map((note, index) => (
        <Note key={index} title={note.title} content={note.content} />
      ))}
    </div>
  );
};

export default NoteList;
