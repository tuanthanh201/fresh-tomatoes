import { HStack, SpaceProps, Tag } from '@chakra-ui/react';
import { Genre } from '../../types';

interface TagsProps {
	tags: Genre[];
	marginTop?: SpaceProps['marginTop'];
}

const Tags = (props: TagsProps) => {
	console.log(props)
	return (
		<HStack spacing={2} marginTop={props.marginTop}>
			{props.tags.map((tag) => {
				return (
					<Tag size={'md'} variant='solid' colorScheme='orange' key={tag.uuid}>
						{tag.name}
					</Tag>
				);
			})}
		</HStack>
	);
};

export default Tags;
