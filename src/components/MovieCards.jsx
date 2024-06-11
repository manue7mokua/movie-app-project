import React, {useEffect, useRef} from 'react'
import './MovieCards.css'
import PropTypes from 'prop-types'

const MovieCards = (props) => {
    // const cardsRef = useRef();

    // const handleWheel = (event) => {
    //     event.preventDefault();
    //     cardsRef.current.scrollLeft += event.deltaY;
    // }

    // useEffect(() => {
    //     cardsRef.current.addEventListener('wheel', handleWheel);
    // }, [])
  return (
    <div className='movie-cards'>
        <p className='movie-name'>{props.name}</p>
        <img className='movie-image' src={props.image}/>
        <p className='movie-rating'>&#x2605;{props.rating}</p>
        <p className='movie-release'>Release Date: {props.release}</p>
    </div>
  )
}

MovieCards.propTypes = {
    name: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
    release: PropTypes.number.isRequired,
}


export default MovieCards
