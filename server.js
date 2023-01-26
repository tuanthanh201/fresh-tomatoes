require('dotenv').config();
const fs = require('fs');
const _ = require('lodash');
const express = require('express');
const { sequelize } = require('./models');
const { createMovies } = require('./services/movieService');
const { createGenres } = require('./services/genreService');

const clearTable = async () => {
	try {
		await sequelize.query('SET FOREIGN_KEY_CHECKS = 0');
		await sequelize.sync({ force: true });
		await sequelize.query('SET FOREIGN_KEY_CHECKS = 1');
		console.log('Database synchronised');
	} catch (error) {
		throw error;
	}
};

const main = async () => {
	try {
		await sequelize.authenticate();
		console.log('Connected to MySql...');
		await clearTable();

		var genres = JSON.parse(fs.readFileSync('./data/genres.json', 'utf8'));
		var movies = JSON.parse(fs.readFileSync('./data/movies.json', 'utf8'));
		await createGenres(genres);
		await createMovies(movies);
		console.log('Populated database');
	} catch (error) {
		throw error;
	}

	const app = express();

	const PORT = process.env.PORT || 8000;
	app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
	return app;
};

main();
