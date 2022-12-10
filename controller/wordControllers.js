const Word = require("../models/Word");
const jwt = require("jsonwebtoken");

const addWord = async (req, res) => {
	const token = req.headers.authorization.split(" ")[1];
	const verified = jwt.verify(token, process.env.JWT);
	try {
		await Word.create({ ...req.body, userToken: verified.user });
		res.json({ message: "Succed Add Word" });
	} catch (err) {
		console.error(err);
		res.status(400).json({ message: err });
	}
};

const getWords = async (req, res) => {
	const token = req.headers.authorization.split(" ")[1];
	const verifiedToken = jwt.verify(token, process.env.JWT);
	try {
		const words = await Word.find({ userToken: verifiedToken.user });
		res.json(words);
	} catch (err) {
		console.error(err);
		res.status(400).json({ message: err });
	}
};

const deleteWord = async (req, res) => {
	try {
		await Word.findByIdAndDelete(req.params.id);

		res.status(200).json({ message: "The word has been deleted!" });
	} catch (error) {
		console.error(error);
		res.status(500).json({ message: "server error" });
	}
};

const updateWord = async (req, res) => {
	try {
		await Word.findByIdAndUpdate(req.params.id, { $set: req.body });

		res.status(200).json({ message: "The word success changed" });
	} catch (error) {
		console.error(error);
		res.status(500).json({ message: "server error" });
	}
};

module.exports = {
	addWord,
	getWords,
	deleteWord,
	updateWord,
};
