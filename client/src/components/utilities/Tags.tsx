import {
	HStack,
	SpaceProps,
	Tag,
	VStack,
	useColorModeValue,
} from '@chakra-ui/react';
import { Genre } from '../../types';

const LIMIT = 4;

interface TagsProps {
	tags: Genre[];
	marginTop?: SpaceProps['marginTop'];
}

const SingleRow = ({ tags, marginTop }: TagsProps) => {
	const tagColor = useColorModeValue('orange', 'purple');
	return (
		<HStack spacing={2} marginTop={marginTop}>
			{tags.map((tag) => {
				return (
					<Tag
						size={'md'}
						variant='solid'
						colorScheme={tagColor}
						key={tag.uuid}
					>
						{tag.name}
					</Tag>
				);
			})}
		</HStack>
	);
};

const DoubleRows = ({ tags, marginTop }: TagsProps) => {
	const firstHalf = tags.slice(0, tags.length / 2);
	const secondHalf = tags.slice(tags.length / 2);
	const tagColor = useColorModeValue('orange', 'purple');
	return (
		<VStack alignItems='flex-start'>
			<HStack spacing={2} marginTop={marginTop}>
				{firstHalf.map((tag) => {
					return (
						<Tag
							size={'md'}
							variant='solid'
							colorScheme={tagColor}
							key={tag.uuid}
						>
							{tag.name}
						</Tag>
					);
				})}
			</HStack>
			<HStack spacing={2} marginTop={marginTop}>
				{secondHalf.map((tag) => {
					return (
						<Tag
							size={'md'}
							variant='solid'
							colorScheme={tagColor}
							key={tag.uuid}
						>
							{tag.name}
						</Tag>
					);
				})}
			</HStack>
		</VStack>
	);
};

const Tags = ({ tags, marginTop }: TagsProps) => {
	return tags.length >= LIMIT ? (
		<DoubleRows tags={tags} marginTop={marginTop} />
	) : (
		<SingleRow tags={tags} marginTop={marginTop} />
	);
};

export default Tags;
