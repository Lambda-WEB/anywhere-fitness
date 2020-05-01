import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'

const classTypes = [
  "",
  "Weight Lifting",
  "Boxing",
  "Bootcamp",
  "Yoga",
  "Pilattes"
];
const initialFilterState = {
  name: '',
  type: '',
  intensity: '',
  start_date: '',
  start_time: '',
  duration: '',
  location: '',
  attendees: '',
  max_attendees: '',
  // instructor: '',
}

export default function ClassesFilter() {
  const appliedFilters = useSelector(state => state.classes.filters)
  const dispatch = useDispatch();
  const [filters, setFilters] = useState(initialFilterState)

  useEffect(() => {
    setFilters(appliedFilters)
  }, [appliedFilters])

  function changeHandler(e) {
    // set local state to value
    setFilters({
      ...filters,
      [e.target.name]: e.target.value
    })
  }
  function submitHandler(e) {
    e.preventDefault();
    dispatch({ type: 'CLASSES_FILTERS_UPDATE', payload: filters })
  }
  function resetHandler(e) {
    e.preventDefault();
    dispatch({ type: 'CLASSES_LIST_FILTERS_RESET' })
  }

  return (
    <>
      <form onSubmit={submitHandler}>
        <div className="form-group">
          <label htmlFor="type" >Class Type
            <select name="type" id="type" className='form-control'
              value={filters.type}
              onChange={changeHandler}>
              {classTypes.map(item => <option value={item}>{item}</option>)}
            </select>
          </label>
          <label htmlFor="intensity">Intensity
            <select name='intensity' id='intensity' className='form-control'
              value={filters.intensity}
              onChange={changeHandler}>
              <option value=''>All</option>
              <option value='expert'>expert</option>
              <option value="intermediate">intermediate</option>
              <option value="beginner">beginner</option>
            </select>
          </label>
          <label htmlFor="duration">Duration (mins)
        <input name='duration' type="number" min='15' id='duration' className='form-control' onChange={changeHandler} />
          </label>

        </div>
        <div className="form-group">
          <label htmlFor="max_attendees">Class Size
        <input name='max_attendees' type="number" className='form-control'
              min='1' id='max_attendees' onChange={changeHandler} />
          </label>
          <label htmlFor="attendees">Current Attendees
        <input name='attendees' type="number" min='0' id='attendees' className='form-control' onChange={changeHandler} />
          </label>

          <label htmlFor="start_date">Starts On
        <input name='start_date' type="date" id='start_date' className='form-control' onChange={changeHandler} />
          </label>
          <label htmlFor="location">Location
            <input name='location' type='text' id='location' className='form-control'
              placeholder='Enter ZIP' minLength='5' onChange={changeHandler} />
          </label>

          {/* <label htmlFor="instructor">Instructor Name
        <input name='instructor' type="text" id='instructor' className='' 
          placeholder='Enter Name' onChange={changeHandler} />
      </label> */}

          <div className='btn-group ml-2 mr-2' role="group" aria-label='filter buttons' >
            <button className="btn btn-info mr-2">Apply Filters</button>
            <button className="btn btn-outline-info" onClick={resetHandler} >Reset Filters</button>
          </div>
        </div>
      </form>
    </>
  )
}
