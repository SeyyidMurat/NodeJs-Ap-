const mongoose = require('mongoose');

const connectDB = async () => {
	try {
		mongoose.connect(process.env.DATABASE_URL, {
			useNewUrlParser: true,
			useUnifiedTopology: true,
		});
		console.log('MongoDb connection SUCCESS');
	} catch (error) {
		console.error('MongoDB connection FAIL');
		process.exit(1);
	}
};

module.exports = connectDB;
