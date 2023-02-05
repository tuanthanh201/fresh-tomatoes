import { AppDispatch } from './../index';
import axios from 'axios';
import { MovieListTitles, SortBy } from '../../types';

import { addMovies, initMovies } from './movieSlice';

const url = 'http://localhost:8000';

export const getPopularMovies = ({ sort }: { sort: SortBy }) => {
	return async (dispatch: AppDispatch) => {
		try {
			const response = await axios.get(`${url}/api/movies/popular`, {
				params: { sort },
			});
			const movieData = response.data;
			const fieldCursor = movieData.movies.at(-1).popularity;
			const uuidCursor = movieData.movies.at(-1).uuid;
			dispatch(
				initMovies({
					page: MovieListTitles.POPULAR,
					sort,
					movieData,
					fieldCursor,
					uuidCursor,
				})
			);
		} catch (error) {
			console.error(error);
			throw new Error("Couldn't get movies");
		}
	};
};

export const fetchMorePopularMovies = ({
	sort,
	popularity,
	uuid,
}: {
	sort: SortBy;
	popularity: number | null;
	uuid: string;
}) => {
	return async (dispatch: AppDispatch) => {
		try {
			const response = await axios.get(`${url}/api/movies/popular`, {
				params: { sort, popularity, uuid },
			});
			const movieData = response.data;
			const fieldCursor = movieData.movies.at(-1).popularity;
			const uuidCursor = movieData.movies.at(-1).uuid;
			dispatch(
				addMovies({
					page: MovieListTitles.POPULAR,
					movieData,
					fieldCursor,
					uuidCursor,
				})
			);
		} catch (error) {
			console.error(error);
			throw new Error("Couldn't get movies");
		}
	};
};