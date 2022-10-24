import { Link } from "react-router-dom";


const MovieCard = (props) => {
	const { movie } = props;

	return (
		<div className="movie-list-card">
			<div className="movie-card-content">
				<div className="movie-card-header">
					<h3 className="movie-card-title">{movie.Title}</h3>
					<h4 className="movie-card-year">{movie.Year}</h4>
				</div>
				{/* <div className="movie-card-body">
					<img src={movie.Poster} alt={movie.title} />
				</div> */}
				<div className="movie-card-footer">
					<Link to={`/movies/${movie.Title}`}>More Info</Link>
				</div>
			</div>
		</div>
	);
};

export default MovieCard;

// Path: react-movie-app/src/Components/MovieList.js
