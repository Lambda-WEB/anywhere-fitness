import React, { useEffect, useState } from 'react'
import ClassCard from './ClassCard'
// import { useSelector, useDispatch } from 'react-redux'
import { arrayByPage } from '../../utils/helpers'

export default function ClassesList(props) {
  // const api = useSelector(state => state.app.axios)
  // const classes = useSelector(state => state.classes.list)
  // const dispatch = useDispatch();
  const [pageNum, setPageNum] = useState(1);
  const [maxPages, setMaxPages] = useState(1);
  const [slice, setSlice] = useState([]);
  const pageSize = 20;

  useEffect(() => {
    setMaxPages(Math.ceil(props.classes.length / pageSize));
    setSlice(arrayByPage(props.classes, pageSize, 1))
  }, [props.classes])

  useEffect(() => {
    setSlice(arrayByPage(props.classes, pageSize, pageNum))
  }, [pageNum])


  return (
    <div className="container-fluid d-flex justify-content-center">
      <div className="row">
        <div className="col-md-3">
        </div>
        <div className="col-md-3">
        </div>
        <div className="col-md-3">
        </div>
        <div className="col-md-1">
        {(pageNum > 1) && (
          <a href='#' className='btn' onClick={() => {
            if (pageNum > 1) setPageNum(pageNum - 1)
          }}> ◀ Previous </a>
        )}
        </div>
        <div className="col-md-1">
        </div>
        <div className="col-md-1">
        {(pageNum < maxPages) && (
          <a href='#' className='btn' onClick={() => {
            if (pageNum < maxPages) setPageNum(pageNum + 1)
          }}> Next ▶ </a>
        )}
        </div>
      </div>{/* end of row */}
      <div className="row">
        {slice.map(item => { return (
            <ClassCard key={item.id} 
              deleteClass={props.deleteClass ? props.deleteClass(item.id) : null} 
              registerClass={props.registerClass ? props.registerClass(item.id) : null}
              classItem={item} />
          )}
        )}
      </div>
    </div>
  )
}