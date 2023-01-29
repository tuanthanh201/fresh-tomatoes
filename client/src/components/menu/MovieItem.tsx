import {
	Box,
	Heading,
	Image,
	Link,
	Text,
	useDisclosure,
	WrapItem,
} from '@chakra-ui/react';
import CustomModal from '../modal/CustomModal';
import Tags from '../utilities/Tags';
import Movie from './Movie';

interface MovieItemProps {
	img: string;
	title: string;
	description: string;
	tags: string[];
}

const MovieItem = (props: MovieItemProps) => {
	const { description, img, tags, title } = props;
	const { isOpen, onOpen, onClose } = useDisclosure();

	return (
		<WrapItem width={{ base: '100%', sm: '45%', md: '45%', lg: '30%' }}>
			<Box w='95%'>
				<Box
					boxSize='auto'
					maxHeight='425px'
					borderRadius='lg'
					overflow='hidden'
				>
					<Image
						onClick={onOpen}
						transform='scale(1.0)'
						src={img}
						alt='some text'
						objectFit='contain'
						width='100%'
						transition='0.3s ease-in-out'
						_hover={{
							cursor: 'pointer',
							transform: 'scale(1.05)',
						}}
					/>
				</Box>
				<Tags tags={tags} marginTop='3' />
				<Heading fontSize='xl' marginTop='2'>
					<Link textDecoration='none' _hover={{ textDecoration: 'none' }}>
						{title}
					</Link>
				</Heading>
				<Text as='p' fontSize='md' marginTop='2'>
					{description}
				</Text>
			</Box>
			<CustomModal
				size='6xl'
				header='Movie'
				isOpen={isOpen}
				onClose={onClose}
				body={<Movie />}
			/>
		</WrapItem>
	);
};

export default MovieItem;
