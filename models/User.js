const mongoose = require("mongoose");

const { Schema } = mongoose;

const userSchema = new Schema({
	email: {
		type: String,
		required: true,
		unique: true,
	},
	passwordHash: {
		type: String,
		required: true,
	},
});
const User = mongoose.model("user", userSchema);

module.exports = User;
