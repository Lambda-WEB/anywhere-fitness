import * as act from './actions'
// MANAGES THE STATE OF INSTRUCTOR-SPECIFIC DATA

const initialInstructorState = {
  class:{
    user_id:null,
    name: '', // string
    type: '', // class_type
    start_time: '', // string (utc)
    duration: '', // number (minutes)
    intensity: '', // class_intensity
    location: '', // string: zip code
    attendees: '', // number (calculated)
    max_attendees: '', // number (specified by Instructor)
  },
  classes: [],
  isFetching: false
}
  
export function instructorReducer(state = initialInstructorState, action) {
  switch (action.type) {
    case act.add_class_start:
      return{
        ...state,
        isLoading: true
    };
    case act.add_class_success:
      return {
        ...state,
        isLoading:false,
        class: action.payload
    };
    case act.add_class_failure:
      return{
        ...state,
        isLoading:false,
        error:action.paylod
    };
    case act.get_class_start:
      return{
        ...state,
        isLoading: true
    };
    case act.get_class_start:

      return{
        ...state,
        isLoading: true
    };
    case act.get_class_success:
      return {
        ...state,
        isLoading:false,
        class: action.payload
    };
    case act.get_class_failure:
      return{
        ...state,
        isLoading:false,
        error:action.paylod
    };

    default:
      return state;

  }
  
}
