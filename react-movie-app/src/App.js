import "./App.css";
import NavBar from "./Components/NavBar";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import NavLayout from "./Layouts/NavLayout";
import HomePage from "./Pages/HomePage";
import MovieLayout from "./Layouts/MovieLayout";
import MovieListPage from "./Pages/MovieListPage";

const router = createBrowserRouter([
	{
		path: "/",
		element: <NavLayout />,
		children: [
			{
				index: true,
				element: <HomePage />,
			},
			{
				path: "/movies",
				element: <MovieLayout />,
				children: [
					{
						index: true,
						element: <MovieListPage />,
					},
				],
			},
		],
	},
]);

const App = () => {
	return (
		<div className="App-header">
			<RouterProvider router={router} />
		</div>
	);
};

export default App;
