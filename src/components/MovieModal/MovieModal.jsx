import React, { useEffect, useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Image from 'react-bootstrap/Image';
import './MovieModal.css';
import CloseButton from 'react-bootstrap/CloseButton';

const MovieModal = ({ show, onHide, movie }) => {
  const [trailerid, setTrailerId] = useState(null);
  console.log(movie.id)

  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json'
    }
  };

  useEffect (() => {
    const getMovieTrailerData = async () => {
      console.log(movie);
      const response = await fetch(`https://api.themoviedb.org/3/movie/${movie.id}/videos?language=en-US&api_key=872dd30be3603571249efb53bece9e3c`, options)
      const data = await response.json();
      console.log(data.results);

      const actualTrailerIndex = data.results.findIndex((result) => result.type === 'Trailer');
      if (actualTrailerIndex !== -1) {
        setTrailerId(data.results[actualTrailerIndex].key);
      } else {
        console.error('No trailer found for this specific movie')
        setTrailerId(data.results[0].key)
      }
      console.log(trailerid);
    };
    if (movie.id) {
      getMovieTrailerData();
    }
  }, [movie]);

  const trailerUrl = `https://www.youtube.com/embed/${trailerid}`;


  return (
    <Modal show={show} onHide={onHide} className='movie-modal'>

      <Modal.Body className='modal-card-details' >
        <Modal.Header className='modal-header'>
          <CloseButton onClick={onHide} className='close-button'/>
        </Modal.Header>
        <Modal.Title className='movie-title-name'>{movie.title}</Modal.Title>
        <Image src={movie.backdrop_path ? `https://image.tmdb.org/t/p/w500${movie.backdrop_path}` : null} alt="Movie Backdrop" className="movie-modal-image" />
        <h4 className='movie-release-date grey-text'>Release Date: {movie.release_date}</h4>
        <h5 className='movie-rating grey-text'>Rating: <span className='golden-star'>&#x2605;</span> {movie.vote_average}</h5>
        <div className='movie-overview-text'>
          <p className='movie-storyline grey-text'>{movie.overview}</p>
        </div>
        <iframe width='90%' height='30%'
        src={trailerUrl} className='movie-trailer' allowFullScreen='true'></iframe>
      </Modal.Body>
    </Modal>
  );
};

export default MovieModal;
