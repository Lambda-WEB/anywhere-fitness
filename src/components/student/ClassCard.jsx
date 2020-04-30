import React, { useState } from 'react'
import { useDispatch } from 'react-redux';


export default function ClassCard(props) {
  // const [fitClass, setFitClass] = useState();
  const dispatch = useDispatch();

  return (
    <div className='card text-center shadow'>
      <div className="overflow">
        <img src='' alt='' className='card-img-top' />
      </div>
      <div className="card-body text-dark">
        <h4 className="card-title">{props.classItem.type}</h4>
        <h5 className="card-text text-primary">{props.classItem.intensity}</h5>
        <div className="card-text text-secondary">
          <h6>by {props.classItem.instructorName.first_name} {props.classItem.instructorName.last_name}</h6>
        </div>
        <p className="card-text text-secondary">
          {props.classItem.name}
        </p>
        <div className="card-text text-primary">
          <span>On: {props.classItem.start_date} </span>
          <span>At: {props.classItem.start_time} </span>
          <span>For: {props.classItem.duration}min </span>
        </div>
        <a href="#" className="btn btn-outline-success">Register for Class</a>
      </div>
    </div>
  )
}

// name: '', // string
// type: '', // class_type
// start_time: '', // string (utc)
// duration: '', // number (minutes)
// intensity: '', // class_intensity
// location: '', // string: zip code
// attendees: '', // number (calculated)
// max_attendees: '', // number (specified by Instructor)
