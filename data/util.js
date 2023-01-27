const { sequelize } = require('../models');

const syncDatabase = async () => {
	try {
		await sequelize.query('SET FOREIGN_KEY_CHECKS = 0');
		await sequelize.sync({ force: true });
		await sequelize.query('SET FOREIGN_KEY_CHECKS = 1');
		console.log('Database synchronised');
	} catch (error) {
		throw new Error(error.message);
	}
};

module.exports = {
	syncDatabase,
};
