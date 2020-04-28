import React from 'react'
import logo from '../assets/logo.svg';
import { Link } from 'react-router-dom';


export default function Header(props) {

  return (
    <header className="app-header">
      <div className='header-section'>
        <img src={logo} className="app-logo-img" alt="logo" />
      </div>
      <div className="header-section">
        <span className="header-title"><strong>Anywhere Fitness</strong></span>
      </div>
      <nav className='header-section'>
        <ul>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='/classes'>Find Classes</Link>
          </li>
          <li>
            {props.loggedIn ? (<Link to='/logout'>Logout</Link>) : (<Link to='/login'>Login</Link>)}
          </li>
        </ul>
      </nav>
    </header>
  )

}