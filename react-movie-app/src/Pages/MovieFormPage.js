import { useState, setState } from "react";
//Add a state variable, a <label> and text <input> field to save the title user input.
const MovieFormPage = (props) => {
	const [movie, setMovie] = useState({
		title: "",
	});

	const handleChange = (e) => {
		setMovie({
			...movie,
			[e.target.name]: e.target.value,
		});
	};

	return (
		<div>
			<h1>Movie Form Page</h1>
			<label htmlFor="title">Title: </label>
			<input
				type="text"
				id="title"
				name="title"
				value={movie.title}
				onChange={handleChange}
			/>
			<button
				onClick={(event) => {
					props.handleAddMovie(movie.title);
				}}
			>
				Add Movie
			</button>
		</div>
	);
};

export default MovieFormPage;
