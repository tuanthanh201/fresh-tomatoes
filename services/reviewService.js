const reviewRepo = require('../repositories/reviewRepo');

const hasReviewed = async (UserUuid, MovieUuid) => {
	const review = await reviewRepo.findOne({
		where: { UserUuid, MovieUuid },
	});
	return !!review;
};

const createReview = async (review) => {
	const { UserUuid, MovieUuid } = review;
	const reviewed = await hasReviewed(UserUuid, MovieUuid);
	if (!reviewed) {
		return await reviewRepo.createOne(review);
	} else {
		return null;
	}
};

const getReview = async (UserUuid, MovieUuid) => {
	const review = await reviewRepo.findOne({
		where: { UserUuid, MovieUuid },
	});
	return review;
};

module.exports = {
	createReview,
	hasReviewed,
	getReview,
};
