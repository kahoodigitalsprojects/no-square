/* eslint-disable prettier/prettier */
import React, {useState} from 'react';
import {
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import {login} from '../../../api/authAPI';
import authService from '../../../services/authenticationService';
import {setSourceType} from '../../../slices/authSlice';
// import storage from '../../../api/asynStorage/asynStorage';
import {useSelector, useDispatch} from 'react-redux';
import {SafeAreaView} from 'react-native-safe-area-context';
import LinearGradient from 'react-native-linear-gradient';
import Toast from 'react-native-toast-message';
import {FormInput, AppButton, Header} from '../../../components';
import {Themes} from './../../../constants';
import axios from '../../../http-common';
//
const isValidFeilds = userInfo => {
  return Object.values(userInfo).every(value => value.trim());
};

const isValidEmail = value => {
  const email =
    /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
  return email.test(value);
};

const Login = props => {
  const [userInfo, setUserInfo] = useState({
    email: 'junaid@gmail.com',
    password: 'hello1234',
  });
  const {loginInfo} = useSelector(state => state.auth);
  const dispatch = useDispatch();

  const [error, setError] = useState();
  const [loading, setLoading] = useState(false);

  const [state, setState] = useState({
    focus: false,
    secureText: true,
  });

  const showToast = text => {
    Toast.show({
      type: 'error',
      text2: text,
      visibilityTime: 4000,
      topOffset: 30,
    });
  };

  const isValidForm = () => {
    if (!isValidFeilds(userInfo)) return 'All feilds are required';
  };

  const handleSubmit = () => {
    if (!isValidForm()) {
      console.log(userInfo);
      return true;
    } else {
      showToast(isValidForm());
      return false;
    }
  };
  const loginHandler = async () => {
    setLoading(true);
    const check = handleSubmit();
    if (!check) {
      setLoading(false);
    } else {
      const resultAction = await dispatch(login(userInfo));
      if (login.fulfilled.match(resultAction)) {
        // user will have a type signature of User as we passed that as the Returned parameter in createAsyncThunk
        setLoading(false);
        const user = resultAction.payload;
        props.navigation.replace('MyDrawer', {screen: 'home'});
        // storage.storeToken("check")
        // storage.storeToken(user.data.message.accessToken);
        // console.log("accessToken=",JSON.stringify(user.data));
        // console.log(storage.getToken());
        // console.log(user.data);
        // showToast('success', `Updated ${user.first_name} ${user.last_name}`)
      } else {
        if (resultAction.payload) {
          // Being that we passed in ValidationErrors to rejectType in `createAsyncThunk`, those types will be available here.
          // formikHelpers.setErrors(resultAction.payload.field_errors)
          console.log('inside login 1', resultAction.payload);
          showToast(resultAction.payload);
        } else {
          // showToast('error', `Update failed: ${resultAction.error}`)
          console.log('inside login 2', resultAction.error);
        }
        setLoading(false);
      }
      // .then(data =>{
      //   console.log(data);
      //   // authService.storeToken(data.payload.data.message.accessToken);
      //   // console.log("asyncStorage : ,",authService.getToken());
      //   dispatch(setSourceType(authService.getToken()));
      //   props.navigation.replace('MyDrawer', {screen: 'home'});
      // }).catch(error => {
      //   console.log(error)
      //   console.log(error.response.data);
      // });
      // setLoading(true);
      // axios.post('/authentication/login',userInfo)
      // .then(data =>{
      //   console.log(data);
      //         props.navigation.replace('MyDrawer', {screen: 'home'});
      //   setLoading(false);
      // }).catch(error=>{
      //   if (error.response) {
      //     // Request made and server responded
      //     console.log(error.response.data);
      //     showToast(error.response.data);
      //     console.log(error.response.status);
      //     console.log(error.response.headers);
      //   } else if (error.request) {
      //     // The request was made but no response was received
      //     console.log(error.request);
      //   } else {
      //     // Something happened in setting up the request that triggered an Error
      //     console.log('Error', error.message);
      //   }
      //   setLoading(false);
      // })
      // console.log("login :",userInfo);
    }
  };

  // console.log(loginInfo);
  return (
    <SafeAreaView style={styles.screenContainer}>
      <StatusBar backgroundColor={'white'} barStyle="dark-content" />
      <View style={{width: '100%', height: '100%'}}>
        <ScrollView
          keyboardShouldPersistTaps="handled"
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{flexGrow: 1}}>
          <View style={{marginTop: 25}}>
            <Header
              leftIconProps={() => props.navigation.navigate('mainAuth')}
              viewHeight={200}
              heightImage={101}
              width={103}
              fontSize={49}
              leftIcon
              text
            />
          </View>

          <View style={styles.mainBody}>
            <View style={styles.screenBody}>
              <View style={styles.screenHeader}>
                <Text style={styles.headingText}>Log In</Text>
              </View>

              <View style={styles.inputContainer}>
                <Text
                  style={{
                    alignSelf: 'flex-start',
                    fontSize: 14,
                    color: Themes.textColors.blackText,
                  }}>
                  Email
                </Text>
                <View
                  style={{
                    marginVertical: 8,
                    borderColor: state.focus === 'email' ? '#F54F84' : 'grey',
                    borderWidth: state.focus === 'email' ? 1 : 0.5,
                    borderRadius: 8,
                  }}>
                  <FormInput
                    borderW={1}
                    borderC={'#F52667'}
                    autoCapitalize="none"
                    value={userInfo.email}
                    onChangeText={value =>
                      setUserInfo({...userInfo, email: value})
                    }
                    iconL
                    iconLName="mail"
                    iconLType="AntDesign"
                    placeHolder="Enter your Email"
                    onFocus={() => setState({...state, focus: 'email'})}
                    onBlur={() => setState({...state, focus: ''})}
                  />
                </View>
                <View style={{marginVertical: 20}}>
                  <Text
                    style={{
                      alignSelf: 'flex-start',
                      fontSize: 14,
                      color: Themes.textColors.blackText,
                    }}>
                    Password
                  </Text>
                  <View
                    style={{
                      marginVertical: 8,
                      borderColor:
                        state.focus === 'password' ? '#F54F84' : 'grey',
                      borderWidth: state.focus === 'password' ? 1 : 0.5,
                      borderRadius: 8,
                    }}>
                    <FormInput
                      borderW={1}
                      borderC={'#F52667'}
                      value={userInfo.password}
                      onChangeText={value =>
                        setUserInfo({...userInfo, password: value})
                      }
                      iconL
                      secureText={state.secureText}
                      iconLName="lock"
                      iconLType="Feather"
                      iconR
                      iconRName={state.secureText ? 'eye-with-line' : 'eye'}
                      iconRType="Entypo"
                      onPressR={() =>
                        setState({...state, secureText: !state.secureText})
                      }
                      placeHolder="**********"
                      onFocus={() => setState({...state, focus: 'password'})}
                      onBlur={() => setState({...state, focus: ''})}
                    />
                  </View>
                </View>

                <TouchableOpacity
                  style={{marginTop: 5, alignSelf: 'flex-end'}}
                  onPress={() => props.navigation.navigate('forgetPassword')}>
                  <Text
                    style={{
                      color: Themes.textColors.blackText,
                    }}>
                    Forget Password?
                  </Text>
                </TouchableOpacity>
                <View style={{paddingVertical: 20, width: '100%'}}>
                  <LinearGradient
                    colors={['#F52667', '#F54F84']}
                    style={styles.loginBtn}>
                    <AppButton
                      loader={loading}
                      buttonStyle={styles.loginBtn}
                      label="Log In"
                      // onPress={() => {
                      //   props.navigation.replace('MyDrawer', {screen: 'home'});
                      // }}
                      onPress={loginHandler}
                    />
                  </LinearGradient>

                  <Text style={styles.orText}>Or</Text>
                  <View style={styles.bottomText}>
                    <Text style={styles.bottomLeftText}>
                      New at NoSquare? Please
                    </Text>
                    <TouchableOpacity
                      style={styles.bottomSignTextbtn}
                      onPress={() => {
                        props.navigation.navigate('signup');
                      }}>
                      <Text
                        style={{
                          fontSize: 16,
                          color: '#F54F84',
                          fontWeight: 'bold',
                        }}>
                        Sign Up
                      </Text>
                    </TouchableOpacity>
                    <Text style={styles.bottomRightText}>here</Text>
                  </View>

                  <View style={styles.bottomText}>
                    <Text style={styles.bottomLeftText}>
                      Having Trouble logging In?
                    </Text>
                    <TouchableOpacity
                      style={styles.bottomSignTextbtn}
                      onPress={() => {
                        props.navigation.navigate('Statics', {
                          screen: 'contactUs',
                        });
                      }}>
                      <Text
                        style={{
                          fontSize: 16,
                          color: '#F54F84',
                          fontWeight: 'bold',
                        }}>
                        Contact Us
                      </Text>
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
            </View>
          </View>
          {/* <View
          style={{
            height: 40,
            width: '90%',
            alignSelf: 'center',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Text style={{color: 'black'}}>Dont have an account? </Text>
          <TouchableOpacity
            activeOpacity={0.7}
            onPress={() => props.navigation.navigate('signup')}>
            <Text style={{color: 'black'}}>Signup</Text>
          </TouchableOpacity>
        </View> */}
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default Login;

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    backgroundColor: 'white',
    PaddingBottom: 100,
  },

  screenHeader: {
    width: '90%',
    height: 100,
    paddingTop: 20,
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  },

  headingText: {
    fontSize: 24,
    color: 'black',
    fontWeight: 'bold',
    letterSpacing: 0.5,
  },
  mainBody: {
    backgroundColor: Themes.backgrounds.body,
    elevation: 5,
    width: '100%',
    height: '100%',
    borderTopRightRadius: 40,
    borderTopLeftRadius: 40,
  },

  screenBody: {
    width: '90%',
    alignSelf: 'center',
    paddingBottom: 50,
  },

  inputContainer: {
    width: '100%',
    // height: 300,
    justifyContent: 'center',
    alignItems: 'center',
  },
  loginBtn: {
    width: '100%',
    height: 57,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  authButton: {
    width: '100%',
    height: 56,
  },
  orText: {
    fontSize: 19,
    color: '#615C5C',
    fontWeight: 'bold',
    alignSelf: 'center',
    marginTop: 30,
    opacity: 0.5,
  },
  bottomText: {
    width: '100%',
    height: 23,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    marginTop: 30,
  },
  bottomLeftText: {
    fontSize: 16,
    color: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  },
  bottomSignTextbtn: {
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 3,
  },
  bottomRightText: {
    fontSize: 16,
    color: 'black',
    marginLeft: 3,
  },
});
