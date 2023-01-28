import { Container, Heading, Text } from '@chakra-ui/react';
import { isRouteErrorResponse, useRouteError } from 'react-router-dom';

const ErrorPage = () => {
	const error = useRouteError();
	let errorHeader = 'Oops!';
	let errorText = 'Sorry, an unexpected error has occurred.';
	if (isRouteErrorResponse(error)) {
		errorHeader = `${error.status} - ${error.statusText}`;
		errorText = error.data;
	}
	console.error(error);

	return (
		<Container maxW={'7xl'} p='2' centerContent>
			<Heading as='h2'>{errorHeader}</Heading>
			<Text>{errorText}</Text>
		</Container>
	);
};

export default ErrorPage;
