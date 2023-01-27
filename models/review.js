module.exports = function (sequelize, DataTypes) {
	const Review = sequelize.define(
		'Review',
		{
			uuid: {
				type: DataTypes.UUID,
				defaultValue: DataTypes.UUIDV4,
				primaryKey: true,
			},
			content: {
				type: DataTypes.TEXT,
				allowNull: false,
			},
			rating: {
				type: DataTypes.INTEGER,
				allowNull: false,
				validate: {
					min: {
						args: [1],
						msg: 'rating must be at least 1',
					},
					max: {
						args: [10],
						msg: 'rating must be at most 10',
					},
				},
			},
		},
		{
			tableName: 'reviews',
			modelName: 'Review',
		}
	);

	Review.associate = (db) => {
		Review.belongsTo(db.User);
		Review.belongsTo(db.Movie);
	};

	return Review;
};
