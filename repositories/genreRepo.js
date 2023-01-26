const { Genre } = require('../models');

const findOne = (option) => {
	return Genre.findOne(option);
};

const findAll = (option) => {
	return Genre.findAll(option);
};

const createOne = (Genre) => {
	return Genre.create(Genre);
};

module.exports = {
	findOne,
	findAll,
	createOne,
};
