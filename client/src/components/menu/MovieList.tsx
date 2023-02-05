import { ArrowDownIcon, ArrowUpIcon } from '@chakra-ui/icons';
import {
	Heading,
	Divider,
	Wrap,
	Container,
	HStack,
	Button,
} from '@chakra-ui/react';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useAppDispatch } from '../../hooks/useRedux';
import { RootState } from '../../store';
import { MovieListTitles } from '../../types';
import MovieItem from './MovieItem';

import { getPopularMovies } from '../../store/nav/actions';
import { updateSortBy } from '../../store/nav/movieSlice';

interface MovieListProps {
	title: MovieListTitles;
}

const MovieList = ({ title }: MovieListProps) => {
	const {
		sort,
		movieData: { movies, hasMore },
	} = useSelector((state: RootState) => state.movie[title]);
	const dispatch = useAppDispatch();

	const descending = sort === 'DESC';

	useEffect(() => {
		if (title === MovieListTitles.POPULAR) {
			dispatch(getPopularMovies({ sort }));
		}
	}, [dispatch, title, sort]);

	const sortHandler = () => {
		const newSort = descending ? 'ASC' : 'DESC';
		dispatch(updateSortBy({ page: title, sort: newSort }));
	};

	return (
		<Container maxW={'7xl'} p='2'>
			<HStack justifyContent='space-between'>
				<Heading as='h2'>{title}</Heading>
				<Button
					variant='ghost'
					leftIcon={descending ? <ArrowDownIcon /> : <ArrowUpIcon />}
					onClick={sortHandler}
				>
					{sort}
				</Button>
			</HStack>
			<Divider marginTop='5' />
			<Wrap spacing='30px'>
				{/* TODO: Implement infinite scrolling */}
				{movies.map((movie) => (
					<MovieItem
						key={movie.uuid}
						title={movie.title}
						overview={movie.overview}
						poster={movie.poster}
						backdrop={movie.backdrop}
						genres={movie.Genres}
					/>
				))}
			</Wrap>
		</Container>
	);
};

export default MovieList;
