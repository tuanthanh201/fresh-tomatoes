require('dotenv').config();
const fs = require('fs');
const { sequelize } = require('../models');
const { createMovies } = require('../services/movieService');
const { createGenres } = require('../services/genreService');

const syncDatabase = async () => {
	try {
		await sequelize.query('SET FOREIGN_KEY_CHECKS = 0');
		await sequelize.sync({ force: true });
		await sequelize.query('SET FOREIGN_KEY_CHECKS = 1');
		console.log('Database synchronised');
	} catch (error) {
		throw error;
	}
};

sequelize
	.authenticate()
	.then(async () => {
		await syncDatabase();
		console.log('Synced database');
		var genres = JSON.parse(fs.readFileSync('./data/genres.json', 'utf8'));
		var movies = JSON.parse(fs.readFileSync('./data/movies.json', 'utf8'));
		await createGenres(genres);
		await createMovies(movies);
		console.log('Populated database');
	})
	.catch(() => {
		console.error('Fail to connect to MySQL');
	});

module.exports = {
	syncDatabase,
};
