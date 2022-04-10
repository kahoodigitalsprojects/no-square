/* eslint-disable prettier/prettier */
import {createSlice} from '@reduxjs/toolkit';
import {login, signup} from '../api/authAPI';
const initialState = {
  loginInfo: {data: [], err: '', loading: true},
  signupInfo: {data: [], err: '', loading: true},
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    // action type
    setSourceType: (state, action) => {
      // state.filters.sourceType = action.payload;
      console.log(action);
    },
  },
  extraReducers: {
    [login.pending]: state => {
      state.loginInfo.loading = true;
    },
    [login.rejected]: state => {
      state.loginInfo.err = 'error occured';
      state.loginInfo.loading = false;
      state.loginInfo.data = [];
    },
    [login.fulfilled]: (state, {meta, payload: {data}}) => {
      state.loginInfo.loading = false;
      state.loginInfo.err = true;
      console.log('reducer data:', data);
      state.loginInfo.data = data;
    },
    [signup.pending]: state => {
      state.signupInfo.loading = true;
    },
    [signup.rejected]: state => {
      state.signupInfo.err = 'error occured';
      state.signupInfo.loading = false;
      state.signupInfo.data = [];
    },
    [signup.fulfilled]: (state, {meta, payload: {data}}) => {
      state.signupInfo.loading = false;
      state.signupInfo.err = true;
      console.log('reducer data:', data);
      state.signupInfo.data = data;
    },
  },
});

// Action creators are generated for each case reducer function
export const {setSourceType} = authSlice.actions;

export default authSlice.reducer;
