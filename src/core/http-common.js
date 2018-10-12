import axios from 'axios'

export const HTTP = axios.create({
  // baseURL: `http://localhost:3001/`
  baseURL: `https://api.ywc.in.th`
})
