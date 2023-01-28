const express = require('express');
const router = express.Router();
const userService = require('../services/userService');
const { defaultErrorHandler, defaultRequestValidator } = require('./utils');
const { check } = require('express-validator');

const auth = require('../middleware/auth');

// Get my info
router.get('/profile', auth, async (req, res) => {
	try {
		const { uuid } = req.user;
		const user = await userService.getUserById(uuid);
		return res.json(user);
	} catch (error) {
		return defaultErrorHandler(res, error);
	}
});

router.put(
	'/update-profile',
	[auth, [check('profile', 'Profile must be a string').isString()]],
	async (req, res) => {
		try {
			defaultRequestValidator(req);
			const { uuid } = req.user;
			const { profile } = req.body;
			await userService.updateUserProfile(uuid, profile);
			return res.json({ profile });
		} catch (error) {
			return defaultErrorHandler(res, error);
		}
	}
);

// Get user by id
router.get('/:userId', async (req, res) => {
	try {
		const user = await userService.getUserById(req.params.userId);
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
			const response = await userService.login(email, password);
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
		check('profile', 'Profile must be a string').isString(),
	],
	async (req, res) => {
		try {
			defaultRequestValidator(req);

			const { email, password, profile } = req.body;
			const response = await userService.register({
				email,
				password,
				profile,
				// role: 'Admin',
			});
			res.json(response);
		} catch (error) {
			return defaultErrorHandler(res, error);
		}
	}
);

module.exports = router;
