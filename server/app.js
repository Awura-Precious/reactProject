const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const morgan = require('morgan');
const { createConnection } = require('typeorm');

const review = require('./routes/review.js');

const app = express();

dotenv.config();

app.use(cors());
app.use(morgan('dev'));
app.use(express.json());
app.use('/movie/review', review);

const PORT = process.env.PORT || 3000;

// Connect to the Database and start the application
createConnection()
	.then(() => {
		const DB_message = `Connection to database: ${process.env.DB_HOST} has been established`;
		console.log(DB_message);

		// start the application
		const message = `Server started on port: ${PORT}`;
		app.listen(PORT, () => console.log(message));
	})
	.catch((err) => {
		console.error('Error: Unable to connect to database: ', err.message);
		process.exit(1);
	});
