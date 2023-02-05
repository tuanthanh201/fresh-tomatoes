import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Movie, MovieListTitles, SortBy } from '../../types';

interface MovieData {
	movies: Movie[];
	hasMore: boolean;
}

interface MovieSlice {
	[page: string]: {
		movieData: MovieData;
		sort: SortBy;
		fieldCursor: number | undefined;
		uuidCursor: string | undefined;
	};
}

const initialState: MovieSlice = {
	[MovieListTitles.POPULAR]: {
		movieData: {
			movies: [],
			hasMore: false,
		},
		fieldCursor: undefined,
		uuidCursor: undefined,
		sort: 'DESC',
	},
	[MovieListTitles.EXPLORE]: {
		movieData: {
			movies: [],
			hasMore: false,
		},
		fieldCursor: undefined,
		uuidCursor: undefined,
		sort: 'DESC',
	},
	[MovieListTitles.TRENDING]: {
		movieData: {
			movies: [],
			hasMore: false,
		},
		fieldCursor: undefined,
		uuidCursor: undefined,
		sort: 'DESC',
	},
	[MovieListTitles.FAVOURITES]: {
		movieData: {
			movies: [],
			hasMore: false,
		},
		fieldCursor: undefined,
		uuidCursor: undefined,
		sort: 'DESC',
	},
};

const movieSlice = createSlice({
	name: 'movie',
	initialState,
	reducers: {
		initMovies: (
			state,
			{
				payload,
			}: PayloadAction<{
				page: MovieListTitles;
				movieData: MovieData;
				sort: SortBy;
				fieldCursor: number;
				uuidCursor: string;
			}>
		) => {
			// add movies to current movies
			// state[payload.page].movieData.movies = [
			// 	...state[payload.page].movieData.movies,
			// 	...payload.movieData.movies,
			// ];
			// state[payload.page].movieData.hasMore = payload.movieData.hasMore;
			state[payload.page].movieData = payload.movieData;
			state[payload.page].sort = payload.sort;
			state[payload.page].fieldCursor = payload.fieldCursor;
			state[payload.page].uuidCursor = payload.uuidCursor;
		},
		updateSortBy: (
			state,
			{
				payload,
			}: PayloadAction<{
				page: MovieListTitles;
				sort: SortBy;
			}>
		) => {
			state[payload.page].movieData = {
				movies: [],
				hasMore: false,
			};
			state[payload.page].sort = payload.sort;
			state[payload.page].fieldCursor = 0;
			state[payload.page].uuidCursor = '';
		},
	},
});

export const { initMovies, updateSortBy } = movieSlice.actions;

export default movieSlice.reducer;
