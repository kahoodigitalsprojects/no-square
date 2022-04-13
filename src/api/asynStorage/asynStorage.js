// // import AsyncStorage from '@react-native-async-storage/async-storage';

//  const storeToken = async (value) => {
//     try {
//       await AsyncStorage.setItem('accessToken', value)
//     } catch (e) {
//       // saving error
//     }
//   }
//    const storeData = async (value) => {
//     try {
//       const jsonValue = JSON.stringify(value)
//       await AsyncStorage.setItem('storedData', jsonValue)
//     } catch (e) {
//       // saving error
//     }
//   }
  
//  const getToken = async () => {
//     try {
//       const value = await AsyncStorage.getItem('accessToken')
//       if(value !== null) {
//         // value previously stored
//         return value;

//       }
//     } catch(e) {
//       // error reading value
//       throw e;
//     }
//   }
  
//  const getData = async () => {
//     try {
//       const jsonValue = await AsyncStorage.getItem('storedData')
//       return jsonValue != null ? JSON.parse(jsonValue) : null;
//     } catch(e) {
//       // error reading value
//       throw e
//     }
//   }

//    const storage ={
//     storeToken,
//     getToken
//   }

//   export default storage;
  