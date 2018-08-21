import axios from 'axios'

export const HTTP = axios.create({
  // baseURL: `https://`,
  // baseURL: `http://localhost:3000`,
  headers: {
    Authorization: 'Bearer '
  }
})
