import React, { useEffect, useState, useRef } from 'react';
import MovieCards from './MovieCards';
import './MovieList.css';
import SearchForm from './SearchForm';
import { Button } from 'react-bootstrap';

const MovieList = ({ title, category,  }) => {
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
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkMDdlMTdmMjJjZWE3ODlkNTE1Y2NjNTdiOWU5YTIyZiIsInN1YiI6IjY2Njc2OWM3ODcxNmViNWY2ODk5ZmJmNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.lXbFgXHgPrK-rMNigU1J6EBWxavwnx1JX77MflmAQaM'
    },
  };

  useEffect(() => {
    const fetchMovies = async () => {
            const response = await fetch(
            `https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=${currentPage}&api_key=${apiKey}`,
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
        const response = await fetch(`https://api.themoviedb.org/3/search/movie?query=${searchQuery}&include_adult=false&language=en-US&page=${currentPage}&`, options);
        const data = await response.json();
        console.log(data)
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

  const [showSearchBar, setShowSearchBar] = useState(false); // Add state to show/hide search bar
  const toggleShowSearchBar = () => {
    setShowSearchBar((prevShowSearchBar) => !prevShowSearchBar);
    if (!showSearchBar) {
      clearSearchResults();
    }
  };

  return (
    <>

    <div className="d-flex justify-content-between">
        <h2>{title}</h2>
        <Button variant="primary" onClick={toggleShowSearchBar}>
          {showSearchBar ? 'Now Playing' : 'Search'}
        </Button>
      </div>
      {showSearchBar && <SearchForm onSearch={handleSearch} onClear={clearSearchResults} query={searchQuery} />}
      <div className="movie-list">
        {showSearchBar ? (
          <MovieCards movies={searchResults} />
        ) : (
          <MovieCards movies={apiData} />
        )}
      </div>
      {(!showSearchBar && apiData.length > 10) && <button onClick={loadMoreMovies}>Load Movies</button>}

    </>
  );
};

export default MovieList;
