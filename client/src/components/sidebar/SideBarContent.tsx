import {
	Box,
	BoxProps,
	CloseButton,
	Flex,
	Text,
	useColorModeValue,
} from '@chakra-ui/react';
import { IconType } from 'react-icons';
import { FiCompass, FiHome, FiStar, FiTrendingUp } from 'react-icons/fi';
import NavItem from './NavItem';

interface LinkItemProps {
	name: string;
	to: string;
	icon: IconType;
}
const LinkItems: Array<LinkItemProps> = [
	{ name: 'Home', to: '/', icon: FiHome },
	{ name: 'Trending', to: '/trending', icon: FiTrendingUp },
	{ name: 'Explore', to: '/explore', icon: FiCompass },
	{ name: 'Favourites', to: '/favourites', icon: FiStar },
];

interface SidebarContentProps extends BoxProps {
	onClose: () => void;
}

const SidebarContent = ({ onClose, ...rest }: SidebarContentProps) => {
	return (
		<Box
			bg={useColorModeValue('white', 'gray.900')}
			borderRight='1px'
			borderRightColor={useColorModeValue('gray.200', 'gray.700')}
			w={{ base: 'full', md: 60 }}
			pos='fixed'
			h='full'
			{...rest}
		>
			<Flex h='20' alignItems='center' mx='8' justifyContent='space-between'>
				<Text fontSize='2xl' fontFamily='monospace' fontWeight='bold'>
					Fresh Tomatoes
				</Text>
				<CloseButton display={{ base: 'flex', md: 'none' }} onClick={onClose} />
			</Flex>
			{LinkItems.map((link) => (
				<NavItem key={link.name} icon={link.icon} to={link.to}>
					{link.name}
				</NavItem>
			))}
		</Box>
	);
};

export default SidebarContent;
