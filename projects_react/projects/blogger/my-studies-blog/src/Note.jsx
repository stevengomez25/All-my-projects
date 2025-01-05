import React from 'react';
import './Note.css'; // Importa los estilos

const Note = ({ title, content }) => {
  return (
    <div className="note">
      <h3 className="note-title">{title}</h3>
      <p className="note-content">{content}</p>
    </div>
  );
};

export default Note;
