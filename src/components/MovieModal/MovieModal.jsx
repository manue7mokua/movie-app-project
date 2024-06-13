import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Image from 'react-bootstrap/Image';
import Button from 'react-bootstrap/Button';
import './MovieModal.css';

const MovieModal = ({ show, onHide, movie }) => {
  return (
    <Modal show={show} onHide={onHide} className='movie-modal'>

      <Modal.Body className='modal-card-details' >
        <Modal.Header closeButton className='modal-header'>
          <Modal.Title>{movie.title}</Modal.Title>
        </Modal.Header>

        <Image src={movie.backdrop_path ? `https://image.tmdb.org/t/p/w500${movie.backdrop_path}` : null} alt="Movie Backdrop" className="movie-modal-image" />
        <h4>Runtime: {movie.runtime} minutes</h4>
        <h4>Release Date: {movie.release_date}</h4>
        {/* <h4>Genres: {movie.genres.map((genre, index) => `${genre.name}${index !== movie.genres.length - 1 ? ', ' : ''}`)}</h4> */}
        <h4>Overview: {movie.overview}</h4>
      </Modal.Body>
    </Modal>
  );
};

export default MovieModal;
