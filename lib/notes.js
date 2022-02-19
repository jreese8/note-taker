const fs = require("fs");
const path = require("path");

  function findById(id, notesArray) {
    const result = notesArray.filter(note => note.id === id)[0];
    return result;
  }

  function createNewNote(note, notesArray) {
    notesArray.push(note);
    fs.writeFileSync(
      path.join(__dirname, '../db/db.json'),
      JSON.stringify({ notes: notesArray }, null, 2)
    );
    
  };

  function editNote(editedNote, notesArray) {
    const result = notesArray.filter(note => note.id === editedNote.id);

    notesArray.splice(result, 1);

    notesArray.splice(result, 0, editedNote);

    fs.writeFileSync(
      path.join(__dirname, '../db/db.json'),
      JSON.stringify({ notes: notesArray }, null, 2)
    );
    
  };

  function deleteNote(note, notesArray) {

    const result = notesArray.index(note);
    notesArray.splice(result, 1);

    fs.writeFileSync(
      path.join(__dirname, '../db/db.json'),
      JSON.stringify({ notes: notesArray }, null, 2)
    );
    
  };

  module.exports = {
    editNote,
    findById,
    createNewNote,
    deleteNote
  };