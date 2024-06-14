import React, { useEffect, useState, useRef } from 'react';
import MovieCards from '../MovieCards/MovieCards';
import './MovieList.css';
import SearchForm from '../SearchForm/SearchForm';
import { Button } from 'react-bootstrap';

const MovieList = ({ title }) => {
  const apiKey = import.meta.env.TMDB_API_KEY;
  const [apiData, setApiData] = useState([]);
  const cardsRef = useRef();
  const [currentPage, setCurrentPage] = useState(1);

  const [searchResults, setSearchResults] = useState([]); // Add state for search results
  const [searchQuery, setSearchQuery] = useState(''); // state for search query
  const [showSearchBar, setShowSearchBar] = useState(false); // state to show/hide search bar

  const [showNowPlaying, setShowNowPlaying] = useState(false); // state to show/hide now playing

  const [selectedSortOption, setSelectedSortOption] = useState('');

  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json'
    },
  };

  useEffect(() => {
    if (showNowPlaying) {
      const fetchNowPlayingMovies = async () => {
        const response = await fetch(`https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=${currentPage}&api_key=872dd30be3603571249efb53bece9e3c`, options);
        const data = await response.json();
        setApiData(data.results);
      };
      fetchNowPlayingMovies();
    } else {
      const fetchMovies = async () => {
          const response = await fetch(
          `https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=${currentPage}&sort_by=${selectedSortOption}&api_key=872dd30be3603571249efb53bece9e3c`,
          options
          );
          const data = await response.json();
          console.log(selectedSortOption)
          console.log(apiData);
          setApiData([...apiData, ...data.results]);
        };
        fetchMovies();
    };
  }, [currentPage, selectedSortOption]);

  const loadMoreMovies = () => {
    setCurrentPage(currentPage + 1);
  };

  // Add useEffect to handle search results
  useEffect(() => {
    if (searchQuery) {
      const fetchSearchResults = async () => {
        const response = await fetch(`https://api.themoviedb.org/3/search/movie?query=${searchQuery}&include_adult=false&language=en-US&page=${currentPage}&api_key=872dd30be3603571249efb53bece9e3c`, options);
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

  const toggleShowSearchBar = () => {
    setShowSearchBar((prevShowSearchBar) => !prevShowSearchBar);
    if (!showSearchBar) {
      setShowNowPlaying(false);
      clearSearchResults();
    }
  };

  const handleSortOptionChange = (event) => {
    setSelectedSortOption(event.target.value);
    setApiData([]);
  };

  return (
    <div className='movie-container'>

    <div className="d-flex justify-content-between">
        <h2>{title}</h2>
        <Button variant="primary" onClick={toggleShowSearchBar} className='search-button'>
          {showSearchBar ? 'Now Playing' : 'Search'}
        </Button>
      </div>
      {showSearchBar && <SearchForm onSearch={handleSearch} onClear={clearSearchResults} query={searchQuery} className='search-form'/>}
      {!showSearchBar && (
        <select value={selectedSortOption} onChange={handleSortOptionChange} className='sort-dropdown'>
          <option value="title.asc">All Movies</option>
          <option value="primary_release_date.desc">Release Date</option>
          <option value="vote_average.desc">Vote Average</option>
          <option value="popularity.desc">Popularity</option>
        </select>
      )}

      <div className="movie-list">
        {showSearchBar ? (
          <MovieCards movies={searchResults} />
        ) : (
          <MovieCards movies={apiData} />
        )}
      </div>

      {(!showSearchBar && apiData.length > 10) && <button className='load-more-button' onClick={loadMoreMovies}>More Movies</button>}

    </div>
  );
};

export default MovieList;
