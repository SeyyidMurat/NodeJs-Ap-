const express = require('express');
const connectDB = require('./config/db');
const cookieParser = require('cookie-parser');
const cors = require('cors');

require('dotenv').config();
connectDB();

const app = express();

app.use(cors());
app.use(express.json());
app.use(cookieParser());

app.get('/', (req, res) => {
	res.send('welcome');
});

app.use('/api/auth', require('./routes/user'));
app.use('/api/words', require('./routes/words'));
app.use('/api/learned-words', require('./routes/learnedWord'));
const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log('Server runnig'));
