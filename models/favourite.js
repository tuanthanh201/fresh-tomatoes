module.exports = function (sequelize, DataTypes) {
	const Favourite = sequelize.define(
		'Favourite',
		{
			uuid: {
				type: DataTypes.UUID,
				defaultValue: DataTypes.UUIDV4,
				primaryKey: true,
			},
		},
		{
			tableName: 'favourites',
			modelName: 'Favourite',
		}
	);

	Favourite.associate = (db) => {
		Favourite.belongsTo(db.User);
		Favourite.belongsTo(db.Movie);
	};

	return Favourite;
};
