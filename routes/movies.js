const express = require('express');
const router = express.Router();
const movieService = require('../services/movieService');
const { defaultErrorHandler } = require('./utils');

const auth = require('../middleware/auth');

/**
 * Get popular movies
 * @param sort either 'ASC' or 'DESC'
 * @param limit limit
 * @param popularity popularity cursor
 * @param uuid uuid cursor
 */
router.get('/popular', async (req, res) => {
	try {
		// #swagger.tags = ['movie']
		const result = await movieService.getPopularMovies(req.query);
		return res.json(result);
	} catch (error) {
		return defaultErrorHandler(res, error);
	}
});

/**
 * Get trending movies
 * @param sort either 'ASC' or 'DESC'
 * @param limit limit
 * @param ratingAverage ratingAverage cursor
 * @param uuid uuid cursor
 */
router.get('/trending', async (req, res) => {
	try {
		// #swagger.tags = ['movie']
		const result = await movieService.getTrendingMovies(req.query);
		return res.json(result);
	} catch (error) {
		return defaultErrorHandler(res, error);
	}
});

// Get movie by id
router.get('/:movieId', async (req, res) => {
	try {
		// #swagger.tags = ['movie']
		const movie = await movieService.getMovieById(req.params.movieId);
		return res.json(movie);
	} catch (error) {
		return defaultErrorHandler(res, error);
	}
});

module.exports = router;
