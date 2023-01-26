import { Heading, Divider, Wrap, Container } from '@chakra-ui/react';
import MovieItem from './MovieItem';

const img =
	'https://scontent.fyto1-1.fna.fbcdn.net/v/t1.15752-9/327164951_6529345463749386_1225317772633054012_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=ae9488&_nc_ohc=_FfW6QgIgJAAX_9Z6YU&tn=rIMlzMi1GkDIVIfd&_nc_ht=scontent.fyto1-1.fna&oh=03_AdSNmCNCS1N6H1nxJi7HgwDBapUtxQookyhMqvvyVi9-VA&oe=63F94DA1';
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
		<Container maxW={'7xl'} p='12'>
			<Heading as='h2' marginTop='0'>
				Latest movies
			</Heading>
			<Divider marginTop='5' />
			<Wrap spacing='30px' marginTop='5'>
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
