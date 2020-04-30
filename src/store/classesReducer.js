// import * as act from './actions';
// MANAGES THE STATE OF THE SEARCHABLE CLASSES LIST

const initialClassesState = {
    list: [],
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
    isLoading: false
  }

export function classesReducer(state = initialClassesState, action) {

  switch (action.type) {

    
      default:
        return state;
    }
}
