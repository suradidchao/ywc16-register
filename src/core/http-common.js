import axios from 'axios'

export var HTTP = axios.create({
  // baseURL: `https://`,
  baseURL: `http://localhost:3001`
})
