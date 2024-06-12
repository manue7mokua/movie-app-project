// import React, {useEffect, useRef, useState} from 'react'
// import './MovieCards.css'

// const MovieCards = ({title, category}) => {
//     const apiKey = import.meta.env.TMDB_API_KEY;
//     const [apiData, setApiData] = useState([]);
//     const cardsRef = useRef();
//     const [currentPage, setCurrentPage] = useState(1);

//     // const [searchResults, setSearchResults] = useState([]);
//     // const [searchQuery, setSearchQuery] = useState('');


//     const options = {
//             method: 'GET',
//             headers: {
//             accept: 'application/json',
//             Authorization: `Bearer ${apiKey}`
//             }
//     };

//     useEffect(() => {
//         const fetchMovies = async () => {
//           const response = await fetch(
//             `https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=${currentPage}`,
//             options
//           );
//           const data = await response.json();
//           setApiData([...apiData, ...data.results]);
//         };
//         fetchMovies();
//       }, [currentPage]); // Add currentPage to the dependency array

//       const loadMoreMovies = () => {
//         setCurrentPage(currentPage + 1);
//       };


//     return (
//         <>
//         {/* <h2>{title?title:"Popular on Flixster"}</h2> */}
//             {apiData.map((movie, index) => {
//                 return (
//                     <div className='movie-card-item' key={index} ref={cardsRef}>
//                     <img className='movie-image' src={`https://image.tmdb.org/t/p/w500`+movie.poster_path} alt='' />
//                     <p className='movie-title'>{movie.name}</p>
//                     <p className='movie-rating'>Rating: <span className='orange-star'>&#x2605;</span>{movie.vote_average}</p>
//                     <p className='movie-release-date'>Released: {movie.first_air_date}</p>
//                     </div>
//                 )}
//             )}
//         <button onClick={loadMoreMovies}>Load More</button>
//         </>

//     )
// }


// export default MovieCards


import React from 'react';
import './MovieCards.css';

const MovieCards = ({ movies }) => {
  return (
    <>
      {movies.map((movie, index) => {
        return (
          <div className="movie-card-item" key={index}>
            <img
              className="movie-image"
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              alt=""
            />
            <p className="movie-title">{movie.name}</p>
            <p className="movie-rating">Rating: {movie.vote_average}</p>
            <p className="movie-release-date">Released: {movie.first_air_date}</p>
          </div>
        );
      })}
    </>
  );
};

export default MovieCards;
