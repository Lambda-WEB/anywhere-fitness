import React from 'react'
import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <div>
      <h2>
        Home page
      </h2>
      <h3>
          Link Tests
        </h3>
      <p>
        <Link to='/instructor/classes/new'>Instructor > Create Class</Link>
      </p>
    </div>
  )
}