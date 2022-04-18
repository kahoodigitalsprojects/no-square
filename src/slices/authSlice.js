/* eslint-disable prettier/prettier */
import {createSlice} from '@reduxjs/toolkit';
import {
  login,
  signup,
  sendMailForResetPassword,
  resetPasswordById,
  editProfile,
  changPassword,
  deleteAccount,
  updateProfileImage,
} from '../api/authAPI';
const initialState = {
  loginInfo: {data: [], err: '', loading: true},
  signupInfo: {data: [], err: '', loading: true},
  userData: {data: []},
  checkIsNewApp: true,
  isLogin: false,
  nn: true,
  // accessToken:{data:{}},
  changePassword: {data: [], err: '', loading: true},
  deleteAccount: {data: [], err: '', loading: true},
  forgotPasswordInfo: {data: [], err: '', loading: true},
  resetPasswordInfo: {data: [], err: '', loading: true},
  updateProfileImageData: {data: [], err: '', loading: true},
};

export const authSlice = createSlice({
  name: 'auth',
  initialState: initialState,

  reducers: {
    // action type
    setSourceType: (state, action) => {
      // state.filters.sourceType = action.payload;
      console.log(action);
    },
    isNewApp: (state = initialState) => {
      state.checkIsNewApp = false;
      state.nn = false;
    },
    saveImageToStore: (state, action) => {
      console.log(action.image);
      state.loginInfo.data.message.user.image = action.image;
    },
    logout: (state = initialState) => {
      state.isLogin = false;
      state.loginInfo.data = [];
      state.loginInfo.err = '';
      state.userData.data = [];
      state.signupInfo.data = [];
      state.signupInfo.err = '';
      state.changePassword.data = [];
      state.changePassword.err = '';
      state.deleteAccount.data = [];
      state.deleteAccount.err = '';
      state.forgotPasswordInfo.data = [];
      state.forgotPasswordInfo.err = '';
      state.resetPasswordInfo.data = [];
      state.resetPasswordInfo.err = '';
      console.log(state.isLogin);
    },
  },
  extraReducers: {
    [login.pending]: state => {
      state.loginInfo.loading = true;
    },
    [login.rejected]: (state, action) => {
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
      state.isLogin = true;
      // state.accessToken.data = data.message.accessToken;
    },
    [signup.pending]: state => {
      state.signupInfo.loading = true;
    },
    [signup.rejected]: (state, action) => {
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
    [sendMailForResetPassword.rejected]: (state, action) => {
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
    [editProfile.rejected]: (state, action) => {
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
    [changPassword.pending]: state => {
      state.changePassword.loading = true;
    },
    [changPassword.rejected]: (state, action) => {
      state.changePassword.err = action.error.message;
      state.changePassword.loading = false;
      // console.log("check ")
      state.changePassword.data = [];
    },
    [changPassword.fulfilled]: (state, {meta, payload: {data}}) => {
      state.changePassword.loading = false;
      state.changePassword.err = false;
      // console.log('reducer data:', data);
      state.changePassword.data = data;
    },
    [deleteAccount.pending]: state => {
      state.deleteAccount.loading = true;
    },
    [deleteAccount.rejected]: (state, action) => {
      state.deleteAccount.err = action.error.message;
      state.deleteAccount.loading = false;
      // console.log("check ")
      state.deleteAccount.data = [];
    },
    [deleteAccount.fulfilled]: (state, {meta, payload: {data}}) => {
      state.deleteAccount.loading = false;
      state.deleteAccount.err = false;
      // console.log('reducer data:', data);
      state.deleteAccount.data = data;
    },
    [updateProfileImage.pending]: state => {
      state.deleteAccount.loading = true;
    },
    [updateProfileImage.rejected]: (state, action) => {
      state.updateProfileImageData.err = action.error.message;
      state.updateProfileImageData.loading = false;
      // console.log("check ")
      state.updateProfileImageData.data = [];
    },
    [updateProfileImage.fulfilled]: (state, {meta, payload: {data}}) => {
      state.updateProfileImageData.loading = false;
      state.updateProfileImageData.err = false;
      // console.log('reducer data:', data);
      state.updateProfileImageData.data = data;
    },
  },
});

// Action creators are generated for each case reducer function
export const {setSourceType, logout, isNewApp} = authSlice.actions;

export default authSlice.reducer;
