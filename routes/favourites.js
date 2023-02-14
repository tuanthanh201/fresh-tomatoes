const express = require('express');
const router = express.Router();
const favouriteService = require('../services/favouriteService');

const { defaultErrorHandler, defaultRequestValidator } = require('./utils');
const { check } = require('express-validator');

const auth = require('../middleware/auth');

// Add movie to favourite
// TODO: should use the same endpoint for removing
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
			const favourite = await favouriteService.createFavourite({
				MovieUuid: req.body.movieId,
				UserUuid: uuid,
			});
			/* #swagger.responses[200] = {
					description: 'Success',
					schema: { $ref: '#/definitions/User' }
		} */
			return res.json(favourite);
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

// Remove movie to favourite
// TODO: should use the same endpoint for removing
router.delete(
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
			const { movieId } = req.body;
			const favourite = await favouriteService.getFavourite(uuid, movieId);
			if (favourite) {
				await favourite.destroy();
			}
			/* #swagger.responses[200] = {
					description: 'Success',
					schema: { $ref: '#/definitions/User' }
		} */
			return res.json('Removed succesfully');
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
