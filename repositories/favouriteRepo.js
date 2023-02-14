const { Favourite } = require('../models');

const findOne = (option) => {
	return Favourite.findOne(option);
};

const findAll = (option) => {
	return Favourite.findAll(option);
};

const createOne = (favourite) => {
	return Favourite.create(favourite);
};

const createMany = (favourites) => {
	return Favourite.bulkCreate(favourites);
};

module.exports = {
	findOne,
	findAll,
	createOne,
	createMany,
};
