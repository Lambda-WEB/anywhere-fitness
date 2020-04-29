import React, {useState, useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";

import {getClass} from "../../store/actions.js";

const InstrClass = (props) => {
    const dispatch = useDispatch();
    const classes = useSelector(state => state.classes)
    console.log(classes)

    useEffect(() => {
        dispatch({type: getClass})
    })

    return(
        null
    )
   
   

    
}
export default InstrClass;