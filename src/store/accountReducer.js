import * as act from './actions'

const initialAccountState = {
  user: {
    id: 0,
    email: '',
    isInstructor: false, // 0
    name: '',
    zip: '',
  },
  loggedIn: false,
  authToken: null,
  isFetching: false,

  // STRETCH
  classesRegistered: [], // array of class IDs
  billing: {
    credit_card: '',
    credit_card_exp: '',
    credit_card_cvv: '',
    phone: '',
  },
  purchases: [], // array of purchase objects {date, amount, classID}

  // NON-MVP EXTRA
  errors: [], // last 10 error messages, will display as toasts
}

export function accountReducer(state = initialAccountState, action) {

  switch (action.type) {
    case act.account_fetching:
      return {
        ...state,
        isFetching: action.payload
      }

    case act.account_set_token:
      return {
        ...state,
        authToken: action.payload
      }
  
    case act.account_login:
      return {
        ...state,
        user: {
          ...state.user,
          id: action.payload.user.id,
          email: action.payload.user.email,
          isInstructor: action.payload.user.isInstructor,
        },
        loggedIn: true,
        authToken: action.payload.token
      }

    case act.account_update:
      return {
        ...state,
        user: {
          ...state.user,
          // id: payload.user.id,
          email: action.payload.user.email || state.user.email,
          // isInstructor: payload.user.isInstructor,
          name: action.payload.user.name || state.user.name,
          zip: action.payload.user.zip || state.user.zip,
        },
        // loggedIn: true,
        // authToken: payload.token
      }

    case act.account_logout:
      return {
        ...state,
        user: initialAccountState.user,
        loggedIn: false,
        authToken: null,
      }

    case act.account_failed:
      return {
        ...state,
        errors: state.errors.unshift(action.payload.error).slice(0,10)
      }

    default:
      return state;
  }
}
