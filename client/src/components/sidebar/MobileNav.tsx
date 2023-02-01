import {
	Avatar,
	Box,
	Button,
	Flex,
	FlexProps,
	HStack,
	IconButton,
	Input,
	InputGroup,
	InputLeftElement,
	Menu,
	MenuButton,
	MenuItem,
	MenuList,
	Text,
	useColorMode,
	useColorModeValue,
	VStack,
} from '@chakra-ui/react';
import { MoonIcon, SearchIcon, SunIcon } from '@chakra-ui/icons';
import { FiChevronDown, FiMenu } from 'react-icons/fi';
import Login from '../authentication/Login';
import Register from '../authentication/Register';

interface MobileProps extends FlexProps {
	onOpen: () => void;
}
const MobileNav = ({ onOpen, ...rest }: MobileProps) => {
	const { colorMode, toggleColorMode } = useColorMode();

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

			<InputGroup mr='5' maxWidth='80%'>
				<InputLeftElement
					pointerEvents='none'
					children={<SearchIcon color='gray.300' />}
				/>
				<Input type='search' placeholder='Search for movies...' />
			</InputGroup>

			<HStack spacing={{ base: '0', md: '6' }}>
				<Button size='md' variant='ghost' onClick={toggleColorMode}>
					{colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
				</Button>
				<Flex alignItems={'center'}>
					{/* TODO: Add authentication */}
					{/* <Register />
					<Login /> */}
					<Menu>
						<MenuButton
							py={2}
							transition='all 0.3s'
							_focus={{ boxShadow: 'none' }}
						>
							<HStack>
								<Avatar
									size={'sm'}
									src={
										'https://www.thehappycatsite.com/wp-content/uploads/2017/12/White-Cat-HC-long.jpg'
									}
								/>
								<VStack
									display={{ base: 'none', md: 'flex' }}
									alignItems='flex-start'
									spacing='1px'
									ml='2'
								>
									<Text fontSize='sm'>John Doe</Text>
									<Text fontSize='xs' color='gray.600'>
										Admin
									</Text>
								</VStack>
								<Box display={{ base: 'none', md: 'flex' }}>
									<FiChevronDown />
								</Box>
							</HStack>
						</MenuButton>
						<MenuList
							bg={useColorModeValue('white', 'gray.900')}
							borderColor={useColorModeValue('gray.200', 'gray.700')}
						>
							<MenuItem>Profile</MenuItem>
							<MenuItem>Sign out</MenuItem>
						</MenuList>
					</Menu>
				</Flex>
			</HStack>
		</Flex>
	);
};

export default MobileNav;
