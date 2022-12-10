const jwt = require("jsonwebtoken");

const auth = (req, res, next) => {
	try {
		let token;

		if (req.headers.authorization && req.headers.authorization.startsWith("Beare")) {
			token = req.headers.authorization.split(" ")[1];
		}

		if (!token) {
			res.status(401).json({ errorMessage: "dont token try again" });
		}
		const verified = jwt.verify(token, process.env.JWT);

		req.user = verified.user;

		next();
	} catch (error) {
		console.log(error);
		res.status(401).json({ errorMessage: "dont auth" });
	}
};

module.exports = auth;
