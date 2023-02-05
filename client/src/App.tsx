import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import ErrorPage from './components/error/Error';
import MovieListContainer from './components/container/MovieListContainer';
import { MovieListTitles } from './types';

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

function App() {
	return <RouterProvider router={router} />;
}

export default App;
