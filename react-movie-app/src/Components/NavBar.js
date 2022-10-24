import { Link } from "react-router-dom";

const NavBar = () => {
	return (
		<div className="nav-bar">
			<div className="nav-content">
				<Link to="/"> Home </Link>
				<Link to="/movies"> Movie List </Link>
				<Link to="/movies/form"> Add Movie </Link>
			</div>
		</div>
	);
};

export default NavBar;
