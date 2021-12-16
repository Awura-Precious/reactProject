const { getRepository } = require('typeorm');

const schema = require('../entity/Review.entity');

exports.save = async (movieName, movieReview) => {
	const Review = getRepository(schema);
	const response = await Review.save({ title: movieName, review: movieReview });

	return response;
};

exports.getAll = async () => {
	const Review = getRepository(schema);
	const response = Review.find();
	return response;
};

exports.getOne = async (id) => {
	const Review = getRepository(schema);
	const response = await Review.findOne({ id: id });
	return response;
};

exports.updateOne = async (id, movieReview) => {
	const Review = getRepository(schema);
	const response = await Review.update({ id: id }, { review: movieReview });

	return response;
};

exports.deleteOne = async (id) => {
	const Review = getRepository(schema);
	const response = await Review.delete({ id: id });
	return response;
};
