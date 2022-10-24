import { Link } from "react-router-dom";


const MovieSideBar = (props) => {
	const { movieList } = props;
	return (
		<div className="movie-sidebar">
			<h2>Movie Sidebar</h2>
			{props.movieList.map((movieItem) => {
				return <Link to={`/movies/${movieItem.Title}`}>{movieItem.Title}</Link>;
			})}
		</div>
	);
};

export default MovieSideBar