/* eslint-disable prettier/prettier */
import axios from '.././http-common';
import {createAsyncThunk} from '@reduxjs/toolkit';
export const login = createAsyncThunk(
  'auth/login',
  async payload => await axios.post('/authentication/login', payload),
);

export const signup = createAsyncThunk(
  'auth/signup',
  async payload => await axios.post('/authentication/signup', payload),
);
