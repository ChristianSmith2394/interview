import React from 'react'
import logo from '../photos/logo.gif'
import { Link } from "react-router-dom"
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
          SSP
        </div>
        <div className='nav__option'>
          SAP
        </div>
        <div className='nav__option'>
          SAR
        </div>
        <div className='nav__option'>
          POAM
        </div>
        <div className='nav__option'>
          Logout
        </div>
      </div>
    </div>
  )
}

export default Header