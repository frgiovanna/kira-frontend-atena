import axios from 'axios'

export default axios.create({
  baseURL: 'https://api-hack-das-minas.herokuapp.com',
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json'
  }
});

