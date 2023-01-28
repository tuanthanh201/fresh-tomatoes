import { Flex, FlexProps, Link, Icon } from '@chakra-ui/react';
import { NavLink } from 'react-router-dom';
import { IconType } from 'react-icons';

interface NavItemProps extends FlexProps {
	icon: IconType;
	to: string;
	children: string;
}

const NavItem = ({ icon, to, children, ...rest }: NavItemProps) => {
	return (
		<Link
			as={NavLink}
			to={to}
			style={{ textDecoration: 'none' }}
			_focus={{ boxShadow: 'none' }}
			_activeLink={{
				color: 'cyan.500',
				fontWeight: 'bold',
			}}
		>
			<Flex
				align='center'
				p='4'
				mx='4'
				borderRadius='lg'
				role='group'
				cursor='pointer'
				_hover={{
					bg: 'cyan.400',
					color: 'white',
				}}
				{...rest}
			>
				{icon && (
					<Icon
						mr='4'
						fontSize='16'
						_groupHover={{
							color: 'white',
						}}
						as={icon}
					/>
				)}
				{children}
			</Flex>
		</Link>
	);
};

export default NavItem;
