import React, {useState} from 'react';
import {
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import LinearGradient from 'react-native-linear-gradient';
import Toast from 'react-native-toast-message';
import {
  FormInput,
  AppButton,
  CheckBox,
  Header,
  HomeHeader,
} from '../../../components';
import {Themes, Images} from './../../../constants';
import {Icon} from 'native-base';

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
    LastName: '',
    email: '',
    confirmPassword: '',
    password: '',
    phone: '',
  });

  const [error, setError] = useState('');

  const [state, setState] = useState({
    focus: false,
    secureText: true,
    secureText2: true,
    checked: false,
    checked2: false,
  });

  const showToast = text => {
    Toast.show({
      type: 'error',
      text2: text,
      visibilityTime: 4000,
      topOffset: 15,
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
            leftIconProps={() => props.navigation.navigate('mainAuth')}
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
                      value={userInfo.LastName}
                      onChangeText={value =>
                        setUserInfo({...userInfo, LastName: value})
                      }
                      iconL
                      iconLName="user"
                      iconLType="AntDesign"
                      placeHolder="Enter Your Last Name"
                      onFocus={() => setState({...state, focus: 'lastName'})}
                      onBlur={() => setState({...state, focus: ''})}
                    />
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
                        onPress={() => setState({checked: !state.checked})}
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
                        onPress={() => setState({checked2: !state.checked2})}
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
                      value={userInfo.phone}
                      onChangeText={value =>
                        setUserInfo({...userInfo, phone: value})
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
                      buttonStyle={styles.loginBtn}
                      label="Next"
                      onPress={() => {
                        props.navigation.navigate('subcrption');
                      }}
                    />
                  </LinearGradient>
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
