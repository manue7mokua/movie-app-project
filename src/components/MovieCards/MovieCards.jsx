import React, { useState} from 'react';
import './MovieCards.css';
import MovieModal from '../MovieModal/MovieModal';

const MovieCards = ({ movies }) => {
  const [movie, setMovie] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const handleCardClick = (movie) => {
    setIsModalOpen(!isModalOpen);
    setMovie(movie);
  };
  return (
    <>
        {movies.map((movie, index) => {
        return (
          <div className="movie-card-item" key={index} onClick={() => handleCardClick(movie)}>
            <img
              className="movie-image"
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              alt=""
            />
            <p className="movie-title">{movie.name}</p>
            <p className="movie-rating">Rating: &#x2605; {movie.vote_average}</p>
          </div>
        );
      })}

      {movie && ( // Only render the modal if movie is defined
        <MovieModal show={isModalOpen} onHide={handleCardClick} movie={movie} />
      )}

    </>
  );
};

export default MovieCards;
