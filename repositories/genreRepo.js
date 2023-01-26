const { Genre } = require('../models');

const findOne = (option) => {
	return Genre.findOne(option);
};

const findAll = (option) => {
	return Genre.findAll(option);
};

const createOne = (genre) => {
	return Genre.create(genre);
};

const createMany = (genres) => {
	return Genre.bulkCreate(genres);
};

module.exports = {
	findOne,
	findAll,
	createOne,
	createMany,
};
