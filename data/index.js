require('dotenv').config();
const fs = require('fs');
const { sequelize } = require('../models');
const { syncDatabase } = require('./util');
const { createMovies, createMovie } = require('../services/movieService');
const { createGenres, getGenreByName } = require('../services/genreService');

sequelize
	.authenticate()
	.then(async () => {
		await syncDatabase();
		var genres = JSON.parse(fs.readFileSync('./data/genres.json', 'utf8'));
		var movies = JSON.parse(fs.readFileSync('./data/movies.json', 'utf8'));
		await createGenres(genres);
		// much slower than before, but well :v
		for (const movie of movies) {
			const createdMovie = await createMovie(movie);
			for (const genre of movie.genres) {
				const foundGenre = await getGenreByName(genre);
				await createdMovie.addGenre(foundGenre.uuid);
			}
		}
		// await createMovies(movies);
		console.log('Populated database');
	})
	.catch((error) => {
		console.error('Fail to connect to MySQL');
		throw new Error(error.message);
	});
