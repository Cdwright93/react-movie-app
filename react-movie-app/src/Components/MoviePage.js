import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";

const MoviePage = (props) => {
	const { title } = useParams(props);
	const movie = props.movieList.find((movie) => movie.Title === title);

	return (
		<div className="movie-page">
			<div className="movie-page-content">
				<h2>{title}</h2>
				<div className="movie-page-body">
					<p>Director: {movie.Director}</p>
					<p>Actors: {movie.Actors}</p>
					<p>Plot: {movie.Plot}</p>
					<Link to="/movies">Back to Movie List</Link>
				</div>
			</div>
		</div>
	);
};

export default MoviePage;
