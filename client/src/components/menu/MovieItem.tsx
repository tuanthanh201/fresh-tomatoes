import { Box, Heading, Image, Link, Text, WrapItem } from '@chakra-ui/react';
import Tags from '../utilities/Tags';

interface MovieItemProps {
	img: string;
	title: string;
	description: string;
	tags: string[];
}

const MovieItem = (props: MovieItemProps) => {
	const { description, img, tags, title } = props;

	return (
		<WrapItem width={{ base: '100%', sm: '45%', md: '45%', lg: '30%' }}>
			<Box w='95%'>
				<Box boxSize='auto' maxHeight='425px' borderRadius='lg' overflow='hidden'>
					<Link textDecoration='none' _hover={{ textDecoration: 'none' }}>
						<Image
							transform='scale(1.0)'
							src={img}
							alt='some text'
							objectFit='contain'
							width='100%'
							transition='0.3s ease-in-out'
							_hover={{
								transform: 'scale(1.05)',
							}}
						/>
					</Link>
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
		</WrapItem>
	);
};

export default MovieItem;
