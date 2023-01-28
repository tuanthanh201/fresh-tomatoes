const express = require('express');
const router = express.Router();
const movieService = require('../services/movieService');
const { defaultErrorHandler } = require('./utils');

const auth = require('../middleware/auth');

// Get all movies
router.get('/all', async (req, res) => {
	try {
		const movies = await movieService.getAllMovies();
		return res.json(movies);
	} catch (error) {
		return defaultErrorHandler(res, error);
	}
});

// Get movie by id
router.get('/:movieId', async (req, res) => {
	try {
		const movie = await movieService.getMovieById(req.params.movieId);
		return res.json(movie);
	} catch (error) {
		return defaultErrorHandler(res, error);
	}
});

module.exports = router;
