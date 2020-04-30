import * as act from './actions'


const initialClassesState = {
    class:{
      name: '', // string
      type: '', // class_type
      start_time: '', // string (utc)
      duration: '', // number (minutes)
      intensity: '', // class_intensity
      location: '', // string: zip code
      attendees: '', // number (calculated)
      max_attendees: '', // number (specified by Instructor)
    },
    loggedIn: false,
    authToken: null,
    isLoading: false
  
  }


export function classesReducer(state = initialClassesState, action) {

  
}