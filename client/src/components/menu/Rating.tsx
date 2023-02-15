import { useState } from 'react';
import {
	IconButton,
	Box,
	Text,
	useColorModeValue,
	Textarea,
	Button,
	Stack,
} from '@chakra-ui/react';
import ReviewItem from '../review/ReviewItem';
import { AiOutlineStar, AiFillStar } from 'react-icons/ai';
import { useAppSelector } from '../../hooks/useRedux';

interface RatingProps {
	max?: number;
	initialRating?: number;
	reviewed?: boolean;
}

const Rating = ({
	max = 10,
	initialRating = 0,
	reviewed = false,
}: RatingProps) => {
	const { uuid, isAuthenticated } = useAppSelector((state) => state.auth);
	const [rating, setRating] = useState(initialRating);
	const [rated, setRated] = useState<Boolean>(false);
	const [text, setText] = useState<String>('Rate it...');
	const [review, setReview] = useState('');
	const [showForm, setShowForm] = useState(false);

	const getText = (index: number): String => {
		switch (index) {
			case 0:
				return 'Rate it...';
			case 1:
				return 'Absolutely hated it';
			case 2:
				return 'Hated it';
			case 3:
				return 'Disliked it';
			case 4:
				return 'It was not good';
			case 5:
				return 'It was average';
			case 6:
				return 'It was ok';
			case 7:
				return 'It was interesting';
			case 8:
				return 'Liked it';
			case 9:
				return 'Enjoyed it';
			default:
				return 'Loved it';
		}
	};

	const handleHover = (index: number) => {
		if (!rated && isAuthenticated) {
			setRating(index);
			setText(getText(index));
		}
	};

	const handleClick = (index: number) => {
		if (!rated && isAuthenticated) {
			setRating(index);
			setRated(true);
			setText(getText(index));
			setShowForm(true);
			// TODO: send requests to backend
		}
	};

	const submitHandler = (e: React.SyntheticEvent) => {
		e.preventDefault();
		console.log({ rating, review });
	};

	const iconColor = useColorModeValue('blueviolet', 'yellow');

	return (
		<>
			<Text textAlign='center'>{text}</Text>
			<Box
				mt={2}
				mb={5}
				display='flex'
				alignItems='center'
				justifyContent='space-between'
			>
				{Array.from({ length: max }, (_, i) => (
					<IconButton
						// border='none'
						variant='unstyled'
						color={iconColor}
						key={i}
						aria-label={`Rate ${i + 1} out of ${max}`}
						icon={rating > i ? <AiFillStar /> : <AiOutlineStar />}
						onClick={() => handleClick(i + 1)}
						onPointerOver={() => handleHover(i + 1)}
						onPointerLeave={() => handleHover(0)}
					/>
				))}
			</Box>
			{!isAuthenticated && <Text textAlign='center'>Sign in to review</Text>}
			{showForm && (
				<Stack direction='column' spacing='8'>
					{reviewed && (
						<ReviewItem
							content='Lorem ipsum dolor sit, amet consectetur adipisicing elit. Pariatur assumenda magnam voluptas ad sapiente voluptates reiciendis consequatur, impedit totam rem aperiam dicta perferendis minima accusantium laudantium odio praesentium ut ducimus neque temporibus accusamus incidunt laborum? Tenetur voluptas ad saepe maiores, aliquam ducimus voluptatibus ea, qui, adipisci molestias quidem tempora pariatur!'
							index={19}
							name='John Doe'
							role='User'
						/>
					)}
					<Textarea
						value={review}
						onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
							setReview(e.target.value)
						}
						placeholder='Write a review (optional)'
						size='md'
						height='12rem'
					/>
					<Stack alignSelf='center' direction='row' spacing={4}>
						<Button
							colorScheme='gray'
							variant='outline'
							onClick={() => {
								setRating(0);
								setText(getText(0));
								setReview('');
								setShowForm(false);
								setRated(false);
							}}
						>
							Cancel
						</Button>
						<Button onClick={submitHandler} colorScheme='blue' variant='solid'>
							Submit
						</Button>
					</Stack>
				</Stack>
			)}
		</>
	);
};

export default Rating;
