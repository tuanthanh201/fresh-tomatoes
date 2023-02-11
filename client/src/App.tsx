import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import ErrorPage from './components/error/Error';
import MovieListContainer from './components/container/MovieListContainer';
import { MovieListTitles } from './types';
import { useEffect } from 'react';
import { getMyProfile } from './store/auth/actions';
import { Flex, Spinner } from '@chakra-ui/react';
import { useAppSelector, useAppDispatch } from './hooks/useRedux';

const router = createBrowserRouter([
	{
		path: '/',
		element: <MovieListContainer key={1} title={MovieListTitles.POPULAR} />,
		errorElement: <ErrorPage />,
	},
	{
		path: '/trending',
		element: <MovieListContainer key={2} title={MovieListTitles.TRENDING} />,
	},
	{
		path: '/explore',
		element: <MovieListContainer key={3} title={MovieListTitles.EXPLORE} />,
	},
	{
		path: '/favourites',
		element: <MovieListContainer key={4} title={MovieListTitles.FAVOURITES} />,
	},
]);

const App = () => {
	const { loading } = useAppSelector((state) => state.auth);
	const dispatch = useAppDispatch();
	useEffect(() => {
		dispatch(getMyProfile());
	}, [dispatch]);

	return loading ? (
		<Flex
			width='100vw'
			height='100vh'
			alignItems='center'
			justifyContent='center'
		>
			<Spinner size='xl' />
		</Flex>
	) : (
		<RouterProvider router={router} />
	);
};

export default App;
