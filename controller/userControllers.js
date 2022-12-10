const User = require("../models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const register = async (req, res) => {
	try {
		const { email, password } = req.body;
		const existingUser = await User.findOne({ email });
		if (existingUser) {
			return res.status(400).json({ errorMessage: "an account with this email already exists" });
		}

		const salt = await bcrypt.genSalt();
		const passwordHash = await bcrypt.hash(password, salt);

		const newUser = new User({ email, passwordHash });
		await newUser.save();

		res.status(200).json({ message: "Success Register" });
	} catch (error) {
		console.log(error);
		res.status(500).send();
	}
};

const login = async (req, res) => {
	try {
		const { email, password } = req.body;
		if (!email || !password) {
			return res.status(400).json({ errorMessage: "Please enter all required fields." });
		}

		const existingUser = await User.findOne({ email });
		if (!existingUser) {
			return res.status(401).json({ errorMessage: "Wrong email or password." });
		}
		const passwordCorret = await bcrypt.compare(password, existingUser.passwordHash);
		if (!passwordCorret) {
			return res.status(401).json({ errorMessage: "Wrong password try again." });
		}

		const token = jwt.sign(
			{
				user: existingUser._id,
			},
			process.env.JWT
		);
		res.status(200).json({ success: true, token });
	} catch (error) {
		console.log(error);
		res.status(500).send();
	}
};

module.exports = {
	login,
	register,
};
