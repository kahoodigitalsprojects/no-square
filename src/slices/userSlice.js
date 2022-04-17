// /* eslint-disable prettier/prettier */
// import {createSlice} from '@reduxjs/toolkit';
// import {
//   sendMailForResetPassword,
//   resetPasswordById,
//   updateProfileImage,
//   updateProfile,
//   changPassword,
//   deleteAccount,
// } from '../api/userAPI';
// // import authSlice from './authSlice';
// const initialState = {
//   userData: {data: []},
//   changePassword: {data: [], err: '', loading: true},
//   updateProfileData: {data: [], err: '', loading: true},
//   deleteAccount: {data: [], err: '', loading: true},
//   forgotPasswordInfo: {data: [], err: '', loading: true},
//   resetPasswordInfo: {data: [], err: '', loading: true},
//   checkingData: {data: [], error: '', loading: true},
// };

// export const userSlice = createSlice({
//   name: 'user',
//   initialState: {initialState},

//   reducers: {
//     // action type
//     removeUserData: state => {
//       state.userData = [];
//     },
//     saveUserData: (state, action) => {
//       console.log('save data to user slice', action.payload);
//       state.userData = action.payload.data;
//     },
//     logout: (state = initialState) => {
//       state.userData.data = [];
//       state.changePassword.data = [];
//       state.deleteAccount.data = [];
//       state.forgotPasswordInfo.data = [];
//       state.resetPasswordInfo.data = [];
//     },
//   },
//   extraReducers: {
//     [sendMailForResetPassword.pending]: state => {
//       state.forgotPasswordInfo.loading = true;
//     },
//     [sendMailForResetPassword.rejected]: (state = initialState, action) => {
//       state.forgotPasswordInfo.err = action.error.message;
//       state.forgotPasswordInfo.loading = false;
//       // console.log("inside reducer",action);
//       state.forgotPasswordInfo.data = [];
//     },
//     [sendMailForResetPassword.fulfilled]: (
//       state = initialState,
//       {meta, payload: {data}},
//     ) => {
//       state.forgotPasswordInfo.loading = false;
//       state.forgotPasswordInfo.err = true;
//       // console.log('reducer data:', data);
//       state.forgotPasswordInfo.data = data;
//     },
//     [resetPasswordById.pending]: state => {
//       state.resetPasswordInfo.loading = true;
//     },
//     [resetPasswordById.rejected]: (state = initialState, action) => {
//       state.resetPasswordInfo.err = action.error.message;
//       state.resetPasswordInfo.loading = false;
//       // console.log("inside reducer",action);
//       state.resetPasswordInfo.data = [];
//     },
//     [resetPasswordById.fulfilled]: (
//       state = initialState,
//       {meta, payload: {data}},
//     ) => {
//       state.resetPasswordInfo.loading = false;
//       state.resetPasswordInfo.err = true;
//       // console.log('reducer data:', data);
//       state.forgotPasswordInfo.data = data;
//     },
//     [updateProfile.pending]: state => {
//       state.updateProfileData.loading = true;
//     },
//     [updateProfile.rejected]: (state = initialState, action) => {
//       // console.log('error ', action.error.message);
//       console.log('jdhsfkhsdkh');
//       state.updateProfileData.err = action.error.message;
//       state.updateProfileData.loading = true;
//       console.log('check ');
//       state.updateProfileData.data = [];
//     },
//     [updateProfile.fulfilled]: (
//       state = initialState,
//       {meta, payload: {data}},
//     ) => {
//       state.updateProfileData.loading = false;
//       state.updateProfileData.err = false;
//       console.log('reducer data:', data);
//       state.updateProfileData.data = data;
//       //   state.userData.
//     },
//     [changPassword.pending]: state => {
//       state.changePassword.loading = true;
//     },
//     [changPassword.rejected]: (state, action) => {
//       console.log('action => ', action);
//       state.changePassword.err = action.error.message;
//       state.changePassword.loading = false;
//       // console.log("check ")
//       state.changePassword.data = [];
//     },
//     [changPassword.fulfilled]: (
//       state = initialState,
//       {meta, payload: {data}},
//     ) => {
//       state.changePassword.loading = false;
//       state.changePassword.err = false;
//       // console.log('reducer data:', data);
//       state.changePassword.data = data;
//     },
//     [deleteAccount.pending]: state => {
//       state.deleteAccount.loading = true;
//     },
//     [deleteAccount.rejected]: (state = initialState, action) => {
//       state.deleteAccount.err = action.error.message;
//       state.deleteAccount.loading = false;
//       // console.log("check ")
//       state.deleteAccount.data = [];
//     },
//     [deleteAccount.fulfilled]: (
//       state = initialState,
//       {meta, payload: {data}},
//     ) => {
//       state.deleteAccount.loading = false;
//       state.deleteAccount.err = false;
//       // console.log('reducer data:', data);
//       state.deleteAccount.data = data;
//     },
//     [updateProfileImage.pending]: state => {
//       state.changePassword.loading = true;
//     },
//     [updateProfileImage.rejected]: (state = initialState, action) => {
//       //   console.log(action.error);
//       state.changePassword.err = action.error.message;
//       state.changePassword.loading = false;
//       // console.log("check ")
//       state.changePassword.data = [];
//     },
//     [updateProfileImage.fulfilled]: (
//       state = initialState,
//       {meta, payload: {data}},
//     ) => {
//       state.changePassword.loading = false;
//       state.changePassword.err = false;
//       console.log('reducer data:', data);
//       state.changePassword.data = data;
//     },
//   },
// });

// // Action creators are generated for each case reducer function
// export const {removeUserData, saveUserData} = userSlice.actions;

// export default userSlice.reducer;
