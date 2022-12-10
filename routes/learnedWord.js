const express = require("express");
const router = express.Router();
const { getLearnedWord, deleteLearnedWord, addLearnedWord } = require("../controller/learnedControllers");
const auth = require("../middleware/auth");

//add

router.post("/add", auth, addLearnedWord);

//login
router.get("/", auth, getLearnedWord);

//delete
router.delete("/delete/:id", auth, deleteLearnedWord);

module.exports = router;
