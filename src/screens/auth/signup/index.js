import React, {useState} from 'react';
import {
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
  ActivityIndicator
} from 'react-native';
import {signup} from '../../../api/authAPI';
import {SafeAreaView} from 'react-native-safe-area-context';
import LinearGradient from 'react-native-linear-gradient';
import Toast from 'react-native-toast-message';
import {FormInput, AppButton, CheckBox, Header} from '../../../components';
import {Themes, Images} from './../../../constants';
import {Icon} from 'native-base';
import { useSelector, useDispatch } from 'react-redux';
import axios from '../../../http-common';


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
    firstName: '',
    lastName: '',
    userName: '',
    email: '',
    gender:'',
    age:null,
    confirmPassword: '',
    password: '',
    phoneNo: '',
  });
  const dispatch = useDispatch();
  const [error, setError] = useState('');

  const [state, setState] = useState({
    focus: false,
    secureText: true,
    secureText2: true,
    checked: false,
    checked2: false,
  });

  const [loading,setLoading]= useState(false);
  const showToast = text => {
    // console.log("toast checj",text);
    Toast.show({
      type: 'error',
      text2: text,
      visibilityTime: 4000,
      topOffset: 30,
    });
  };

  const isValidForm = () => {
    if (!isValidFeilds(userInfo)) return 'All feilds are required';

    if (!isValidEmail(userInfo.email)) return 'Invalid Email';
  };

  const handleSubmit = () => {
    console.log(isValidForm());
    if (!isValidForm()) {
      console.log(userInfo);
    } else {
      showToast(isValidForm());
    }
    // if (isValidForm()) {
    //   console.log(userInfo);
    // } else {
    //   showToast(isValidForm());
    // }
  };

  const signupHandler = async()=>{
    let check=false;
    Object.entries(userInfo).map(item => {
      // console.log(userInfo[item[0]])
      let a = userInfo[item[0]]
      if(!a){
        // console.log(" chekc")
        if(!state.checked  && !state.checked2){
          check = true;
        }
      }
    })
    if(check){
      showToast("Please Fill All Fields")
    }
    else {

    console.log("checking",check);
    setLoading(true);
    const resultAction= await dispatch(signup(userInfo));
    if (signup.fulfilled.match(resultAction)) {
      // user will have a type signature of User as we passed that as the Returned parameter in createAsyncThunk
      const user = resultAction.payload;
      // console.log("accessToken",JSON.stringify(user));
      // showToast('success', `Updated ${user.first_name} ${user.last_name}`)
      setLoading(false);
      Object.entries(userInfo).map(item => {
        console.log(userInfo[item[0]])
        let a = userInfo[item[0]];
        setUserInfo({a:null});
      })
      setUserInfo({...state,checked:false,checked2:false,secureText:true,secureText2:true})
      props.navigation.navigate('subcrption');
    } else {
      if (resultAction.payload) {
        // Being that we passed in ValidationErrors to rejectType in `createAsyncThunk`, those types will be available here.
        // formikHelpers.setErrors(resultAction.payload.field_errors)
        console.log("inside login 1",resultAction.payload);
        showToast(resultAction.payload);
      } else {
        // showToast('error', `Update failed: ${resultAction.error}`)
        console.log("inside login 2",(resultAction.error));
      }
      setLoading(false);
    }
    // console.log(userInfo);
    // dispatch(signup(userInfo))
    // .then(data =>{
    //   // console.log(data);
    //   console.log("hello this is data given from toolkit",data);
    //   // authService.storeToken(data.payload.data.message.accessToken);
    //   // console.log("asyncStorage : ,",authService.getToken());
    //   // dispatch(setSourceType(authService.getToken()));
    //   props.navigation.navigate('subcrption');
    // }).catch(err => {
    //   console.log(err);
    // });
    // setLoading(true);
    // axios.post('/authentication/signUp',userInfo)
    // .then(data =>{
    //   console.log(data);
    //   setLoading(false);
    //   props.navigation.navigate('subcrption');
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
  };
}

  return (
    <SafeAreaView style={styles.screenContainer}>
      <StatusBar backgroundColor={'white'} barStyle="dark-content" />
      <View style={{width: '100%', height: '100%'}}>
        <ScrollView
          keyboardShouldPersistTaps="handled"
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{flexGrow: 1}}>
          <Header
            leftIcon
            text
            leftIconProps={() => props.navigation.goBack()}
          />
          <View style={styles.mainBody}>
            <View style={styles.screenBody}>
              <View style={styles.screenHeader}>
                <Text style={styles.headingText}>Sign Up</Text>
              </View>

              <View style={styles.inputContainer}>
                <Text
                  style={{
                    alignSelf: 'flex-start',
                    fontSize: 14,
                    color: Themes.textColors.blackText,
                  }}>
                  First Name
                </Text>
                <View
                  style={{
                    marginVertical: 8,
                    borderColor:
                      state.focus === 'firstName' ? '#F54F84' : 'grey',
                    borderWidth: state.focus === 'firstName' ? 1 : 0.5,
                    borderRadius: 8,
                  }}>
                  <FormInput
                    borderW={1}
                    borderC={'#F52667'}
                    autoCapitalize="none"
                    value={userInfo.firstName}
                    onChangeText={value =>
                      setUserInfo({...userInfo, firstName: value})
                    }
                    iconL
                    iconLName="user"
                    iconLType="AntDesign"
                    placeHolder="Enter Your First Name"
                    onFocus={() => setState({...state, focus: 'firstName'})}
                    onBlur={() => setState({...state, focus: ''})}
                  />
                </View>

                <View style={{marginVertical: 5}}>
                  <Text
                    style={{
                      alignSelf: 'flex-start',
                      fontSize: 14,
                      color: Themes.textColors.blackText,
                    }}>
                    Last Name
                  </Text>
                  <View
                    style={{
                      marginVertical: 8,
                      borderColor:
                        state.focus === 'lastName' ? '#F54F84' : 'grey',
                      borderWidth: state.focus === 'lastName' ? 1 : 0.5,
                      borderRadius: 8,
                    }}>
                    <FormInput
                      borderW={1}
                      borderC={'#F52667'}
                      autoCapitalize="none"
                      value={userInfo.lastName}
                      onChangeText={value =>
                        setUserInfo({...userInfo, lastName: value})
                      }
                      iconL
                      iconLName="user"
                      iconLType="AntDesign"
                      placeHolder="Enter Your Last Name"
                      onFocus={() => setState({...state, focus: 'lastName'})}
                      onBlur={() => setState({...state, focus: ''})}
                    />
                  </View>

                  <View style={{marginVertical: 5}}>
                    <Text
                      style={{
                        alignSelf: 'flex-start',
                        fontSize: 14,
                        color: Themes.textColors.blackText,
                      }}>
                      User Name
                    </Text>
                    <View
                      style={{
                        marginVertical: 8,
                        borderColor:
                          state.focus === 'userName' ? '#F54F84' : 'grey',
                        borderWidth: state.focus === 'userName' ? 1 : 0.5,
                        borderRadius: 8,
                      }}>
                      <FormInput
                        borderW={1}
                        borderC={'#F52667'}
                        autoCapitalize="none"
                        value={userInfo.userName}
                        onChangeText={value =>
                          setUserInfo({...userInfo, userName: value})
                        }
                        iconL
                        iconLName="user"
                        iconLType="AntDesign"
                        placeHolder="Enter Your User Name"
                        onFocus={() => setState({...state, focus: 'userName'})}
                        onBlur={() => setState({...state, focus: ''})}
                      />
                    </View>
                  </View>
                  <Text style={{color: '#272626'}}>Gender</Text>
                  <View
                    style={{
                      width: '95%',
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                      marginTop: 5,
                    }}>
                    <View
                      style={{
                        width: '60%',
                        flexDirection: 'row',
                        alignItems: 'center',
                      }}>
                      <Icon
                        name="male"
                        type="FontAwesome5"
                        style={{fontSize: 20}}
                      />
                      <CheckBox
                        alignItem={'flex-start'}
                        onPress={() => {
                          setUserInfo({...userInfo,gender:'Male'})
                          setState({...state,checked: !state.checked,checked2:false})}
                        }
                        checked={state.checked}
                        text={'Male'}
                      />
                    </View>

                    <View
                      style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        width: '40%',
                      }}>
                      <Icon
                        name="female"
                        type="FontAwesome5"
                        style={{fontSize: 20, position: 'absolute', right: 85}}
                      />
                      <CheckBox
                        alignItem={'flex-end'}
                        onPress={() => {
                          setUserInfo({...userInfo,gender:'Female'})
                          setState({...state,checked2: !state.checked2,checked:false})}
                        }
                        checked={state.checked2}
                        text={'Female'}
                      />
                    </View>
                  </View>
                </View>

                <View style={{marginVertical: 3}}>
                  <Text
                    style={{
                      alignSelf: 'flex-start',
                      fontSize: 14,
                      color: Themes.textColors.blackText,
                    }}>
                    Age
                  </Text>
                  <View
                    style={{
                      marginVertical: 8,
                      borderColor: state.focus === 'age' ? '#F54F84' : 'grey',
                      borderWidth: state.focus === 'age' ? 1 : 0.5,
                      borderRadius: 8,
                    }}>
                    <FormInput
                      borderW={1}
                      borderC={'#F52667'}
                      autoCapitalize="none"
                      value={userInfo.age}
                      onChangeText={value =>
                        setUserInfo({...userInfo, age: value})
                      }
                      keyboardType={'number-pad'}
                      iconL
                      iconLName="calendar-month-outline"
                      iconLType="MaterialCommunityIcons"
                      placeHolder="Enter Age"
                      onFocus={() => setState({...state, focus: 'age'})}
                      onBlur={() => setState({...state, focus: ''})}
                    />
                  </View>
                </View>

                <View style={{marginVertical: 3}}>
                  <Text
                    style={{
                      alignSelf: 'flex-start',
                      fontSize: 14,
                      color: Themes.textColors.blackText,
                    }}>
                    Email Address
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
                      placeHolder="Enter Email Address"
                      onFocus={() => setState({...state, focus: 'email'})}
                      onBlur={() => setState({...state, focus: ''})}
                    />
                  </View>
                </View>

                <View style={{marginVertical: 5}}>
                  <Text
                    style={{
                      alignSelf: 'flex-start',
                      fontSize: 14,
                      color: Themes.textColors.blackText,
                    }}>
                    Phone Number
                  </Text>
                  <View
                    style={{
                      marginVertical: 8,
                      borderColor: state.focus === 'phone' ? '#F54F84' : 'grey',
                      borderWidth: state.focus === 'phone' ? 1 : 0.5,
                      borderRadius: 8,
                    }}>
                    <FormInput
                      borderW={1}
                      borderC={'#F52667'}
                      value={userInfo.phoneNo}
                      onChangeText={value =>
                        setUserInfo({...userInfo, phoneNo: value})
                      }
                      iconL
                      iconLName="phone"
                      iconLType="Feather"
                      keyboardType={'number-pad'}
                      placeHolder="Enter Phone Number"
                      onFocus={() => setState({...state, focus: 'phone'})}
                      onBlur={() => setState({...state, focus: 'phone'})}
                    />
                  </View>
                </View>

                <View style={{marginVertical: 5}}>
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
                      placeHolder="*************"
                      onFocus={() => setState({...state, focus: 'password'})}
                      onBlur={() => setState({...state, focus: ''})}
                    />
                  </View>
                </View>

                <View style={{marginVertical: 5}}>
                  <Text
                    style={{
                      alignSelf: 'flex-start',
                      fontSize: 14,
                      color: Themes.textColors.blackText,
                    }}>
                    Confirm Password
                  </Text>
                  <View
                    style={{
                      marginVertical: 8,
                      borderColor:
                        state.focus === 'confirmPassword' ? '#F54F84' : 'grey',
                      borderWidth: state.focus === 'confirmPassword' ? 1 : 0.5,
                      borderRadius: 8,
                    }}>
                    <FormInput
                      borderW={1}
                      borderC={'#F52667'}
                      value={userInfo.confirmPassword}
                      onChangeText={value =>
                        setUserInfo({...userInfo, confirmPassword: value})
                      }
                      iconL
                      secureText={state.secureText2}
                      iconLName="lock"
                      iconLType="Feather"
                      iconR
                      iconRName={state.secureText2 ? 'eye-with-line' : 'eye'}
                      iconRType="Entypo"
                      onPressR={() =>
                        setState({...state, secureText2: !state.secureText2})
                      }
                      placeHolder="*************"
                      onFocus={() =>
                        setState({...state, focus: 'confirmPassword'})
                      }
                      onBlur={() => setState({...state, focus: ''})}
                    />
                  </View>
                </View>

                <View style={{paddingVertical: 20, width: '100%'}}>
                  <LinearGradient
                    colors={['#F52667', '#F54F84']}
                    style={styles.loginBtn}>
                    <AppButton
                    loader = {loading}
                      buttonStyle={styles.loginBtn}
                      label="Next"
                      onPress={signupHandler}
                    />
                  </LinearGradient>
                  <View
                    style={{
                      marginTop: 10,
                      width: '100%',
                      justifyContent: 'center',
                      flexDirection: 'row',
                    }}>
                    <Text style={{fontSize: 15, color: 'black'}}>
                      Having Trouble Signing In?
                    </Text>
                    <TouchableOpacity
                      style={{marginLeft: 5}}
                      activeOpacity={0.7}
                      onPress={() => {
                        props.navigation.navigate('Statics', {
                          screen: 'contactUs',
                        });
                      }}>
                      <Text
                        style={{
                          color: '#F52768',
                          fontWeight: 'bold',
                          fontSize: 15,
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
    height: 70,
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
});
