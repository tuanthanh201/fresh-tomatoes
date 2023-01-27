module.exports = function (sequelize, DataTypes) {
	const User = sequelize.define(
		'User',
		{
			uuid: {
				type: DataTypes.UUID,
				defaultValue: DataTypes.UUIDV4,
				primaryKey: true,
			},
			email: {
				type: DataTypes.STRING,
				allowNull: false,
				isUnique: true,
				validate: {
					isEmail: true,
				},
			},
			password: {
				type: DataTypes.STRING,
				allowNull: false,
				min: {
					args: [6],
					msg: 'password must not be at least 6 characters long',
				},
			},
		},
		{
			tableName: 'users',
			modelName: 'User',
		}
	);

	User.associate = (db) => {
		User.belongsToMany(db.Movie, { through: 'favourites' });
		User.hasMany(db.Review);
	};

	return User;
};
