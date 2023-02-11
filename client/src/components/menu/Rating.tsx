import { useState } from 'react';
import { IconButton, Box, Text } from '@chakra-ui/react';
import { AiOutlineStar, AiFillStar } from 'react-icons/ai';

interface StarRatingProps {
	max?: number;
	initialRating?: number;
}

const StarRating = ({ max = 10, initialRating = 0 }: StarRatingProps) => {
	const [rating, setRating] = useState(initialRating);
	const [rated, setRated] = useState<Boolean>(false);
	const [text, setText] = useState<String>('Rate it...');

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
		if (!rated) {
			setRating(index);
			const label = getText(index);
			setText(label);
		}
	};

	const handleClick = (index: number) => {
		if (!rated) {
			setRating(index);
			setRated(true);
			const label = getText(index);
			setText(label);
			// TODO: send requests to backend
		}
	};

	return (
		<>
			<Text textAlign='center'>{text}</Text>
			<Box
				mt={5}
				display='flex'
				alignItems='center'
				justifyContent='space-between'
			>
				{Array.from({ length: max }, (_, i) => (
					<IconButton
						// border='none'
						variant='unstyled'
						color='yellow'
						key={i}
						aria-label={`Rate ${i + 1} out of ${max}`}
						icon={rating > i ? <AiFillStar /> : <AiOutlineStar />}
						onClick={() => handleClick(i + 1)}
						onPointerOver={() => handleHover(i + 1)}
						onPointerLeave={() => handleHover(0)}
					/>
				))}
			</Box>
		</>
	);
};

export default StarRating;
