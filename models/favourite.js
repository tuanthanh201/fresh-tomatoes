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

	return Favourite;
};
