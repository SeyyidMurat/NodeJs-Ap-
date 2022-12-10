const mongoose = require("mongoose");

const { Schema } = mongoose;

const learnedWordSchema = new Schema(
	{
		wordType: {
			type: String,
			required: true,
		},
		word: {
			type: String,
			required: true,
		},
		meaning: {
			type: String,
			required: true,
		},
		pronunciation: {
			type: String,
			required: true,
		},
		example: {
			type: String,
			required: true,
		},
		userToken: {
			type: String,
			required: true,
		},
	},
	{ timestamps: true }
);
const LearnedWord = mongoose.model("learnedWord", learnedWordSchema);

module.exports = LearnedWord;
