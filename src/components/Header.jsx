import React from 'react'
import logo from '../assets/logo.svg';
import { Link } from 'react-router-dom'

export default function Header() {

  return (
    <header >
      <img src={logo} className="App-logo" alt="logo" />
      
      <nav className='header-navigation'>
      </nav>
     
     
    </header>
  )

}