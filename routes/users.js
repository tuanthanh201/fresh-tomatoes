const express = require('express');
const router = express.Router();
const userService = require('../services/userService');
const { defaultErrorHandler, defaultRequestValidator } = require('./utils');
const { check } = require('express-validator');

const auth = require('../middleware/auth');

// Get my info
router.get('/profile', auth, async (req, res) => {
	// #swagger.tags = ['user']
	try {
		const { uuid } = req.user;
		const user = await userService.getUserById(uuid);
		/* #swagger.responses[200] = {
					description: 'Success',
					schema: { $ref: '#/definitions/User' }
		} */
		return res.json(user);
	} catch (error) {
		/* #swagger.responses[401] = {
					description: 'Unauthorized',
					schema: { $ref: '#/definitions/ErrorResponse' }
		} */
		/* #swagger.responses[404] = {
					description: 'Not found',
					schema: { $ref: '#/definitions/ErrorResponse' }
		} */
		return defaultErrorHandler(res, error);
	}
});

// Update profile
router.put(
	'/update-profile',
	[auth, [check('profile', 'Profile must be a string').isString()]],
	async (req, res) => {
		// #swagger.tags = ['user']
		try {
			defaultRequestValidator(req);
			const { uuid } = req.user;
			const { profile } = req.body;
			await userService.updateUserProfile(uuid, profile);
			return res.json({ profile });
		} catch (error) {
			/* #swagger.responses[400] = {
						description: 'Bad request',
						schema: { $ref: '#/definitions/ErrorResponse' }
			} */
			/* #swagger.responses[401] = {
						description: 'Unauthorized',
						schema: { $ref: '#/definitions/ErrorResponse' }
			} */
			/* #swagger.responses[404] = {
						description: 'Not found',
						schema: { $ref: '#/definitions/ErrorResponse' }
			} */
			return defaultErrorHandler(res, error);
		}
	}
);

// Get user by id
router.get('user/:userId', async (req, res) => {
	// #swagger.tags = ['user']
	try {
		const user = await userService.getUserById(req.params.userId);
		/* #swagger.responses[200] = {
					description: 'Success',
					schema: { $ref: '#/definitions/User' }
		} */
		return res.json(user);
	} catch (error) {
		/* #swagger.responses[404] = {
					description: 'Not found',
					schema: { $ref: '#/definitions/ErrorResponse' }
		} */
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
		// #swagger.tags = ['user']
		try {
			defaultRequestValidator(req);
			const { email, password } = req.body;
			/*	#swagger.requestBody = {
            required: true,
            schema: { $ref: "#/definitions/LoginParams" }
    	} */
			const response = await userService.login(email, password);
			/* #swagger.responses[200] = {
            description: 'Success',
            schema: { $ref: '#/definitions/AuthResponse' }
    	} */
			return res.json(response);
		} catch (error) {
			/* #swagger.responses[400] = {
            description: 'Bad request',
            schema: { $ref: '#/definitions/ErrorResponse' }
    	} */
			/* #swagger.responses[401] = {
            description: 'Unauthorized',
            schema: { $ref: '#/definitions/ErrorResponse' }
    	} */
			return defaultErrorHandler(res, error);
		}
	}
);

// Register
router.post(
	'/register',
	[
		check('email', 'Email is required').isEmail(),
		check('username', 'Username must not be empty').isLength({
			min: 1,
		}),
		check('password', 'Password must have 6 or more characters').isLength({
			min: 6,
		}),
		check('profile', 'Profile must be a string').isString(),
	],
	async (req, res) => {
		// #swagger.tags = ['user']
		try {
			defaultRequestValidator(req);
			const { email, username, password, profile } = req.body;
			/*	#swagger.requestBody = {
            required: true,
            schema: { $ref: "#/definitions/RegisterParams" }
    	} */
			const response = await userService.register({
				email,
				username,
				password,
				profile,
				// role: 'Admin',
			});
			/* #swagger.responses[200] = {
            description: 'Success',
            schema: { $ref: '#/definitions/AuthResponse' }
    	} */
			res.json(response);
		} catch (error) {
			/* #swagger.responses[400] = {
            description: 'Bad request',
            schema: { $ref: '#/definitions/ErrorResponse' }
    	} */
			return defaultErrorHandler(res, error);
		}
	}
);

// Get my info
router.post(
	'/favourite',
	[
		auth,
		[
			check('movieId', 'movieId must not be empty').isLength({
				min: 6,
			}),
		],
	],
	async (req, res) => {
		// #swagger.tags = ['user']
		try {
			defaultRequestValidator(req);
			const { uuid } = req.user;
			const user = await userService.getUserById(uuid);
			user.addMovie(req.body.movieId);
			/* #swagger.responses[200] = {
					description: 'Success',
					schema: { $ref: '#/definitions/User' }
		} */
			return res.json('Success');
		} catch (error) {
			/* #swagger.responses[401] = {
					description: 'Unauthorized',
					schema: { $ref: '#/definitions/ErrorResponse' }
		} */
			/* #swagger.responses[404] = {
					description: 'Not found',
					schema: { $ref: '#/definitions/ErrorResponse' }
		} */
			return defaultErrorHandler(res, error);
		}
	}
);

module.exports = router;
