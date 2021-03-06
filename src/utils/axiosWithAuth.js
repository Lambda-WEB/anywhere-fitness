import axios from 'axios';


const baseURL = 'https://anywherefitness100.herokuapp.com/api'

export const axiosWithAuth =( ) => {
    const token = JSON.parse(localStorage.getItem('token'));
    return axios.create({
        headers: {
            authorization: token
        },
        baseURL: 'https://anywherefitness100.herokuapp.com/api/'
    })
}