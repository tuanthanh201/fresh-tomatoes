export enum MovieListTitles {
	POPULAR = 'Popular',
	TRENDING = 'Trending',
	EXPLORE = 'Movies you might like',
	FAVOURITES = 'Favourites',
}

export interface Genre {
	uuid: string;
	name: string;
}

export interface Movie {
	uuid: string;
	title: string;
	overview: string;
	poster: string | null;
	backdrop: string | null;
	adult: boolean;
	releasedDate: string;
	runtime: number;
	ratingCount: number;
	ratingAverage: number;
	popularity: number;
	Genres: Genre[];
}

export type SortBy = 'ASC' | 'DESC';
