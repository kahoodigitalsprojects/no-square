/* eslint-disable prettier/prettier */
// import http from '../http-common';
import { AsyncStorage } from 'react-native';
const storeToken = async user => {
  try {
    await AsyncStorage.setItem('accessToken',JSON.stringify(user));
  } catch (error) {
    console.log('Something went wrong', error);
  }
};
const getToken = async user => {
  try {
    let userData = await AsyncStorage.getItem('accessToken');
    let data = JSON.parse(userData);
   return data;
  } catch (error) {
    console.log('Something went wrong', error);
  }
};

const authService = {
  storeToken,
  getToken,
};
export default authService;
