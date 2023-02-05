const StatusError = require('../errors');
const { Genre } = require('../models');
const movieRepo = require('../repositories/movieRepo');
const { Op } = require('sequelize');

const LIMIT = 19;

const getMoviesQuery = (movies, limit) => {
	let hasMore = false;
	if (movies.length === limit) {
		movies.pop();
		hasMore = true;
	}
	return { movies, hasMore };
};

const getMovieById = async (uuid) => {
	const movie = await movieRepo.findOne({ where: { uuid } });
	if (!movie) {
		throw new StatusError([{ msg: "Movie doesn't exist" }], 404);
	}
	return movie;
};

/**
 * @param query req.query
 */
const getPopularMovies = async (query) => {
	const { sort, limit, popularity, uuid } = query;
	const moviesLimit = limit ? parseInt(limit, 10) : LIMIT;
	const sortBy = sort === 'ascending' ? 'ASC' : 'DESC';
	try {
		const movies = await movieRepo.findAll({
			where: popularity
				? {
						[Op.or]: [
							{
								popularity: {
									[Op.lt]: popularity,
								},
							},
							{
								[Op.and]: [
									{
										popularity: {
											[Op.eq]: popularity,
										},
									},
									{
										uuid: {
											[Op.lt]: uuid,
										},
									},
								],
							},
						],
				  }
				: null,
			include: {
				model: Genre,
			},
			order: [
				['popularity', sortBy],
				['uuid', sortBy],
			],
			limit: moviesLimit,
		});
		return getMoviesQuery(movies, moviesLimit);
	} catch (error) {
		throw new StatusError([{ msg: error.message }], 500);
	}
};

const createMovie = (movie) => {
	return movieRepo.createOne(movie);
};

const createMovies = (movies) => {
	return movieRepo.createMany(movies);
};

module.exports = {
	getMovieById,
	getPopularMovies,
	createMovie,
	createMovies,
};
