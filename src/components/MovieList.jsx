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
import SearchForm from './SearchForm';

const MovieList = ({ title, category }) => {
  const apiKey = import.meta.env.TMDB_API_KEY;
  const [apiData, setApiData] = useState([]);
  const cardsRef = useRef();
  const [currentPage, setCurrentPage] = useState(1);

  const [searchResults, setSearchResults] = useState([]); // Add state for search results
  const [searchQuery, setSearchQuery] = useState(''); // Add state for search query

  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkMDdlMTdmMjJjZWE3ODlkNTE1Y2NjNTdiOWU5YTIyZiIsInN1YiI6IjY2Njc2OWM3ODcxNmViNWY2ODk5ZmJmNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.lXbFgXHgPrK-rMNigU1J6EBWxavwnx1JX77MflmAQaM `,
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

  // Add useEffect to handle search results
  useEffect(() => {
    if (searchQuery) {
      const fetchSearchResults = async () => {
        const response = await fetch(`https://api.themoviedb.org/3/search/movie?query=${searchQuery}&include_adult=false&language=en-US&page=${currentPage}`, options);
        console.log(response);
        const data = await response.json();
        setSearchResults(data.results);
      };
      fetchSearchResults();
    }
  }, [searchQuery]);

  const handleSearch = (query) => {
    setSearchQuery(query);
  };

  // Function to clear search results and update current page
  const clearSearchResults = () => {
    setSearchResults([]);
    setCurrentPage(1);
  };

  return (
    <>
      {/* Add a SearchForm component */}
      <SearchForm onSearch={handleSearch} onClear={clearSearchResults} query={searchQuery} />

      <div className="movie-list">
        {/* Check if there are any search results, if so display them */}
        {searchResults && searchResults.length > 0 ? (
          <MovieCards movies={searchResults} />
        ) : (
          /* Otherwise display regular movies */
          <MovieCards movies={apiData} />
        )}
      </div>

      {apiData.length > 10 && <button onClick={loadMoreMovies}>Load More</button>}

    </>
  );
};

export default MovieList;
