import { Heading, Divider, Wrap, Container } from '@chakra-ui/react';
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

const MovieList = () => {
	return (
		<Container maxW={'7xl'} p='2'>
			<Heading as='h2'>
				Latest movies
			</Heading>
			<Divider marginTop='5' />
			<Wrap spacing='30px'>
				{/* TODO: Add pagination */}
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
