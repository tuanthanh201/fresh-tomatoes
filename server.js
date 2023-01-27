require('dotenv').config();
const express = require('express');
const { sequelize } = require('./models');

const main = async () => {
	try {
		await sequelize.authenticate();
		console.log('Connected to MySql...');
	} catch (error) {
		throw new Error(error.message);
	}

	const app = express();

	const PORT = process.env.PORT || 8000;
	app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
	return app;
};

main();
