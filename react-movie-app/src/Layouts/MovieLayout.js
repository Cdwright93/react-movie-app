import MovieSideBar from "../Components/MovieSidebar"
import { Outlet } from "react-router-dom"

const MovieLayout = (props) => {
	const { movieList } = props;
	return (
		<div className="movie-layout">
			<MovieSideBar movieList={movieList} />
			<div className="movie-content">
				<Outlet />
			</div>
		</div>
	);
};

export default MovieLayout
