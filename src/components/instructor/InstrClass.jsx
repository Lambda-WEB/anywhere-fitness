import React, {useState, useEffect} from "react";
import {Link} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";

import {getClass} from "../../store/actions.js";

const InstrClass = () => {
    const dispatch = useDispatch();
    const classes = useSelector(state => state.instructor.class);
    const id = useSelector(state => state.account.user.id)
    console.log(classes)

    useEffect(() => {
        dispatch({type: getClass(id)})
    })

    return(
        <div>
        <Link to="/instructor/classes/new">Add New Class</Link>
        {classes && classes.length > 0 ? 
        <div>
        <p>{classes.name}</p>
        <p>{classes.type}</p>
        <p>{classes.intensity}</p>
        <p>{classes.duration}</p>
        <p>{classes.location}</p>
        <p>{classes.attendees}</p>
        <p>{classes.max_attendees}</p>
        </div>
            :
            <p>You currently do not have any classes scheduled</p>}
        </div>
    )
   
   

    
}
export default InstrClass;