const bcrypt = require('bcryptjs');

const userRepo = require('../repositories/userRepo');
const { generateToken } = require('./jwtService');

const getUserById = (uuid) => {
	return userRepo.findOne({ where: { uuid } });
};

const getAllUsers = () => {
	return userRepo.findAll({ include: 'images' });
};

const login = async (email, password) => {
	const user = await userRepo.findOne({ where: { email } });
	if (!user) {
		throw new Error('Invalid credentials');
	}

	const passwordMatches = await bcrypt.compare(password, user.password);
	if (!passwordMatches) {
		throw new Error('Invalid credentials');
	}

	const payload = {
		user: {
			uuid: user.uuid,
		},
	};

	const token = await generateToken(payload);

	return { user, token };
};

const register = async (email, password) => {
	const emailExists = !!(await userRepo.findOne({ where: { email } }));
	if (emailExists) {
		throw new Error('Email is already registered');
	}

	let user = {
		email,
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
};
