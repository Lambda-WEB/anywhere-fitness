import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';


export default function ClassSearch() {
  const appliedSearch = useSelector(state => state.classes.search);
  const dispatch = useDispatch();
  const [searchVal, setSearchVal] = useState('');

  useEffect(() => {
    setSearchVal(appliedSearch);
  }, [appliedSearch])

  function submitHandler(e) {
    e.preventDefault();
    dispatch({ type: 'CLASSES_SEARCH_UPDATE', payload: searchVal })
  }
  function resetHandler(e) {
    e.preventDefault();
    setSearchVal('');
    dispatch({ type: 'CLASSES_LIST_SEARCH_RESET' })
  }

  return (
    <>
      <form onSubmit={submitHandler}>
        <div className="form-group">
          <label htmlFor="search">
            <input name='search' type="search" id='search' className='form-control'
              placeholder='Search for Classes or Instructors' value={searchVal}
              onChange={(e) => setSearchVal(e.target.value)} />
          </label>

          <div className="btn-group ml-2 mr-2">
            <button className="btn btn-info mr-2">Search</button>
            <button className="btn btn-outline-info"  onClick={resetHandler} >Clear</button>
          </div>
        </div>
      </form>
    </>
  )
}