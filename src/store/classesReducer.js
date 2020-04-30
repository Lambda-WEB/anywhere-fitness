// import * as act from './actions';
// MANAGES THE STATE OF THE SEARCHABLE CLASSES LIST

const initialFiltersState =  {
  name: '', // string
  type: '', // class_type
  intensity: '', // class_intensity
  start_date: '', // string: date
  start_time: '', // string: time
  duration: '', // number (minutes)
  location: '', // string: zip code
  attendees: '', // number (calculated)
  max_attendees: '', // number 
  instructor: '', // string: check against first/last name
  instructorId: '', // number: for strict filtering
};

const initialClassesState = {
    raw_list: [],
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
    filters: initialFiltersState,
    search: '', // string: against class name, instructor name
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
        raw_list: action.payload,
        list: narrowClassList(action.payload, state.filters, state.search),
      }

    case 'CLASSES_FILTERS_UPDATE':
      return {
        ...state,
        list: narrowClassList(state.raw_list, action.payload, state.search),
        filters: action.payload,
      }

    case 'CLASSES_SEARCH_UPDATE':
      return {
        ...state,
        list: narrowClassList(state.raw_list, state.filters, action.payload),
        search: action.payload,
      }

    case 'CLASSES_LIST_RESET':
      return {
        ...state,
        list: state.raw_list,
        filters: initialFiltersState,
        search: '',
      }
        
      default:
        return state;
    }
}

function narrowClassList(list, filters, search) {
  return searchClassList(filterClassList(list, filters), search)
}

function filterClassList(list, filters) {
  return list.filter(item => {
    Object.keys(filters).forEach(f => {
      if (filters[f] == true)
        return (item[f] == filters[f])
    })
  })
}

function searchClassList(list, search) {
  const searchArr = search.split(' ');
  return list.filter(item => {
    return (
      item.name.includes(searchArr) ||
      item.instructorName.first_name.includes(searchArr) ||
      item.instructorName.last_name.includes(searchArr))
  })
}