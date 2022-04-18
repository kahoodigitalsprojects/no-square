/* eslint-disable prettier/prettier */
import axios from 'axios';
export default axios.create({
  // baseURL: 'https://no-square.herokuapp.com',
  baseURL: 'http://192.168.18.140:4000',
  // headers: {
  //   'Content-type': 'application/json',
  // },
});
