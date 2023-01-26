module.exports = function (sequelize, DataTypes) {
	const Movie = sequelize.define(
		'Movie',
		{
			uuid: {
				type: DataTypes.UUID,
				allowNull: false,
				defaultValue: DataTypes.UUIDV4,
				primaryKey: true,
			},
			primaryTitle: {
				type: DataTypes.STRING,
				allowNull: false,
			},
			originalTitle: {
				type: DataTypes.STRING,
				allowNull: false,
			},
			type: {
				type: DataTypes.STRING,
				allowNull: false,
			},
			isAdult: {
				type: DataTypes.BOOLEAN,
				allowNull: false,
			},
			releasedYear: {
				type: DataTypes.STRING,
				allowNull: false,
			},
			runtimeMinutes: {
				type: DataTypes.INTEGER,
				allowNull: false,
			},
		},
		{
			tableName: 'movies',
			modelName: 'Movie',
		}
	);

	Movie.associate = (db) => {
		// n:m relationship
		Movie.belongsToMany(db.Genre, { through: 'movieGenre' });
	};

	return Movie;
};
