import React from 'react'
import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <div>
      <h2>
        Home page
      </h2>
      <h3>
          Route Tests
      </h3>
      <ul>
        <li>
        <Link to='/instructor/classes/new'>Instructor - Create Class</Link>
        </li>
        <li>
        <Link to='/instructor/classes/'>Instructor - View Classes</Link>
        </li>
        <li>
        <Link to='/dashboard'>User - View Registered Class</Link>
        </li>
        <li>
        <Link to='/classes'>User - View/Search Classes</Link>
        </li>
      </ul>
    </div>
  )
}