/* eslint-disable prettier/prettier */
import axios from 'axios';
export default axios.create({
  baseURL: 'https://no-square.herokuapp.com',
  headers: {
    'Content-type': 'application/json',
  },
});
