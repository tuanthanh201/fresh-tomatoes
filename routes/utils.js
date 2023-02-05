const { validationResult } = require('express-validator');
const StatusError = require('../errors');

const defaultRequestValidator = (req) => {
	const errors = validationResult(req);
	if (!errors.isEmpty()) {
		throw new StatusError(errors.array(), 400);
	}
};

const defaultErrorHandler = (res, error) => {
	if (error instanceof StatusError) {
		return res.status(error.status).json({ errors: error.messages });
	} else {
		return res
			.status(500)
			.json({ errors: [{ msg: error.message ?? 'Something went wrong' }] });
	}
};

module.exports = {
	defaultRequestValidator,
	defaultErrorHandler,
};
