module.exports = function (sequelize, DataTypes) {
	const User = sequelize.define(
		'User',
		{
			uuid: {
				type: DataTypes.UUID,
				defaultValue: DataTypes.UUIDV4,
				primaryKey: true,
			},
			username: {
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
			email: {
				type: DataTypes.STRING,
				allowNull: false,
				isUnique: true,
				validate: {
					isEmail: true,
				},
			},
			role: {
				type: DataTypes.STRING,
				allowNull: false,
				validate: {
					isIn: [['Admin', 'User']],
				},
			},
			profile: {
				type: DataTypes.TEXT,
				allowNull: false,
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
		User.belongsToMany(db.Movie, { through: db.Favourite });
		User.belongsToMany(db.Movie, { through: db.Review });
	};

	return User;
};
