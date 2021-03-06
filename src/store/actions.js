// Actions master file
import {axiosWithAuth}  from "../utils/axiosWithAuth.js";
import axios from "axios";

// COMMON
// export const app_update_api = 'app-update-api'
// export const app_update_auth = 'app-update-auth'
// export const app_fetching = 'app-fetching'
// export const app_login = 'app-login'
// export const app_logout = 'app-logout'
// export const app_error = 'app-error'

// ACCOUNT
export const account_fetching = 'account-fetching'
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
export const get_class_start = "get_class_start";
export const get_class_success = "get_class_success";
export const get_class_failure = "get_class_failure";

export function getToken() {
    return localStorage.getItem('token');
}

export function addClass(classadd) {
    ;
    return dispatch => {
        dispatch({type: add_class_start});
        axiosWithAuth()
        .post('https://anywherefitness100.herokuapp.com/api/classes/instructor/class', classadd, 
        { headers: {
            Authorization: getToken()}
        })
        .then(response => {
            dispatch({type: add_class_success, payload: response})
        })
        .catch(error => {
            dispatch({type: add_class_failure, payload: error})
        })
    }
};

export function getClass(id) {
    return dispatch => {
        dispatch({type: get_class_start});
        axios
        .get(`https://anywherefitness100.herokuapp.com/api/classes/instructor/${id}/classes`,
       { headers: {
            Authorization: getToken()}
        })
        .then(response => {
            dispatch({type: get_class_success, payload: response})
        })
        .catch(error => {
            dispatch({type: get_class_failure, payload: error})
        })
    }
}
