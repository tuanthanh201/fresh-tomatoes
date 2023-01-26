const { Movie } = require('../models');

const findOne = (option) => {
	return Movie.findOne(option);
};

const findAll = (option) => {
	return Movie.findAll(option);
};

const createOne = (movie) => {
	return Movie.create(movie);
};

const createMany = (movies) => {
	return Movie.bulkCreate(movies);
};

module.exports = {
	findOne,
	findAll,
	createOne,
	createMany,
};
