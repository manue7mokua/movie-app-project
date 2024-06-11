import React, {useEffect, useRef, useState} from 'react'
import './MovieCards.css'

const MovieCards = ({title, category}) => {
    const [apiData, setApiData] = useState([]);
    const cardsRef = useRef();

    // const handleWheel = (event) => {
    //     event.preventDefault();
    //     cardsRef.current.scrollLeft += event.deltaY;
    // }

    const options = {
            method: 'GET',
            headers: {
            accept: 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkMDdlMTdmMjJjZWE3ODlkNTE1Y2NjNTdiOWU5YTIyZiIsInN1YiI6IjY2Njc2OWM3ODcxNmViNWY2ODk5ZmJmNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.lXbFgXHgPrK-rMNigU1J6EBWxavwnx1JX77MflmAQaM'
            }
    };


    useEffect(() => {
        fetch('https://api.themoviedb.org/3/trending/movie/day?language=en-US', options)
            .then(response => response.json())
            .then(response => setApiData(response.results))
            .catch(err => console.error(err));

        // cardsRef.current.addEventListener('wheel', handleWheel);
    })



    return (
        <>
        {/* <h2>{title?title:"Popular on Flixster"}</h2> */}
            {apiData.map((movie, index) => {
                return (
                    <div className='movie-card-item' key={index} ref={cardsRef}>
                    <img className='movie-image' src={`https://image.tmdb.org/t/p/w500`+movie.poster_path} alt='' />
                    <p className='movie-title'>{movie.original_title}</p>
                    <p className='movie-rating'>Rating: <span className='orange-star'>&#x2605;</span>{movie.vote_average}</p>
                    <p className='movie-release-date'>Released: {movie.release_date}</p>
                    </div>
                )}
            )}
        </>

    )
}


export default MovieCards
