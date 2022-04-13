/* eslint-disable prettier/prettier */
import axios from '.././http-common';
import {createAsyncThunk} from '@reduxjs/toolkit';
export const login = createAsyncThunk(
  'auth/login',
  async (payload, {rejectWithValue}) => {
    try {
      const response = await axios.post('/authentication/login', payload);
      return response;
    } catch (err) {
      if (!err.response) {
        throw err;
      }
      return rejectWithValue(err.response.data);
    }
  },
);

export const signup = createAsyncThunk(
  'auth/signup',
  async (payload, {rejectWithValue}) => {
    try {
      const response = await axios.post('/authentication/signUp', payload);
      return response;
    } catch (err) {
      if (!err.response) {
        throw err;
      }
      return rejectWithValue(err.response.data);
    }
  },
);

export const sendMailForResetPassword = createAsyncThunk(
  'auth/sendMailForResetPassword',
  async (payload, {rejectWithValue}) => {
    console.log('inside reducer', payload);
    try {
      const response = await axios.post('/users/password/reset', payload);
      console.log(response);
      return response;
    } catch (err) {
      if (!err.response) {
        console.log('error occured');
        throw err;
      }
      return rejectWithValue(err.response.data);
    }
  },
);
export const resetPasswordById = createAsyncThunk(
  'auth/resetPasswordById',
  async (payload, {rejectWithValue}) => {
    const link = payload.link;
    try {
      const response = await axios.post(
        `/users/password/reset/${link}`,
        payload.data,
      );
      return response;
    } catch (err) {
      if (!err.response) {
        throw err;
      }
      return rejectWithValue(err.response.data);
    }
  },
);
export const editProfile = createAsyncThunk(
  'auth/editProfile',
  async (payload, {rejectWithValue}) => {
    // const link = payload.link;
    console.log("payload and other stuff",payload);
    try {
      // const response=await axios.post('/users/update',{data},{
      //   headers:{
      //     'Authorization': `bearer ${token}`
      //   }
      // })
      const response = await axios.post('/users/update', payload, {
        headers: {
          'Authorization': `Bearer ${token}`,
        },
      });
      return response;
    } catch (err) {
      if (!err.response) {
        throw err;
      }
      return rejectWithValue(err.response.data);
    }
  },
);
