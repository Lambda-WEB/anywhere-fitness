import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import ClassesList from './ClassesList'
import ClassSearch from './ClassSearch'
import ClassesFilter from './ClassesFilter'
// dummy data
import { getClasses } from '../../data/sample'

export default function Dashboard() {
  const dispatch = useDispatch()

  useEffect(() => {
    // load classes and push into state
    // dispatch({ type: 'CLASSES_FETCHING', payload: true })
    dispatch({ type: 'CLASSES_LIST_UPDATE', payload: getClasses() })
    // dispatch({ type: 'CLASSES_FETCHING', payload: false })
  }, [])

  return (
    <div>
      <h2>
        User Dashboard
      </h2>
      <h3>
          Search for Classes
      </h3>
      <section>
        <div>
          <ClassSearch />
        </div>
        <div>
          <ClassesFilter />
        </div>
        <div>
          <ClassesList />
        </div>
      </section>
    </div>
  )
}