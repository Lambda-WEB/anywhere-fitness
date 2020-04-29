import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';

const InstructorRoute = ({ component: Component, ...rest})=> {
    const loggedIn = useSelector(state => state.app.loggedIn);
    const isInstructor = useSelector(state => state.account.user.instructor)
   
    return (
        <Route {...rest} render={props => {
          if (loggedIn && isInstructor) {
            return <Component {...props} />
          }
          else {
            return <Redirect to="/login" />
          }
        }}/>
    )
}

export default InstructorRoute;