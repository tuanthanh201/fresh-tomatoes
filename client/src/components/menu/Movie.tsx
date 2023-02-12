import {
	Box,
	Container,
	GridItem,
	Heading,
	Image,
	List,
	ListItem,
	SimpleGrid,
	Stack,
	StackDivider,
	Text,
	useColorModeValue,
	VStack,
} from '@chakra-ui/react';
import axios from 'axios';
import { useEffect, useState } from 'react';
import ReviewList from '../review/ReviewList';
import Rating from './Rating';

interface MovieProps {
	uuid: string;
}

interface MovieData {
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
	createdAt: string;
	updatedAt: string;
}

const Movie = ({ uuid }: MovieProps) => {
	const [movie, setMovie] = useState<MovieData | null>(null);
	const [loading, setLoading] = useState(true);
	console.log(uuid);

	useEffect(() => {
		const getMovieById = async () => {
			try {
				const response = await axios.get(
					`http://localhost:8000/api/movies/movie/${uuid}`
				);
				const movieData = response.data;
				setMovie(movieData);
			} catch (error) {
				console.error(error);
			}
			setLoading(false);
		};
		getMovieById();
	}, [uuid]);

	const yearColor = useColorModeValue('gray.900', 'gray.400');
	const borderColor = useColorModeValue('gray.200', 'gray.600');
	const detailsColor = useColorModeValue('yellow.500', 'yellow.300');

	return (
		<Container maxW={'7xl'}>
			{loading || !movie ? null : (
				<SimpleGrid columns={{ base: 1, lg: 2 }} spacing={{ base: 8, md: 10 }}>
					<Image
						rounded={'md'}
						alt={'product image'}
						src={movie.backdrop ?? 'https://via.placeholder.com/450x600'}
						fit='cover'
						objectPosition='center'
						align='center'
						w={'100%'}
						h={{ base: '100%', sm: '400px', lg: '500px' }}
					/>
					<Stack spacing={{ base: 6, md: 10 }}>
						<Box as={'header'}>
							<Heading
								lineHeight={1.1}
								fontWeight={600}
								fontSize={{ base: '2xl', sm: '4xl', lg: '5xl' }}
							>
								{movie.title}
							</Heading>
							<Text color={yearColor} fontWeight={300} fontSize={'2xl'}>
								{movie.releasedDate}
							</Text>
						</Box>

						<Stack
							spacing={{ base: 4, sm: 6 }}
							direction={'column'}
							divider={<StackDivider borderColor={borderColor} />}
						>
							<VStack spacing={{ base: 4, sm: 6 }}>
								<Text fontSize={'lg'}>{movie.overview}</Text>
							</VStack>
							<Box>
								<Text
									fontSize={{ base: '16px', lg: '18px' }}
									color={detailsColor}
									fontWeight={'500'}
									textTransform={'uppercase'}
									mb={'4'}
								>
									Movie Details
								</Text>

								<List spacing={2}>
									<ListItem>
										<Text as={'span'} fontWeight={'bold'}>
											{`Runtime: ${movie.runtime} minutes`}
										</Text>
									</ListItem>
									<ListItem>
										<Text as={'span'} fontWeight={'bold'}>
											{`Average rating: ${movie.ratingAverage}/10`}
										</Text>
									</ListItem>
									<ListItem>
										<Text as={'span'} fontWeight={'bold'}>
											{`Adult: ${movie.adult ? 'Yes' : 'No'}`}
										</Text>
									</ListItem>
									<ListItem>
										<Text as={'span'} fontWeight={'bold'}>
											{/* TODO: rank popularity */}
											{`Popularity rating: ${movie.popularity}`}
										</Text>
									</ListItem>
								</List>
							</Box>
							<Rating />
						</Stack>

						{/* <Button
						rounded={'none'}
						w={'full'}
						mt={8}
						size={'lg'}
						py={'7'}
						bg={useColorModeValue('gray.900', 'gray.50')}
						color={useColorModeValue('white', 'gray.900')}
						textTransform={'uppercase'}
						_hover={{
							transform: 'translateY(2px)',
							boxShadow: 'lg',
						}}
					>
						Review
					</Button> */}
					</Stack>
					<GridItem colSpan={{ base: 1, lg: 2 }}>
						<ReviewList />
					</GridItem>
				</SimpleGrid>
			)}
		</Container>
	);
};

export default Movie;
