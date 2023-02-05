const jwt = require('jsonwebtoken');
const config = require('config');

const generateToken = (payload) => {
	return new Promise((resolve, reject) => {
		jwt.sign(
			payload,
			config.get('JWT_SECRET'),
			// 60 * 60 = 3600, i.e., 1 hour
			{ expiresIn: 3600 },
			(err, token) => {
				if (err) {
					reject(err);
				}
				resolve(token);
			}
		);
	});
};

module.exports = {
	generateToken,
};
