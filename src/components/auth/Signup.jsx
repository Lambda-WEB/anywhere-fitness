import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom';

// import * as act from '../store/actions';

const defaultUser = {
  email: '',
  password: '',
  instructor: "0"
}

export default function Signup() {
  const api = useSelector(state => state.app.axios);
  const [user, setUser] = useState(defaultUser);
  const history = useHistory();
  const dispatch = useDispatch();
  
  function changeHandler(e) {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
      });
  }

  function submitHandler(e) {
    e.preventDefault();
    console.log({user});
    api.post('/auth/register', user)  // fixedUser
      .then(res => {
        console.log(res.data)
        localStorage.setItem('authToken', JSON.stringify(res.data.token))
        dispatch({type: 'APP_LOGIN', payload: res.data.token})
        dispatch({type: 'ACCOUNT_UPDATE', payload: { user: res.data.saved } })
        history.push('/');
      })
      .catch(err => console.log({ err }))
  }

  return (
    <div className="wrapper">
      <div className="form-wrapper">
        <form onSubmit={submitHandler}>
          <h1>New User Sign Up</h1>
          <div className="email">
            <label>Email</label>
            <input
              type="text"
              name="email"
              value={user.email}
              onChange={changeHandler}
            />
          </div>
          <div className="password">
            <label>password</label>
            <input
              type="password"
              name="password"
              value={user.password}
              onChange={changeHandler}
            />
          </div>

          <select className="select-css" value={user.instructor} onChange={changeHandler}>
            <option value="0">Student</option>
            <option value="1">Instructor</option>
          </select>

          <button>Sign Up</button>
        </form>
      </div>
    </div>
  )
}
