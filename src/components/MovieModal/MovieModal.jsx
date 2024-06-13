import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Image from 'react-bootstrap/Image';
import './MovieModal.css';
import CloseButton from 'react-bootstrap/CloseButton';

const MovieModal = ({ show, onHide, movie }) => {
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
      </Modal.Body>
    </Modal>
  );
};

export default MovieModal;
