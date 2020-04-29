// import * as act from './actions'
import newAxios from '../utils/axiosUtils'

const initialAppState = {
  loggedIn: false,
  // authToken: null,
  axios: null,
  isFetching: false,

  // NON-MVP EXTRA
  errors: [], // last 10 error messages, will display as toasts
}

export function appReducer(state = initialAppState, action) {

  switch (action.type) {
    case 'APP_FETCHING':
      return {
        ...state,
        isFetching: action.payload
      }

    case 'APP_SET_AUTH':
      return {
        ...state,
        axios: newAxios(action.payload)
        // authToken: action.payload
      }
  
    case 'APP_LOGIN':
      return {
        ...state,
        loggedIn: true,
        axios: newAxios(action.payload)
        // authToken: action.payload
      }
  
    case 'APP_LOGOUT':
      localStorage.removeItem('authToken');
      return {
        ...state,
        loggedIn: false,
        // authToken: null,
        axios: newAxios()
      }
  
    // case act.app_update_api:
    //   return {
    //     ...state,
    //     apiHttp: newAxios(action.payload)
    //   }

    case 'APP_ERROR':
      return {
        ...state,
        errors: state.errors.unshift(action.payload.error).slice(0,10)
      }

    default:
      return state;
  }
}
