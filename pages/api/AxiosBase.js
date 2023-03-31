import axios from 'axios'



export const AxiosBase = axios.create({
  baseURL: "http://192.168.137.1:8000",
  timeout: 1000,
  headers: { "Content-Type": "application/x-www-form-urlencoded" },
});