const genreRepo = require('../repositories/genreRepo');

const getGenreById = (uuid) => {
	return genreRepo.findOne({ where: { uuid } });
};

const getGenreByName = (name) => {
	return genreRepo.findOne({ where: { name } });
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
