import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { useHistory, Redirect } from 'react-router-dom';

export default function Logout() {
  const dispatch = useDispatch();
  // const history = useHistory();

  useEffect(() => {
    dispatch({type: 'APP_LOGOUT'})
    // history.push('/')
  })

  return (
    <Redirect to='/' />
  )
}