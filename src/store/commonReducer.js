import * as act from './actions'
import newAxios from '../utils/axiosUtils'

const initialCommonState = {
  apiHttp: null,
  authToken: null,
  isFetching: false,

  // NON-MVP EXTRA
  errors: [], // last 10 error messages, will display as toasts
}

export function commonReducer(state = initialCommonState, action) {

  switch (action.type) {
    case act.app_fetching:
      return {
        ...state,
        isFetching: action.payload
      }

    case act.app_update_apitoken:
      return {
        ...state,
        authToken: action.payload
      }
  
    case act.app_update_api:
      return {
        ...state,
        apiHttp: newAxios(action.payload)
      }

    case act.app_error:
      return {
        ...state,
        errors: state.errors.unshift(action.payload.error).slice(0,10)
      }

    default:
      return state;
  }
}
