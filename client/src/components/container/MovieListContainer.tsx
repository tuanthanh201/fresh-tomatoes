import { MovieListTitles } from '../../types';
import MovieList from '../menu/MovieList';
import SideBar from '../sidebar/SideBar';
import Toast from '../toast/Toast';

interface MovieListContainerProps {
	title: MovieListTitles;
}

const MovieListContainer = ({ title }: MovieListContainerProps) => {
	return (
		<SideBar>
			<Toast />
			<MovieList title={title} />
		</SideBar>
	);
};

export default MovieListContainer;
