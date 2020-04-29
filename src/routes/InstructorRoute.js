import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';

const InstructorRoute = ({ component: Component, ...rest})=> {
    const loggedIn = useSelector(state => state.app.loggedIn);
    const isInstructor = useSelector(state => state.account.user.instructor)
   
    return (
        <Route {...rest} render={props => {
          console.log({'logged': loggedIn,'instructor': isInstructor})
          if (loggedIn) {
            if (isInstructor == true) {
              // console.log(isInstructor, 'why are we here???')
              return <Component {...props} />
            } else {
              return (
                <p>
                  You do not have access to this section of the website!
                  You must be an instructor in order to create a new class!
                </p>
              )
            }
          } else {
            return <Redirect to="/login" />
          }
        }}/>
    )
}

export default InstructorRoute;