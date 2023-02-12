import {
	Box,
	Flex,
	FlexProps,
	HStack,
	IconButton,
	Menu,
	MenuButton,
	MenuItem,
	MenuList,
	Text,
	useColorMode,
	useColorModeValue,
	VStack,
} from '@chakra-ui/react';
import { MoonIcon, SunIcon } from '@chakra-ui/icons';
import { FiChevronDown, FiMenu } from 'react-icons/fi';
import Login from '../authentication/Login';
import Register from '../authentication/Register';
import SearchBar from './SearchBar';
import { useAppDispatch, useAppSelector } from '../../hooks/useRedux';
import { clearUser } from '../../store/auth/authSlice';

interface MobileProps extends FlexProps {
	onOpen: () => void;
}

const MobileNav = ({ onOpen, ...rest }: MobileProps) => {
	const { toggleColorMode } = useColorMode();
	const { username, role, isAuthenticated } = useAppSelector(
		(state) => state.auth
	);
	const dispatch = useAppDispatch();

	const bgColor = useColorModeValue('white', 'black');
	const borderColor = useColorModeValue('gray.200', 'gray.700');

	return (
		<Flex
			ml={{ base: 0, md: 60 }}
			px={{ base: 4, md: 4 }}
			height='20'
			alignItems='center'
			bg={useColorModeValue('white', 'gray.900')}
			borderBottomWidth='1px'
			borderBottomColor={useColorModeValue('gray.200', 'gray.700')}
			justifyContent={{ base: 'space-between' }}
			{...rest}
		>
			<IconButton
				display={{ base: 'flex', md: 'none' }}
				onClick={onOpen}
				variant='outline'
				aria-label='open menu'
				icon={<FiMenu />}
			/>

			<Text
				display={{ base: 'flex', md: 'none' }}
				fontSize='2xl'
				fontFamily='monospace'
				fontWeight='bold'
			>
				Fresh Tomatoes
			</Text>

			<SearchBar />

			<HStack spacing={{ base: '0', md: '6' }}>
				<IconButton
					aria-label='Toggle theme'
					size='md'
					variant='ghost'
					color={useColorModeValue('purple', 'orange')}
					onClick={toggleColorMode}
					icon={useColorModeValue(<MoonIcon />, <SunIcon />)}
				/>
				<Flex alignItems={'center'}>
					{!isAuthenticated ? <Register /> : null}
					{!isAuthenticated ? <Login /> : null}
					{isAuthenticated ? (
						<Menu>
							<MenuButton
								py={2}
								transition='all 0.3s'
								_focus={{ boxShadow: 'none' }}
							>
								<HStack>
									{/* <Avatar
										size={'sm'}
										src={
											'https://www.thehappycatsite.com/wp-content/uploads/2017/12/White-Cat-HC-long.jpg'
										}
									/> */}
									<VStack
										display={{ base: 'none', md: 'flex' }}
										alignItems='flex-start'
										spacing='1px'
										ml='2'
									>
										<Text fontSize='sm'>{username}</Text>
										<Text fontSize='xs' color='gray.600'>
											{role}
										</Text>
									</VStack>
									<Box display={{ base: 'none', md: 'flex' }}>
										<FiChevronDown />
									</Box>
								</HStack>
							</MenuButton>
							<MenuList bg={bgColor} borderColor={borderColor}>
								<MenuItem
									bg={bgColor}
									_hover={{
										backgroundColor: borderColor,
									}}
								>
									Profile
								</MenuItem>
								<MenuItem
									bg={bgColor}
									_hover={{
										backgroundColor: borderColor,
									}}
									onClick={() => {
										localStorage.removeItem('token');
										dispatch(clearUser());
									}}
								>
									Sign out
								</MenuItem>
							</MenuList>
						</Menu>
					) : null}
				</Flex>
			</HStack>
		</Flex>
	);
};

export default MobileNav;
