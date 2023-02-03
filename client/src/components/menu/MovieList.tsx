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
import { sortBy } from '../../store/navSlice';
import { MovieListTitles } from '../../types';
import MovieItem from './MovieItem';

const img =
	'https://image.tmdb.org/t/p/original/6sMnY4fEVAfdadhANhGnNckxsmx.jpg';
const movies = [
	{
		id: 1,
		title: 'Title',
		description:
			'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Soluta, consequuntur tenetur a cumque libero corrupti ipsum odit ipsam labore inventore accusamus ex beatae amet eveniet sapiente repellat reiciendis eligendi quae.',
		img,
		tags: ['Action', 'Comedy'],
	},
	{
		id: 2,
		title: 'Title',
		description:
			'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Soluta, consequuntur tenetur a cumque libero corrupti ipsum odit ipsam labore inventore accusamus ex beatae amet eveniet sapiente repellat reiciendis eligendi quae.',
		img,
		tags: ['Action', 'Comedy'],
	},
	{
		id: 3,
		title: 'Title',
		description:
			'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Soluta, consequuntur tenetur a cumque libero corrupti ipsum odit ipsam labore inventore accusamus ex beatae amet eveniet sapiente repellat reiciendis eligendi quae.',
		img,
		tags: ['Action', 'Comedy'],
	},
	{
		id: 4,
		title: 'Title',
		description:
			'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Soluta, consequuntur tenetur a cumque libero corrupti ipsum odit ipsam labore inventore accusamus ex beatae amet eveniet sapiente repellat reiciendis eligendi quae.',
		img,
		tags: ['Action', 'Comedy'],
	},
	{
		id: 5,
		title: 'Title',
		description:
			'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Soluta, consequuntur tenetur a cumque libero corrupti ipsum odit ipsam labore inventore accusamus ex beatae amet eveniet sapiente repellat reiciendis eligendi quae.',
		img,
		tags: ['Action', 'Comedy'],
	},
	{
		id: 6,
		title: 'Title',
		description:
			'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Soluta, consequuntur tenetur a cumque libero corrupti ipsum odit ipsam labore inventore accusamus ex beatae amet eveniet sapiente repellat reiciendis eligendi quae.',
		img,
		tags: ['Action', 'Comedy'],
	},
];

interface MovieListProps {
	title: MovieListTitles;
}

const MovieList = ({ title }: MovieListProps) => {
	const { sort } = useSelector((state: RootState) => state.nav[title]);
	const dispatch = useAppDispatch();
	const descending = sort === 'DESC';

	const sortHandler = () => {
		// TODO: send request to BE to get new data
		if (descending) {
			dispatch(sortBy({ page: title, sort: 'ASC' }));
		} else {
			dispatch(sortBy({ page: title, sort: 'DESC' }));
		}
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
					{descending ? 'DESC' : 'ASC'}
				</Button>
			</HStack>
			<Divider marginTop='5' />
			<Wrap spacing='30px'>
				{/* TODO: Implement infinite scrolling */}
				{movies.map((movie) => (
					<MovieItem
						key={movie.id}
						title={movie.title}
						description={movie.description}
						img={movie.img}
						tags={movie.tags}
					/>
				))}
			</Wrap>
		</Container>
	);
};

export default MovieList;
