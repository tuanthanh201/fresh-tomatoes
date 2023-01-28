import MovieList, { MovieListTitles } from '../menu/MovieList';
import SideBar from '../sidebar/SideBar';

interface MovieListContainerProps {
	title: MovieListTitles;
}

const MovieListContainer = ({ title }: MovieListContainerProps) => {
	return (
		<SideBar>
			<MovieList title={title} />
		</SideBar>
	);
};

export default MovieListContainer;
