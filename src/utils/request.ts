import axios from 'axios'
// import { getToken, removeToken } from './token'

const BASE_URL = 'http://localhost:8081/api'

export const request = axios.create({
  baseURL: BASE_URL,
  timeout: 30000,
  withCredentials: true
})

