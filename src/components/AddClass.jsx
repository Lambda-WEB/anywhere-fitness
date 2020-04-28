import React, {useState} from "react";
import {useDispatch, useSelector} from "react-redux";

import {addClass} from "../store/actions.js";

const AddClass = (props) => {
    const dispatch = useDispatch();
    // const classadd = useSelector(state => state.classes)
    const [ newClass, setNewClass] = useState({
        name: '', // string
        type: '', // class_type
        start_time: '', // string (utc)
        duration: '', // number (minutes)
        intensity: '', // class_intensity
        location: '', // string: zip code
        attendees: '', // number (calculated)
        max_attendees: '', // number (specified by Instructor)
    });
    console.log(newClass, "newClass")

    const handleInput = e => {
        setNewClass({
            ...newClass,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = e =>{
        e.preventDefault();
        dispatch(addClass(newClass))
    }

    return(
       <div className="AddClass">
           <h2>Add a New Fitness Class</h2>
           <form onSubmit={handleSubmit}>
            <input type="text" name="name" placeholder="Class Name" onChange={handleInput}/>
            <input type="text" name="type" placeholder="Type of Class" onChange={handleInput}/>
            <label htmlFor="start_time">Start Time</label>
            <input type="time" name="start_time" onChange={handleInput} />
            <input type="text" name="duration" placeholder="Duration of Class" onChange={handleInput}/>
            <input type="text" name="location" placeholder="Zip Code of Class location" onChange={handleInput}/>
            <input type="number" name="max_attendees" placeholder="Max Attendees" onChange={handleInput}/>
            <input type="submit"/>
           </form>
       </div>
    )
}

export default AddClass;