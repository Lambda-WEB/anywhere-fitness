import React from 'react'
import { Link } from 'react-router-dom'
import ClassCard from './ClassCard'
import ClassesList from './ClassesList'

export default function Home() {
  return (
    <div>
      <h2>
        Home page
      </h2>
      <h3>
          Classes List
      </h3>
      <ClassesList />
      <p>
        <Link to='/instructor/classes/new'>Instructor > Create Class</Link>
      </p>
    </div>
  )
}