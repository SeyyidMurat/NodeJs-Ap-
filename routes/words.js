const express = require("express");
const router = express.Router();
const { addWord, getWords, deleteWord, updateWord } = require("../controller/wordControllers");
const auth = require("../middleware/auth");
//Create words
router.post("/add", auth, addWord);

//Delete word
router.delete("/:id", auth, deleteWord);

//Updateword
router.put("/update/:id", auth, updateWord);

//Get all words
router.get("/", auth, getWords);

module.exports = router;
