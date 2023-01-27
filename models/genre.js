module.exports = function (sequelize, DataTypes) {
	const Genre = sequelize.define(
		'Genre',
		{
			uuid: {
				type: DataTypes.UUID,
				defaultValue: DataTypes.UUIDV4,
				primaryKey: true,
			},
			name: {
				type: DataTypes.STRING,
				allowNull: false,
				isUnique: true,
				validate: {
					min: {
						args: [1],
						msg: 'Name must not be empty',
					},
				},
			},
		},
		{
			tableName: 'genres',
			modelName: 'Genre',
		}
	);

	Genre.associate = (db) => {
		Genre.belongsToMany(db.Movie, { through: 'movieGenres' });
	};

	return Genre;
};
