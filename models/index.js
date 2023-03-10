const fs = require('fs');
const path = require('path');
const { Sequelize } = require('sequelize');
const basename = path.basename(__filename);
const db = {};

// REPLACE ENV VARIABLES WITH YOUR MYSQL INFO
const sequelize = new Sequelize(
	process.env.MYSQL_DATABASE,
	process.env.MYSQL_USERNAME,
	process.env.MYSQL_PASSWORD,
	{
		host: 'localhost',
		dialect: 'mysql',
		// Change this to true if wanna show queries and arguments
		// logging: console.log,
		logQueryParameters: true,
		logging: false,
		// logging: (msg) => {
		// 	var stream = fs.createWriteStream('append.txt', { flags: 'a' });
		// 	stream.write(msg + '\n');
		// 	stream.end();
		// },
	}
);

fs.readdirSync(__dirname)
	.filter((file) => {
		return (
			file.indexOf('.') !== 0 && file !== basename && file.slice(-3) === '.js'
		);
	})
	.forEach((file) => {
		const model = require(path.join(__dirname, file))(
			sequelize,
			Sequelize.DataTypes
		);
		db[model.name] = model;
	});

Object.keys(db).forEach((modelName) => {
	if (db[modelName].associate) {
		db[modelName].associate(db);
	}
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
