const StatusError = require('../errors');
const { Genre, User, Review, Favourite } = require('../models');
const movieRepo = require('../repositories/movieRepo');
const utilRepo = require('../repositories/utilRepo');
const { Op, QueryTypes } = require('sequelize');

const LIMIT = 19;

const getMoviesQuery = (movies, limit) => {
	let hasMore = false;
	if (movies.length === limit) {
		movies.pop();
		hasMore = true;
	}
	return { movies, hasMore };
};

const getLimit = (limit) => {
	return limit ? parseInt(limit, 10) : LIMIT;
};

const getMovieById = async (uuid) => {
	const movie = await movieRepo.findOne({
		where: { uuid },
		include: [
			{
				model: Favourite,
			},
			{
				model: Review,
			},
		],
	});
	if (!movie) {
		throw new StatusError([{ msg: "Movie doesn't exist" }], 404);
	}
	return movie;
};

const getMoviesByName = async (title) => {
	if (!title) {
		throw new StatusError([{ msg: 'Empty title' }], 404);
	}
	return await utilRepo.executeQuery(
		`SELECT uuid, title FROM movies WHERE title LIKE '%${title}%' LIMIT ${LIMIT}`,
		{ type: QueryTypes.SELECT }
	);
};

/**
 * @param query req.query
 */
const getPopularMovies = async (query) => {
	const { sort, limit, popularity, uuid } = query;
	const moviesLimit = getLimit(limit);
	const descending = !(sort === 'ASC');
	try {
		const movies = await movieRepo.findAll({
			where: popularity
				? {
						[Op.or]: [
							{
								popularity: {
									[descending ? Op.lt : Op.gt]: popularity,
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
											[descending ? Op.lt : Op.gt]: uuid,
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
				['popularity', sort ?? 'DESC'],
				['uuid', sort ?? 'DESC'],
			],
			limit: moviesLimit,
		});
		return getMoviesQuery(movies, moviesLimit);
	} catch (error) {
		throw new StatusError([{ msg: error.message }], 500);
	}
};

const getTrendingMovies = async (query) => {
	const { sort, limit, ratingAverage, uuid } = query;
	const moviesLimit = getLimit(limit);
	const descending = !(sort === 'ASC');

	try {
		const movies = await movieRepo.findAll({
			where: ratingAverage
				? {
						[Op.or]: [
							{
								ratingAverage: {
									[descending ? Op.lt : Op.gt]: ratingAverage,
								},
							},
							{
								[Op.and]: [
									{
										ratingAverage: {
											[Op.eq]: ratingAverage,
										},
									},
									{
										uuid: {
											[descending ? Op.lt : Op.gt]: uuid,
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
				['ratingAverage', sort ?? 'DESC'],
				['uuid', sort ?? 'DESC'],
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
	getMoviesByName,
	getPopularMovies,
	getTrendingMovies,
	createMovie,
	createMovies,
};
