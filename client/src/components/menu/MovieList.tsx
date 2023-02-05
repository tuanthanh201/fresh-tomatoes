import { ArrowDownIcon, ArrowUpIcon } from '@chakra-ui/icons';
import {
	Heading,
	Divider,
	Wrap,
	Container,
	HStack,
	Button,
	Center,
} from '@chakra-ui/react';
import { useEffect } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import { useAppDispatch, useAppSelector } from '../../hooks/useRedux';
import { MovieListTitles } from '../../types';
import MovieItem from './MovieItem';
import {
	fetchMorePopularMovies,
	getPopularMovies,
} from '../../store/movie/actions';
import { updateSortBy } from '../../store/movie/movieSlice';

interface MovieListProps {
	title: MovieListTitles;
}

const MovieList = ({ title }: MovieListProps) => {
	const {
		sort,
		fieldCursor,
		uuidCursor,
		loading,
		movieData: { movies, hasMore },
	} = useAppSelector((state) => state.movie[title]);
	const dispatch = useAppDispatch();

	const descending = sort === 'DESC';

	useEffect(() => {
		if (title === MovieListTitles.POPULAR) {
			dispatch(getPopularMovies({ sort }));
		}
	}, [dispatch, title, sort]);

	const fetchMore = () => {
		if (title === MovieListTitles.POPULAR) {
			dispatch(
				fetchMorePopularMovies({
					sort,
					popularity: fieldCursor,
					uuid: uuidCursor,
				})
			);
		}
	};

	const sortHandler = () => {
		const newSort = descending ? 'ASC' : 'DESC';
		dispatch(updateSortBy({ page: title, sort: newSort }));
	};

	return (
		<Container maxW={'7xl'} p='2'>
			<HStack justifyContent='space-between'>
				<Heading as='h2'>{title}</Heading>
				<Button
					isLoading={loading}
					variant='ghost'
					leftIcon={descending ? <ArrowDownIcon /> : <ArrowUpIcon />}
					onClick={sortHandler}
				>
					{sort}
				</Button>
			</HStack>
			<Divider marginTop='5' />
			<InfiniteScroll
				next={fetchMore}
				hasMore={hasMore}
				dataLength={movies.length}
				loader={
					<Center>
						<Heading fontSize='2xl'>Loading...</Heading>
					</Center>
				}
				endMessage={
					<Center>
						<Heading fontSize='2xl'>Yay! You have seen it all</Heading>
					</Center>
				}
			>
				<Wrap spacing='30px'>
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
			</InfiniteScroll>
		</Container>
	);
};

export default MovieList;
