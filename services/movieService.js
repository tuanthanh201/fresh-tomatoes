const movieRepo = require('../repositories/movieRepo');

const getMovie = (uuid) => {
	return movieRepo.findOne({ where: { uuid } });
};

const getAllMovies = () => {
	return movieRepo.findAll({ include: 'genres' });
};

const createMovie = (movie) => {
	return movieRepo.createOne(movie);
};

module.exports = {
	getMovie,
	getAllMovies,
	createMovie,
};
