const favouriteRepo = require('../repositories/favouriteRepo');

const hasFavourited = async (UserUuid, MovieUuid) => {
	const favourite = await getFavourite(UserUuid, MovieUuid);
	return !!favourite;
};

const createFavourite = async (favourite) => {
	const { UserUuid, MovieUuid } = favourite;
	const favourited = await hasFavourited(UserUuid, MovieUuid);
	if (!favourited) {
		return await favouriteRepo.createOne(favourite);
	} else {
		return null;
	}
};

const getFavourite = async (UserUuid, MovieUuid) => {
	const favourite = await favouriteRepo.findOne({
		where: { UserUuid, MovieUuid },
	});
	return favourite;
};

module.exports = {
	createFavourite,
	hasFavourited,
	getFavourite,
};
