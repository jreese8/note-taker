const fs = require("fs");
const path = require("path");

  function findById(id, notesArray) {
    const result = notesArray.filter(note => note.id === id)[0];
    return result;
  }

  function createNewNote(body, notesArray) {
    const note = body;
    notesArray.push(note);
    fs.writeFileSync(
      path.join(__dirname, '../db/db.json'),
      JSON.stringify({ notes: notesArray }, null, 2)
    );
    return note;
  };

  function deleteNote(noteDelete, notesArray) {

    const index = notesArray.findIndex(note => note.id === noteDelete);

    notesArray.splice(index, 1);

    fs.writeFileSync(
      path.join(__dirname, '../db/db.json'),
      JSON.stringify({ notes: notesArray }, null, 2)
    );
    
  };

  module.exports = {
    findById,
    createNewNote,
    deleteNote
  };