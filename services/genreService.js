const StatusError = require('../errors');
const genreRepo = require('../repositories/genreRepo');

const getGenreById = async (uuid) => {
	const genre = await genreRepo.findOne({ where: { uuid } });
	if (!genre) {
		throw new StatusError([{ msg: "Genre doesn't exist" }], 404);
	}
	return genre;
};

const getGenreByName = async (name) => {
	const genre = await genreRepo.findOne({ where: { name } });
	if (!genre) {
		throw new StatusError([{ msg: "Genre doesn't exist" }], 404);
	}
	return genre;
};

const getAllGenres = () => {
	return genreRepo.findAll();
};

const createMovie = (genre) => {
	return genreRepo.createOne(genre);
};

const createGenres = (genres) => {
	return genreRepo.createMany(genres);
};

module.exports = {
	getGenreById,
	getGenreByName,
	getAllGenres,
	createMovie,
	createGenres,
};
