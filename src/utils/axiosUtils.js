import axios from 'axios';

const baseURL = 'https://anywherefitness100.herokuapp.com/api'

export default function newAxios(token) {
  return axios.create(token ? getAxiosConfigWithAuth(token) : getAxiosConfig())
}

function getAxiosConfig() {
  return {
    baseURL: baseURL,
    headers: {
    }
  }
}

function getAxiosConfigWithAuth(token) {
  const config = getAxiosConfig();
  return {
    ...config,
    headers: {
      ...config.headers,
      authorization: token
    }
  }
}
