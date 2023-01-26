import SideBar from './components/sidebar/SideBar';
import MovieList from './components/menu/MovieList';

function App() {
	return (
		<>
			<SideBar>
				{/* TODO: Add router */}
				<MovieList></MovieList>
			</SideBar>
		</>
	);
}

export default App;
