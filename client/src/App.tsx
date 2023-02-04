import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import ErrorPage from './components/error/Error';
import MovieListContainer from './components/container/MovieListContainer';
import { MovieListTitles } from './types';

const router = createBrowserRouter([
	{
		path: '/',
		element: <MovieListContainer title={MovieListTitles.POPULAR} />,
		errorElement: <ErrorPage />,
	},
	{
		path: '/trending',
		element: <MovieListContainer title={MovieListTitles.TRENDING} />,
	},
	{
		path: '/explore',
		element: <MovieListContainer title={MovieListTitles.EXPLORE} />,
	},
	{
		path: '/favourites',
		element: <MovieListContainer title={MovieListTitles.FAVOURITES} />,
	},
]);

function App() {
	return <RouterProvider router={router} />;
}

export default App;
