module.exports = function (sequelize, DataTypes) {
	return sequelize.define(
		'Genre',
		{
			uuid: {
				type: DataTypes.UUID,
				allowNull: false,
				defaultValue: DataTypes.UUIDV4,
				primaryKey: true,
			},
			genres: {
				type: DataTypes.STRING,
				allowNull: false,
			},
		},
		{
			tableName: 'genres',
			modelName: 'Genre',
		}
	);
};
