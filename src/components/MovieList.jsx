import './MovieList.css';
import MovieCards from './MovieCards';

const MovieList = () => {
    return (
        <>
        <h1>Movie List</h1>
        <div className="movie-list">
            <MovieCards />
        </div>
        </>
    )
}

export default MovieList
