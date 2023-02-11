import {
	Box,
	Button,
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
import ReviewList from '../review/ReviewList';
import StarRating from './Rating';

const img =
	'https://image.tmdb.org/t/p/original/otOtC45BDzFW7nuxnWHMmnYsicK.jpg';

interface MovieProps {
	uuid: string;
}

const Movie = ({ uuid }: MovieProps) => {
	console.log(uuid);

	return (
		<Container maxW={'7xl'}>
			<SimpleGrid
				// flexDir='column'
				columns={{ base: 1, lg: 2 }}
				spacing={{ base: 8, md: 10 }}
				// py={{ base: 18, md: 24 }}
			>
				<Image
					rounded={'md'}
					alt={'product image'}
					src={img}
					fit={'cover'}
					align={'center'}
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
							Title
						</Heading>
						<Text
							color={useColorModeValue('gray.900', 'gray.400')}
							fontWeight={300}
							fontSize={'2xl'}
						>
							Released year
						</Text>
					</Box>

					<Stack
						spacing={{ base: 4, sm: 6 }}
						direction={'column'}
						divider={
							<StackDivider
								borderColor={useColorModeValue('gray.200', 'gray.600')}
							/>
						}
					>
						<VStack spacing={{ base: 4, sm: 6 }}>
							<Text
								color={useColorModeValue('gray.500', 'gray.400')}
								fontSize={'2xl'}
								fontWeight={'300'}
							>
								Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
								diam nonumy eirmod tempor invidunt ut labore
							</Text>
							<Text fontSize={'lg'}>
								Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad
								aliquid amet at delectus doloribus dolorum expedita hic, ipsum
								maxime modi nam officiis porro, quae, quisquam quos
								reprehenderit velit? Natus, totam.
							</Text>
						</VStack>
						<Box>
							<Text
								fontSize={{ base: '16px', lg: '18px' }}
								color={useColorModeValue('yellow.500', 'yellow.300')}
								fontWeight={'500'}
								textTransform={'uppercase'}
								mb={'4'}
							>
								Movie Details
							</Text>

							<List spacing={2}>
								<ListItem>
									<Text as={'span'} fontWeight={'bold'}>
										Runtime:
									</Text>{' '}
									141 minutes
								</ListItem>
								<ListItem>
									<Text as={'span'} fontWeight={'bold'}>
										Average rating:
									</Text>{' '}
									9/10
								</ListItem>
								<ListItem>
									<Text as={'span'} fontWeight={'bold'}>
										Adult:
									</Text>{' '}
									Yes
								</ListItem>
								<ListItem>
									<Text as={'span'} fontWeight={'bold'}>
										Popularity ranking:
									</Text>{' '}
									1
								</ListItem>
							</List>
						</Box>
						<StarRating />
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
		</Container>
	);
};

export default Movie;
