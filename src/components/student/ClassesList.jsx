import React from 'react'
import ClassCard from './ClassCard'
import { useSelector } from 'react-redux'


export default function ClassesList() {
  const classes = useSelector(state => state.classes.list)


  return (
    <div className="container-fluid d-flex justify-content-center">
      <div className="row">
      <div className="col-md-6">
            <ClassCard  />
          </div>
          <div className="col-md-6">
            <ClassCard  />
          </div>
        {/* {classes.map(item => (
          <div className="col-md-6">
            <ClassCard fitclass={item} />
          </div>
        ))} */}
      </div>
    </div>
  )
}