import React, { useState } from 'react'
import { useDispatch } from 'react-redux';


export default function ClassCard() {
  const [fitClass, setFitClass] = useState();
  const dispatch = useDispatch();

  return (
    <div className='card text-center shadow'>
      <div className="overflow">
        <img src='' alt='' className='card-img-top' />
      </div>
      <div className="card-body text-dark">
        <h4 className="card-title">Yoga Class</h4>
        <p className="card-text text-secondary">
          Nec ipsum libris dissentiunt et, qui aperiri corpora accusata te! Ne integre nostrud consectetuer pro. Ei eam quodsi saperet voluptatibus. Simul feugiat efficiantur eam ad, case graece theophrastus sed at?
        </p>
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
