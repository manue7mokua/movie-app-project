import React from 'react'
import './Footer.css'
import youtube_icon from '../../assets/youtube.png'
import medium_icon from '../../assets/medium.png'
import instagram_icon from '../../assets/instagram.png'
import snapchat_icon from '../../assets/snapchat.png'

const Footer = () => {
  return (
    <div className='footer'>
      <div className='footer-icons'>
          <img src={instagram_icon} alt='' />
          <img src={medium_icon} alt='' />
          <img src={youtube_icon} alt='' />
          <img src={snapchat_icon} alt='' />
      </div>
      <ul>
        <li>Developer Docs</li>
        <li>Terms & Conditions</li>
        <li>Privacy Policy</li>
        <li>Cookie Policy</li>
        <li>Legal</li>
        <li>Contact</li>
      </ul>
      <p className='copyright-text'>© 2024 ZondIn, Inc. All rights reserved.</p>
    </div>
  )
}

export default Footer
