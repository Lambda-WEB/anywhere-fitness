import React, {useState, useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {Link} from "react-router-dom";


import {getClass} from "../../store/actions.js";

const InstrClass = (props) => {
    const dispatch = useDispatch();
    const user = useSelector(state => state.user)
    const classes = useSelector(state => state.classes)
    console.log(classes)

    useEffect(() => {
        dispatch({type: getClass})
    })

    return(
        <div>
            <Link to="/instructor/classes/new"> Add New Class</Link>
        </div>
    )
   
   

    
}
export default InstrClass;