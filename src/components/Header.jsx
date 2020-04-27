import React from 'react'
import logo from '../assets/logo.svg';


export default function Header() {

  return (
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <nav className='header-navigation'>
      </nav>
      <a
        className="App-link"
        href="https://reactjs.org"
        target="_blank"
        rel="noopener noreferrer"
      >
        Learn React
      </a>
    </header>
  )

}