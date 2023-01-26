const movieRepo = require('../repositories/movieRepo');

const getMovieById = (uuid) => {
	return movieRepo.findOne({ where: { uuid } });
};

const getAllMovies = () => {
	return movieRepo.findAll({ include: 'genres' });
};

const createMovie = (movie) => {
	return movieRepo.createOne(movie);
};

const createMovies = (movies) => {
	return movieRepo.createMany(movies);
};

module.exports = {
	getMovieById,
	getAllMovies,
	createMovie,
	createMovies,
};
