const StatusError = require('../errors');
const movieRepo = require('../repositories/movieRepo');

const getMovieById = async (uuid) => {
	const movie = await movieRepo.findOne({ where: { uuid } });
	if (!movie) {
		throw new StatusError([{ msg: "Movie doesn't exist" }], 404);
	}
	return movie;
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
