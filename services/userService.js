const bcrypt = require('bcryptjs');
const StatusError = require('../errors');

const userRepo = require('../repositories/userRepo');
const { generateToken } = require('./jwtService');

const getUserById = async (uuid) => {
	const user = await userRepo.findOne({ where: { uuid } });
	if (!user) {
		throw new StatusError([{ msg: "User doesn't exist" }], 404);
	}
	return user;
};

const getAllUsers = () => {
	return userRepo.findAll({ include: 'movies' });
};

const updateUserProfile = async (uuid, profile) => {
	const res = await userRepo.update({ profile }, { where: { uuid } });
	if (res[0] != 1) {
		throw new StatusError([{ msg: "User doesn't exist" }], 401);
	}
};

const login = async (email, password) => {
	const user = await userRepo.findOne({ where: { email } });
	if (!user) {
		throw new StatusError([{ msg: 'Invalid credentials' }], 401);
	}

	const passwordMatches = await bcrypt.compare(password, user.password);
	if (!passwordMatches) {
		throw new StatusError([{ msg: 'Invalid credentials' }], 401);
	}

	const payload = {
		user: {
			uuid: user.uuid,
		},
	};

	const token = await generateToken(payload);

	return { user, token };
};

const register = async ({
	email,
	username,
	password,
	profile,
	role = 'User',
}) => {
	const emailExists = !!(await userRepo.findOne({ where: { email } }));
	if (emailExists) {
		throw new StatusError([{ msg: 'Email already registered' }], 400);
	}

	let user = {
		email,
		username,
		profile,
		role,
	};
	const salt = await bcrypt.genSalt(10);
	user.password = await bcrypt.hash(password, salt);
	user = await userRepo.createOne(user);

	const payload = {
		user: {
			uuid: user.uuid,
		},
	};

	const token = await generateToken(payload);

	return { user, token };
};

module.exports = {
	getUserById,
	getAllUsers,
	login,
	register,
	updateUserProfile,
};
