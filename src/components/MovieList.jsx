// import './MovieList.css';
// import MovieCards from './MovieCards';

// const MovieList = () => {
//     return (
//         <>
//         <div className="movie-list">
//             <MovieCards />
//         </div>
//         </>
//     )
// }

// export default MovieList

import React, { useEffect, useState, useRef } from 'react';
import MovieCards from './MovieCards';
import './MovieList.css';

const MovieList = ({ title, category }) => {
  const apiKey = import.meta.env.TMDB_API_KEY;
  const [apiData, setApiData] = useState([]);
  const cardsRef = useRef();
  const [currentPage, setCurrentPage] = useState(1);

  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: `Bearer ${apiKey}`,
    },
  };

  useEffect(() => {
    const fetchMovies = async () => {
      const response = await fetch(
        `https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=${currentPage}`,
        options
      );
      const data = await response.json();
      setApiData([...apiData, ...data.results]);
    };
    fetchMovies();
  }, [currentPage]);

  const loadMoreMovies = () => {
    setCurrentPage(currentPage + 1);
  };

  return (
    <>
      <div className="movie-list">
        <MovieCards movies={apiData} />
      </div>
      {apiData.length > 10 && <button onClick={loadMoreMovies}>Load More</button>}
    </>
  );
};

export default MovieList;
