import React from 'react'
import './Header.css'
import SearchForm from '../SearchForm/SearchForm'
import logo_icon from '../../assets/logo.png'
import bell_icon from '../../assets/bell.png'
import profile_icon from '../../assets/profile.png'
import menu_icon from '../../assets/menu.png'

const Header = () => {
  return (
    <div className='header'>
        <div className='header-left'>
            <img src={logo_icon} alt='' className='app-logo'/>
            <ul>
                <li className='golden-rod-text medium-text'>Home</li>
                <li className='golden-rod-text medium-text'>Movies</li>
                <li className='golden-rod-text medium-text'>Movies</li>
                <li className='golden-rod-text medium-text'>TV Shows</li>
                <li className='golden-rod-text medium-text'>Popular</li>
                <li className='golden-rod-text medium-text'>My List</li>
                <li className='golden-rod-text medium-text'>Filter</li>
            </ul>
        </div>
        <div className='header-right'>
            <img src={bell_icon} alt='' className='icons bell-icon'/>
            <div className='header-profile'>
            <img src={profile_icon} alt='' className='icons profile-icon'/>
            <img src={menu_icon} alt='' className='icons menu-icon'/>
            <div className='dropdown'>
              <p className='golden-rod-text medium-text'>Signing Out?</p>
            </div>
            </div>
        </div>
    </div>
  )
}

export default Header
