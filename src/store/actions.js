// Actions master file
import {axiosWithAuth}  from "../utils/axiosWithAuth.js"

// COMMON
export const app_update_apitoken = 'app-login'
export const app_update_api = 'app-update-api'
export const app_fetching = 'app-fetching'
export const app_error = 'app-error'

// ACCOUNT
export const account_login = 'account-login'
export const account_logout = 'account-logout'
export const account_fetching = 'account-fetching'
export const account_set_token = 'account-set-token'
// export function account_fetching(isFetching) {
//   return { action: account_fetching, payload: isFetching }
// }
export const account_update = 'account-update'
export const account_failed = 'account-failed' // add to errors array

// INSTRUCTOR


// CLASSES
export const add_class_start = "add_class_start";
export const add_class_success = "add_class_success";
export const add_class_failure = "add_class_failure";

export function addClass(classadd) {
    return dispatch => {
        dispatch({type: add_class_start});
        axiosWithAuth()
        .post('/classes', classadd)
        .then(response => {
            dispatch({type: add_class_success, payload: response})
        })
        .catch(error => {
            dispatch({type: add_class_failure, payload: error})
        })
    }
}






