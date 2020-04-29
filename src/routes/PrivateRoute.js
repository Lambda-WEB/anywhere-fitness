import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';


const PrivateRoute = ({ component: Component, ...rest})=> {
    const loggedIn = useSelector(state => state.app.loggedIn);
   
    return (
        <Route
            {...rest}
            render={props => {
                if (loggedIn){
                    return <Component {...props}/>
                } else {
                    return <Redirect to="/login"/>
                }
            }}
        />
    )

}

export default PrivateRoute;