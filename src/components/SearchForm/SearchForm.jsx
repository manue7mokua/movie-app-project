import './SearchForm.css'
import React, { useEffect, useState, useRef } from 'react';

const SearchForm = ({ onSearch }) => {
    const [query, setQuery] = useState('');
    const handleSubmit = (e) => {
      e.preventDefault();
      onSearch(query);
    };
    return (
      <div className='search-form-box'>
        <form onSubmit={handleSubmit} className="search-form">
        <input
          type="text"
          placeholder="Search for a movie..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className='search-form-input'
        />
        <button type="submit" className='search-submit-button'>Search</button>
      </form>
      </div>

    );
};

export default SearchForm
