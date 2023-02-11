module.exports = function (sequelize, DataTypes) {
	const Movie = sequelize.define(
		'Movie',
		{
			uuid: {
				type: DataTypes.UUID,
				defaultValue: DataTypes.UUIDV4,
				primaryKey: true,
			},
			title: {
				type: DataTypes.STRING,
				allowNull: false,
				validate: {
					min: {
						args: [1],
						msg: 'Title must not be empty',
					},
				},
			},
			overview: {
				type: DataTypes.TEXT,
				allowNull: false,
				validate: {
					min: {
						args: [1],
						msg: 'Overview must not be empty',
					},
				},
			},
			poster: {
				type: DataTypes.STRING,
				allowNull: true,
			},
			backdrop: {
				type: DataTypes.STRING,
				allowNull: true,
			},
			adult: {
				type: DataTypes.BOOLEAN,
				allowNull: false,
			},
			// YYYY-MM-DD format
			releasedDate: {
				type: DataTypes.DATEONLY,
				allowNull: false,
				validate: {
					isAfter: {
						args: ['1000-01-01'],
						msg: 'releasedDate must be before 1000-01-01',
					},
					isBefore: {
						args: ['2099-12-31'],
						msg: 'releasedDate must be after 2099-12-31',
					},
				},
			},
			runtime: {
				type: DataTypes.INTEGER,
				allowNull: false,
				validate: {
					min: {
						args: [0],
						msg: 'Runtime must be at least 0',
					},
				},
			},
			ratingCount: {
				type: DataTypes.INTEGER,
				allowNull: false,
				validate: {
					min: {
						args: [0],
						msg: 'ratingCount must be at least 0',
					},
				},
			},
			ratingAverage: {
				type: DataTypes.DECIMAL(3, 2),
				allowNull: false,
				validate: {
					min: {
						args: [0],
						msg: 'ratingAverage must be at least 0',
					},
				},
			},
			popularity: {
				type: DataTypes.INTEGER,
				allowNull: false,
				validate: {
					min: {
						args: [0],
						msg: 'popularity must be at least 0',
					},
				},
			},
		},
		{
			tableName: 'movies',
			modelName: 'Movie',
		}
	);

	Movie.associate = (db) => {
		Movie.belongsToMany(db.Genre, { through: 'movieGenres' });
		Movie.belongsToMany(db.User, { through: db.Favourite });
		Movie.hasMany(db.Review);
	};

	return Movie;
};
