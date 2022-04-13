/* eslint-disable prettier/prettier */
import {createSlice} from '@reduxjs/toolkit';
import {login, signup,
  sendMailForResetPassword,
  resetPasswordById,
  editProfile} from '../api/authAPI';
const initialState = {
  loginInfo: {data: [], err: '', loading: true},
  signupInfo: {data: [], err: '', loading: true},
  userData:{data:[]},
  forgotPasswordInfo: {data: [], err: '', loading: true},
  resetPasswordInfo: {data: [], err: '', loading: true},
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
    [login.rejected]: (state,action) => {
      state.loginInfo.err = action.error.message;
      state.loginInfo.loading = false;
      // console.log("inside reducer",action);
      state.loginInfo.data = [];
    },
    [login.fulfilled]: (state, {meta, payload: {data}}) => {
      state.loginInfo.loading = false;
      state.loginInfo.err = true;
      console.log('reducer data:', data);
      state.loginInfo.data = data;
      state.userData.data = data.message.user;
    },
    [signup.pending]: state => {
      state.signupInfo.loading = true;
    },
    [signup.rejected]: (state,action) => {
      state.signupInfo.err = action.error.message;
      state.signupInfo.loading = false;
      // console.log("check ")
      state.signupInfo.data = [];
    },
    [signup.fulfilled]: (state, {meta, payload: {data}}) => {
      state.signupInfo.loading = false;
      state.signupInfo.err = false;
      // console.log('reducer data:', data);
      state.signupInfo.data = data;
    },
    [sendMailForResetPassword.pending]: state => {
      state.forgotPasswordInfo.loading = true;
    },
    [sendMailForResetPassword.rejected]: (state,action) => {
      state.forgotPasswordInfo.err = action.error.message;
      state.forgotPasswordInfo.loading = false;
      // console.log("inside reducer",action);
      state.forgotPasswordInfo.data = [];
    },
    [sendMailForResetPassword.fulfilled]: (state, {meta, payload: {data}}) => {
      state.forgotPasswordInfo.loading = false;
      state.forgotPasswordInfo.err = true;
      // console.log('reducer data:', data);
      state.forgotPasswordInfo.data = data;
    },
    [editProfile.pending]: state => {
      state.signupInfo.loading = true;
    },
    [editProfile.rejected]: (state,action) => {
      state.signupInfo.err = action.error.message;
      state.signupInfo.loading = false;
      // console.log("check ")
      state.signupInfo.data = [];
    },
    [editProfile.fulfilled]: (state, {meta, payload: {data}}) => {
      state.signupInfo.loading = false;
      state.signupInfo.err = false;
      // console.log('reducer data:', data);
      state.signupInfo.data = data;
    },
  },
});

// Action creators are generated for each case reducer function
export const {setSourceType} = authSlice.actions;

export default authSlice.reducer;
