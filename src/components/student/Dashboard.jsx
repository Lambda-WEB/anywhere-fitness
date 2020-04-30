import React from 'react'
import { Link } from 'react-router-dom'
import ClassesList from './ClassesList'

export default function Dashboard() {
  return (
    <div>
      <h2>
        User Dashboard
      </h2>
      <h3>
          Search for Classes
      </h3>
      <ClassesList />
    </div>
  )
}