const { sequelize } = require('../models');

const executeQuery = (query, option) => {
	return sequelize.query(query, option);
};

module.exports = {
	executeQuery,
};
