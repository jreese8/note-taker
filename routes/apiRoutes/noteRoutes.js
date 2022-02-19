const router = require("express").Router();
const { findById, createNewNote, deleteNote, } = require("../../lib/notes");
const { notes } = require("../../db/db");
const { v4: uuidv4 } = require('uuid'); //from https://www.npmjs.com/package/uuid

router.get("/notes", (req, res) => {
  
  res.json(notes);
});

router.delete("/notes/:id", (req, res) => {
  const result = findById(req.params.id, notes);
  deleteNote(result);
  res.json();
});

router.post("/notes", (req, res) => { 
  req.body.id = uuidv4(); //use this npm package to make ids for each note
  createNewNote(req.body, notes);  
  res.json(note);
});

module.exports = router;