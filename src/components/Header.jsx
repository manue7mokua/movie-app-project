import React from 'react'
import './Header.css'

const Header = () => {
  return (
    <div className='header-content'>
        <h1 class='golden-rod-text'>SpyMovies</h1>
        <div className='header-forms'>
            <span>
            <form id='search-form'>
                <input type="text" id="text-input" name="text-input" placeholder="What you watching today?..."/>
                <button type="submit">Search</button>
            </form>
            </span>
            <span>
                <select id="sort-by" name="sort-by">
                    <option value="title">Title</option>
                    <option value="rating">Top-Rated</option>
                    <option value="year">Popular</option>
                    <option value="trending">Trending</option>
                </select>
            </span>

        </div>

    </div>
  )
}

export default Header
