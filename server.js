require('dotenv').config();
const express = require('express');
const cors = require('cors');
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger.json');
const { syncDatabase } = require('./data/util');
const { sequelize } = require('./models');

const main = async () => {
	console.log('Hello');
	try {
		await sequelize.authenticate();
		console.log('Connected to MySql...');
		// await syncDatabase();
	} catch (error) {
		throw new Error(error.message);
	}

	const app = express();
	app.use(express.json({ extended: false }));
	app.use(cors());

	app.use('/api/users', require('./routes/users'));
	app.use('/api/movies', require('./routes/movies'));
	app.use('/api/favourites', require('./routes/favourites'));
	app.use('/api/reviews', require('./routes/reviews'));
	app.use('/api/docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

	const PORT = process.env.PORT || 8000;
	app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
	return app;
};

main();
