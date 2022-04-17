// /* eslint-disable prettier/prettier */
// import axios from '.././http-common';
// import {createAsyncThunk} from '@reduxjs/toolkit';

// export const sendMailForResetPassword = createAsyncThunk(
//   'user/sendMailForResetPassword',
//   async (payload, {rejectWithValue}) => {
//     console.log('inside reducer', payload);
//     try {
//       const response = await axios.post('/users/password/reset', payload);
//       console.log(response);
//       return response;
//     } catch (err) {
//       if (!err.response) {
//         console.log('error occured');
//         throw err;
//       }
//       return rejectWithValue(err.response.data);
//     }
//   },
// );
// export const resetPasswordById = createAsyncThunk(
//   'user/resetPasswordById',
//   async (payload, {rejectWithValue}) => {
//     const link = payload.link;
//     try {
//       const response = await axios.post(
//         `/users/password/reset/${link}`,
//         payload.data,
//       );
//       return response;
//     } catch (err) {
//       if (!err.response) {
//         throw err;
//       }
//       return rejectWithValue(err.response.data);
//     }
//   },
// );
// export const updateProfile = createAsyncThunk(
//   'user/updateProfile',
//   async (payload, {rejectWithValue}) => {
//     console.log('checking update progile');
//     try {
//       const token = payload.token;
//       console.log('token of dfdjk', token);
//       console.log('token of dfdjk', payload.data);
//       const response = await axios.post('/users/profileImage', payload.data, {
//         headers: {
//           // 'Content-Type': 'application/json',
//           // "Content-Type": "multipart/form-data",
//           Authorization: `Bearer ${token}`,
//         },
//       });
//       return response;
//     } catch (err) {
//       if (!err.response) {
//         throw err;
//       }
//       return rejectWithValue(err.response.data);
//     }
//   },
// );

// export const changPassword = createAsyncThunk(
//   'user/changPassword',
//   async (payload, {rejectWithValue}) => {
//     try {
//       const token = payload.token;
//       const response = await axios.patch(
//         '/users/changePassword',
//         payload.data,
//         {
//           headers: {
//             // 'Content-Type': 'application/json',
//             // "Content-Type": "multipart/form-data",
//             Authorization: `Bearer ${token}`,
//           },
//         },
//       );
//       return response;
//     } catch (err) {
//       if (!err.response) {
//         throw err;
//       }
//       return rejectWithValue(err.response.data);
//     }
//   },
// );

// export const deleteAccount = createAsyncThunk(
//   'user/deleteAccount',
//   async (payload, {rejectWithValue}) => {
//     try {
//       const token = payload.token;
//       const response = await axios.delete('/users/remove', payload.data, {
//         headers: {
//           'Content-Type': 'application/json',
//           // "Content-Type": "multipart/form-data",
//           Authorization: `Bearer ${token}`,
//         },
//       });
//       return response;
//     } catch (err) {
//       if (!err.response) {
//         throw err;
//       }
//       return rejectWithValue(err.response.data);
//     }
//   },
// );
// export const updateProfileImage = createAsyncThunk(
//   'user/updateProfileImage',
//   async (payload, {rejectWithValue}) => {
//     try {
//       const token = payload.token;
//       const response = await axios.post('/users/profileImage', payload.data, {
//         headers: {
//           // 'Content-Type': 'application/json',
//           // "Content-Type": "multipart/form-data",
//           Authorization: `Bearer ${token}`,
//         },
//       });
//       return response;
//     } catch (err) {
//       if (!err.response) {
//         throw err;
//       }
//       return rejectWithValue(err.response.data);
//     }
//   },
// );
