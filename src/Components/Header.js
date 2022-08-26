import React from 'react'
import logo from '../photos/logo.gif'
import './Header.css'

function Header() {
  return (
    <div className='header'>
      <img
        className='header__logo'
        src={logo}
        alt="Header logo"
      />
    </div>
  )
}

export default Header