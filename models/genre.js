module.exports = function (sequelize, DataTypes) {
	return sequelize.define(
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
};
