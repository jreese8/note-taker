const router = require("express").Router();
const { editNote, findById, createNewNote, deleteNote, } = require("../../lib/notes");
const { notes } = require("../../db/db");
const { v4: uuidv4 } = require('uuid'); //from https://www.npmjs.com/package/uuid

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

  if (!req.body.id) {
    req.body.id = uuidv4(); //use this npm package to make ids for each note
    createNewNote(req.body, notes);
  }
  else {
    editNote(req.body, notes);
  }
  res.json(req.body);
});

module.exports = router;