const LearnedWord = require("../models/LearnedWord");
const jwt = require("jsonwebtoken");

const addLearnedWord = async (req, res) => {
	try {
		await LearnedWord.create(req.body);
		res.json({ message: "Succed Add Word" });
	} catch (err) {
		console.error(err);
		res.status(400).json({ message: err });
	}
};

const getLearnedWord = async (req, res) => {
	const token = req.headers.authorization.split(" ")[1];
	const verifiedToken = jwt.verify(token, process.env.JWT);

	try {
		const learnedWord = await LearnedWord.find({ userToken: verifiedToken.user });
		res.json(learnedWord);
	} catch (err) {
		console.error(err);
		res.status(400).json({ message: err });
	}
};

const deleteLearnedWord = async (req, res) => {
	try {
		await LearnedWord.findByIdAndDelete(req.params.id);

		res.status(200).json({ message: "The word has been deleted!" });
	} catch (error) {
		console.error(error);
		res.status(500).json({ message: "server error" });
	}
};

module.exports = {
	addLearnedWord,
	getLearnedWord,
	deleteLearnedWord,
};
