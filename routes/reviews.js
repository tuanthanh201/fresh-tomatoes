const express = require('express');
const router = express.Router();
const reviewService = require('../services/reviewService');
const { defaultErrorHandler, defaultRequestValidator } = require('./utils');
const { check } = require('express-validator');

const auth = require('../middleware/auth');

router.post(
	'/review',
	[
		auth,
		[
			check('movieId', 'movieId must not be empty').isLength({
				min: 6,
			}),
			check('content', 'content must be a string').isString(),
			check('rating', 'rating must be between 1 and 10').isInt({
				min: 1,
				max: 10,
			}),
		],
	],
	async (req, res) => {
		try {
			defaultRequestValidator(req);
			const { uuid } = req.user;
			const { movieId, content, rating } = req.body;
			const review = await reviewService.createReview({
				content: content,
				rating: rating,
				MovieUuid: movieId,
				UserUuid: uuid,
			});
			return res.json(review);
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

router.delete(
	'/review',
	[
		auth,
		[
			check('movieId', 'movieId must not be empty').isLength({
				min: 6,
			}),
		],
	],
	async (req, res) => {
		try {
			defaultRequestValidator(req);
			const { uuid } = req.user;
			const { movieId } = req.body;
			const review = await reviewService.getReview(uuid, movieId);
			if (review) {
				await review.destroy();
			}
			return res.json('Removed successfully');
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
