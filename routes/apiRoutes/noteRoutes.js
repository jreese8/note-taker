const router = require("express").Router();
const { editNote, findById, createNewNote, deleteNote, } = require("../../lib/notes");
const { notes } = require("../../db/db");

router.get("/notes", (req, res) => {
  
  res.json(notes);
});

router.delete("/notes/:id", (req, res) => {
  const notes = findById(req.params.id, notes);
  deleteNote(notes);
    res.json();
});

router.post("/notes", (req, res) => {
  
  req.body.id = notes.length.toString();

  if (req.body) {
    const note = createNewNote(req.body, notes);
    res.json(note);
  }
  else {
    editNote(req.body, notes);
  }
});

module.exports = router;