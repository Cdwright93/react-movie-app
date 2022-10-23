import MovieSidebar from "../Components/MovieSidebar"
import { Outlet } from "react-router-dom"

const MovieLayout = () => {
    return (
        <div className="movie-layout">
            <MovieSidebar />
            <div className="movie-content">
                <Outlet />
            </div>
        </div>
    )
}

export default MovieLayout
