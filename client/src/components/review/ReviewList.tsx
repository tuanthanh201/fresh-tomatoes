import { SimpleGrid } from '@chakra-ui/react';
import ReviewItem from './ReviewItem';

const testimonials = [
	{
		name: 'John Doe',
		role: 'User',
		content: 'Hello world',
	},
	{
		name: 'John Doe',
		role: 'User',
		content: 'Hello world',
	},
	{
		name: 'John Doe',
		role: 'User',
		content: 'Hello world',
	},
	{
		name: 'John Doe',
		role: 'User',
		content: 'Hello world',
	},
];

const Review = () => {
	return (
		<SimpleGrid my={10} columns={{ base: 1, xl: 2 }} spacing={'20'} mx={'auto'}>
			{testimonials.map((cardInfo, index) => (
				// TODO: add key
				<ReviewItem {...cardInfo} index={index} />
			))}
		</SimpleGrid>
	);
};

export default Review;
