const { Review } = require('../models');

const findOne = (option) => {
	return Review.findOne(option);
};

const findAll = (option) => {
	return Review.findAll(option);
};

const createOne = (review) => {
	return Review.create(review);
};

const createMany = (reviews) => {
	return Review.bulkCreate(reviews);
};

module.exports = {
	findOne,
	findAll,
	createOne,
	createMany,
};
