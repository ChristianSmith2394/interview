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
      <div className='header__nav'>
        <div className='nav__option'>
          <a href="#">SSP</a>
        </div>
        <div className='nav__option'>
        <a href="#">SAP</a>
        </div>
        <div className='nav__option'>
        <a href="#">SAR</a>
        </div>
        <div className='nav__option'>
        <a href="#">POAM</a>
        </div>
        <div className='nav__option'>
        <a href="#">Logout</a>
        </div>
      </div>
    </div>
  )
}

export default Header