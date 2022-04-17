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
    const token = payload.token;

    try {
      const response = await axios.put('/users/update', payload, {
        headers: {
          // 'Content-Type': 'application/json',
          // "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${token}`,
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

export const changPassword = createAsyncThunk(
  'auth/changPassword',
  async (payload, {rejectWithValue}) => {
    try {
      const token = payload.token;
      const response = await axios.patch(
        '/users/changePassword',
        payload.data,
        {
          headers: {
            // 'Content-Type': 'application/json',
            // "Content-Type": "multipart/form-data",
            Authorization: `Bearer ${token}`,
          },
        },
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

export const deleteAccount = createAsyncThunk(
  'auth/deleteAccount',
  async (payload, {rejectWithValue}) => {
    try {
      const token = payload.token;
      const response = await axios.delete('/users/remove', payload.data, {
        headers: {
          'Content-Type': 'application/json',
          // "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${token}`,
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
