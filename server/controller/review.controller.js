const Review = require('../models/review.model');

exports.addReview = async (req, res) => {
	const { movieName, movieReview } = req.body;

	try {
		const response = await Review.save(movieName, movieReview);
		res.send(response);
	} catch (error) {
		console.log(error);
		res.send(error.message);
	}
};

exports.getAll = async (req, res) => {
	try {
		const response = await Review.getAll();
		res.send(response);
	} catch (error) {
		console.log(error);
		res.send(error.message);
	}
};

exports.getOne = async (req, res) => {
	const id = req.params.id;

	try {
		const response = await Review.getOne(id);
		res.send(response);
	} catch (error) {
		console.log(error);
		res.send(error.message);
	}
};

exports.updateReview = async (req, res) => {
	const { id, movieReview } = req.body;

	try {
		const response = await Review.updateOne(id, movieReview);
		res.send(response);
	} catch (error) {
		console.log(error);
		res.send(error.message);
	}
};

exports.deleteReview = async (req, res) => {
	const { id } = req.params;

	try {
		const response = await Review.deleteOne(id);
		res.send(response);
	} catch (error) {
		console.log(error);
		res.send(error.message);
	}
};
