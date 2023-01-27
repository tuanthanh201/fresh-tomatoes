const express = require('express');
const router = express.Router();
const { login, register, getUserById } = require('../services/userService');
const { defaultErrorHandler, defaultRequestValidator } = require('./utils');
const { check } = require('express-validator');

const auth = require('../middleware/auth');

// Get my info
router.get('/profile', auth, async (req, res) => {
	try {
		const { uuid } = req.user;
		const user = await getUserById(uuid);
		return res.json(user);
	} catch (error) {
		return defaultErrorHandler(res, error);
	}
});

// Get user by id
router.get('/:userId', async (req, res) => {
	try {
		const user = await getUserById(req.params.userId);
		return res.json(user);
	} catch (error) {
		return defaultErrorHandler(res, error);
	}
});

// Login
router.post(
	'/login',
	[
		check('email', 'Email is required').isEmail(),
		check('password', 'Password must have 6 or more characters').isLength({
			min: 6,
		}),
	],
	async (req, res) => {
		try {
			defaultRequestValidator(req);

			const { email, password } = req.body;
			const response = await login(email, password);
			return res.json(response);
		} catch (error) {
			return defaultErrorHandler(res, error);
		}
	}
);

// Register
router.post(
	'/register',
	[
		check('email', 'Email is required').isEmail(),
		check('password', 'Password must have 6 or more characters').isLength({
			min: 6,
		}),
	],
	async (req, res) => {
		try {
			defaultRequestValidator(req);

			const { email, password } = req.body;
			const response = await register(email, password);
			res.json(response);
		} catch (error) {
			return defaultErrorHandler(res, error);
		}
	}
);

module.exports = router;
