import React, { useEffect, useState } from 'react'
import ClassCard from './ClassCard'
import { useSelector, useDispatch } from 'react-redux'
import { getClasses } from '../../data/sample'
import { arrayByPage } from '../../utils/helpers'

export default function ClassesList() {
  const api = useSelector(state => state.app.axios)
  const classes = useSelector(state => state.classes.list)
  const dispatch = useDispatch();
  const [pageNum, setPageNum] = useState(1);
  const [maxPages, setMaxPages] = useState(1);
  const [slice, setSlice] = useState([]);
  const pageSize = 20;


  useEffect(() => {
    // load classes and push into state
    // dispatch({ type: 'CLASSES_FETCHING', payload: true })
    dispatch({ type: 'CLASSES_LIST_UPDATE', payload: getClasses() })
    // dispatch({ type: 'CLASSES_FETCHING', payload: false })
  }, [])
  useEffect(() => {
    setMaxPages(Math.ceil(classes.length / pageSize));
    setSlice(arrayByPage(classes, pageSize, 1))
  }, [classes])
  useEffect(() => {
    setSlice(arrayByPage(classes, pageSize, pageNum))
  }, [pageNum])


  return (
    <div className="container-fluid d-flex justify-content-center">
      <div className="row">
        <div className="col-3">
        </div>
        <div className="col-3">
        </div>
        <div className="col-3">
        </div>
        <div className="col-1">
        {(pageNum > 1) && (
          <a href='#' className='btn' onClick={() => {
            if (pageNum > 1) setPageNum(pageNum - 1)
          }}> ◀ Previous </a>
        )}
        </div>
        <div className="col-1">
        </div>
        <div className="col-1">
        {(pageNum < maxPages) && (
          <a href='#' className='btn' onClick={() => {
            if (pageNum < maxPages) setPageNum(pageNum + 1)
          }}> Next ▶ </a>
        )}
        </div>
      </div>{/* end of row */}
      <div className="row">
        {slice.map(item => { return (
            <ClassCard key={item.id} classItem={item} />
          )}
        )}
      </div>
    </div>
  )
}