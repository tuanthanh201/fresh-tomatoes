import { Box } from '@chakra-ui/react';
import Select from 'react-select';

const options = [
	{ value: 'chocolate', label: 'Movie name' },
	{ value: 'chocolate', label: 'Movie name' },
	{ value: 'chocolate', label: 'Movie name' },
	{ value: 'chocolate', label: 'Movie name' },
	{ value: 'chocolate', label: 'Movie name' },
	{ value: 'chocolate', label: 'Movie name' },
	{ value: 'chocolate', label: 'Movie name' },
	{ value: 'chocolate', label: 'Movie name' },
	{ value: 'chocolate', label: 'Movie name' },
	{ value: 'chocolate', label: 'Movie name' },
	{ value: 'chocolate', label: 'Movie name' },
	{ value: 'chocolate', label: 'Movie name' },
];

const SearchBar = () => {
	return (
		<Box mr={5} width='80%'>
			<Select
				maxMenuHeight={220}
				menuPlacement='auto'
				// menuPortalTarget={menuPortalTarget}
				options={options}
			/>
		</Box>
	);
};

export default SearchBar;
