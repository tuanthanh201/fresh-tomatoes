import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Movie, MovieListTitles, SortBy } from '../types';

interface MovieData {
	movies: Movie[];
	hasMore: boolean;
}

interface Navigation {
	[page: string]: {
		movieData: MovieData;
		sort: SortBy;
	};
}

const initialState: Navigation = {
	[MovieListTitles.POPULAR]: {
		movieData: {
			movies: [],
			hasMore: false,
		},
		sort: 'DESC',
	},
	[MovieListTitles.EXPLORE]: {
		movieData: {
			movies: [],
			hasMore: false,
		},
		sort: 'DESC',
	},
	[MovieListTitles.TRENDING]: {
		movieData: {
			movies: [],
			hasMore: false,
		},
		sort: 'DESC',
	},
	[MovieListTitles.FAVOURITES]: {
		movieData: {
			movies: [],
			hasMore: false,
		},
		sort: 'DESC',
	},
};

const navSlice = createSlice({
	name: 'auth',
	initialState,
	reducers: {
		saveMovies: (
			state,
			{
				payload,
			}: PayloadAction<{ page: MovieListTitles; movieData: MovieData }>
		) => {
			if (state[payload.page]) {
				state[payload.page].movieData.movies = [
					...state[payload.page].movieData.movies,
					...payload.movieData.movies,
				];
				state[payload.page].movieData.hasMore = payload.movieData.hasMore;
			} else {
				state[payload.page].movieData = payload.movieData;
			}
		},
		sortBy: (
			state,
			{ payload }: PayloadAction<{ page: MovieListTitles; sort: SortBy }>
		) => {
			state[payload.page].sort = payload.sort;
		},
	},
});

export const { saveMovies, sortBy } = navSlice.actions;

export default navSlice.reducer;
