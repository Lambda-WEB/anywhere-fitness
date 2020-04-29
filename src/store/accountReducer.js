import * as act from './actions'

const initialAccountState = {
  user: {
    id: 0,
    email: '',
    instructor: '0', // 0
    name: '',
    zip: '',
  },
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
    case 'ACCOUNT_FETCHING':
      return {
        ...state,
        isFetching: action.payload
      }

    case 'ACCOUNT_UPDATE':
      return {
        ...state,
        user: {
          ...state.user,
          // id: payload.user.id,
          email: action.payload.user.email || state.user.email,
          // isInstructor: payload.user.isInstructor,  // in case Role changes
          name: action.payload.user.name || state.user.name,
          zip: action.payload.user.zip || state.user.zip,
        }
      }

    case 'ACCOUNT_ERROR':
      return {
        ...state,
        errors: state.errors.unshift(action.payload.error).slice(0,10)
      }

    default:
      return state;
  }
}