require('dotenv').config();
const express = require('express');
const { sequelize } = require('./models');
const { createMovie } = require('./services/movieService');

const main = async () => {
	try {
		await sequelize.authenticate();
		console.log('Connected to MySql...');
		await sequelize.query('SET FOREIGN_KEY_CHECKS = 0');
		await sequelize.sync({ force: true });
		await sequelize.query('SET FOREIGN_KEY_CHECKS = 1');
		console.log('Database synchronised');
	} catch (error) {
		throw error;
	}

	try {
		const movie = await createMovie({
			primaryTitle: 'Avatar: The Way of Water',
			originalTitle: 'Avatar: The Way of Water',
			type: 'movie',
			isAdult: false,
			releasedYear: '2022',
			runtimeMinutes: 192,
		});
		console.log('Added movie');
	} catch (error) {
		throw error;
	}

	const app = express();

	const PORT = process.env.PORT || 8000;
	app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
	return app;
};

main();
