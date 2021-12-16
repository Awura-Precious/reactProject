const express = require('express');

const {
	addReview,
	getAll,
	deleteReview,
	updateReview,
	getOne,
} = require('../controller/review.controller');

const router = express.Router();

//inserting a review
router.post('/', addReview);

//getting all the reviews
router.get('/', getAll);

//getting one of the reviews
router.get('/:id', getOne);

//updating data
router.put('/:id', updateReview);

//deleting a review
router.delete('/:id', deleteReview);

module.exports = router;
