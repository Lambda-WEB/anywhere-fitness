// import * as act from './actions';
// MANAGES THE STATE OF THE SEARCHABLE CLASSES LIST

const initialClassesState = {
    list: [],
    class: {
      id: 0,
      name: '', // string
      type: '', // class_type
      start_time: '', // string (utc)
      duration: '', // number (minutes)
      intensity: '', // class_intensity
      location: '', // string: zip code
      attendees: '', // number (calculated)
      max_attendees: '', // number (specified by Instructor)
    },
    filters: {
      id: 0,
      name: '', // string
      type: '', // class_type
      start_time: '', // string (utc)
      duration: '', // number (minutes)
      intensity: '', // class_intensity
      location: '', // string: zip code
      attendees: '', // number (calculated)
      max_attendees: '', // number (specified by Instructor)
    },
    isFetching: false
  }

export function classesReducer(state = initialClassesState, action) {


  switch (action.type) {

    case 'CLASSES_FETCHING':
      return {
        ...state,
        isFetching: action.payload
      };

    case 'CLASSES_LIST_UPDATE':
      return {
        ...state,
        list: action.payload,
      }
    
      default:
        return state;
    }
}

