import React from 'react'
import ClassCard from './ClassCard'

export default function ClassesList() {
  return (
    <div className="container-fluid d-flex justify-content-center">
      <div className="row">
        <div className="col-md-6">
          <ClassCard />
        </div>
        <div className="col-md-6">
          <ClassCard />
        </div>
      </div>
    </div>
  )
}