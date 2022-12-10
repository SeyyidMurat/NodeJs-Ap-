const mongoose = require("mongoose");

const { Schema } = mongoose;

const wordSchema = new Schema(
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
const Word = mongoose.model("word", wordSchema);

module.exports = Word;
