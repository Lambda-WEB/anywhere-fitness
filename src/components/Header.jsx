import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Link, useHistory } from 'react-router-dom';
import logos from '../assets/fav.png'
import logo from '../assets/logo.svg';
// import * as act from '../store/actions'

export default function Header() {
  const loggedIn = useSelector(state => state.app.loggedIn);

  return (
    <header className="app-header">
      <Link to='/'>
        <div className='header-section'>
          <img src={logos} className="app-logo-img" alt="logo" />
        </div>
      </Link>
     
      <div className="header-section">
        <a href='https://agitated-hawking-1730f4.netlify.app/'>
        <span className="header-title"><strong>anywhere(Fitness)</strong></span>
        </a>
      </div>
      <nav className='header-section'>
        <ul>
          <li>
            <Link to='/classes'>Classes</Link>
          </li>
          {loggedIn ? (
            <li>
              <Link to='/logout'>Logout</Link>
            </li>) : (<>
            <li>
              <Link to='/signup'>Sign Up</Link>
            </li>
            <li>
              <Link to='/login'>Log In</Link>
            </li></>)
          }
          {/* {loggedIn ? (<a onClick={logoutHandler}>Logout</a>) : (<Link to='/login'>Login</Link>)} */}
        </ul>
      </nav>
    </header>
  )

}