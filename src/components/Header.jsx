import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Link, useHistory } from 'react-router-dom';

import logo from '../assets/logo.svg';
// import * as act from '../store/actions'

export default function Header() {
  const loggedIn = useSelector(state => state.app.loggedIn);

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
            {/* {loggedIn ? (<a onClick={logoutHandler}>Logout</a>) : (<Link to='/login'>Login</Link>)} */}
            {loggedIn ? (<Link to='/logout'>Logout</Link>) : (<Link to='/login'>Login</Link>)}
          </li>
        </ul>
      </nav>
    </header>
  )

}