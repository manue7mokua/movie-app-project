import './SearchForm.css'
import React, { useEffect, useState, useRef } from 'react';

const SearchForm = ({ onSearch }) => {
    const [query, setQuery] = useState('');
    const handleSubmit = (e) => {
      e.preventDefault();
      onSearch(query);
    };
    return (
      <form onSubmit={handleSubmit} className="search-form">
        <input
          type="text"
          placeholder="Search for a movie..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button type="submit">Search</button>
      </form>
    );
};

export default SearchForm
