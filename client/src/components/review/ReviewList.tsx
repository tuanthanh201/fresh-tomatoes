import { SimpleGrid } from '@chakra-ui/react';
import ReviewItem from './ReviewItem';

const testimonials = [
	{
		name: 'John Doe',
		role: 'User',
		content:
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora quod sint quam magni rerum ullam inventore iste, nihil magnam nobis, culpa ducimus, non iure. Sequi, aspernatur sapiente necessitatibus illo expedita nam quasi maiores veritatis distinctio accusamus natus dolorem nemo magni eligendi porro nihil mollitia in temporibus. Deserunt inventore animi dicta!',
	},
	{
		name: 'John Doe',
		role: 'User',
		content:
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora quod sint quam magni rerum ullam inventore iste, nihil magnam nobis, culpa ducimus, non iure. Sequi, aspernatur sapiente necessitatibus illo expedita nam quasi maiores veritatis distinctio accusamus natus dolorem nemo magni eligendi porro nihil mollitia in temporibus. Deserunt inventore animi dicta!',
	},
	{
		name: 'John Doe',
		role: 'User',
		content:
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora quod sint quam magni rerum ullam inventore iste, nihil magnam nobis, culpa ducimus, non iure. Sequi, aspernatur sapiente necessitatibus illo expedita nam quasi maiores veritatis distinctio accusamus natus dolorem nemo magni eligendi porro nihil mollitia in temporibus. Deserunt inventore animi dicta!',
	},
	{
		name: 'John Doe',
		role: 'User',
		content:
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora quod sint quam magni rerum ullam inventore iste, nihil magnam nobis, culpa ducimus, non iure. Sequi, aspernatur sapiente necessitatibus illo expedita nam quasi maiores veritatis distinctio accusamus natus dolorem nemo magni eligendi porro nihil mollitia in temporibus. Deserunt inventore animi dicta!',
	},
];

const Review = () => {
	return (
		<SimpleGrid my={10} columns={{ base: 1, xl: 2 }} spacing={'20'} mx={'auto'}>
			{testimonials.map((cardInfo, index) => (
				// TODO: add key
				<ReviewItem key={index} {...cardInfo} index={index} />
			))}
		</SimpleGrid>
	);
};

export default Review;
