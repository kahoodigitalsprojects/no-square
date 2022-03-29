import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  ScrollView,
  StatusBar,
  Image,
  TouchableOpacity,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Toast from 'react-native-toast-message';
import {Icon, Item} from 'native-base';
import {Themes, Images} from './../../../constants';
import {HomeHeader, FormInput, AppButton} from '../../../components';

const ChangePassword = props => {
  const [userInfo, setUserInfo] = useState({
    email: '',
    currentPassword: '',
    newPassword: '',
    confirmPassword: '',
  });

  const [error, setError] = useState();

  const [state, setState] = useState({
    focus: false,
    secureText1: true,
    secureText2: true,
    secureText3: true,
  });

  const showToast = text => {
    Toast.show({
      type: 'error',
      text2: text,
      visibilityTime: 4000,
      topOffset: 15,
    });
  };

  return (
    <SafeAreaView style={styles.screenContainer}>
      <StatusBar backgroundColor={'white'} barStyle="dark-content" />
      <View style={{marginTop: 40}}>
        <HomeHeader
          navigation={props.navigation}
          setting
          right
          text={'Change Password'}
          onPress={'settings'}
          settingIconProps={() => props.navigation.goBack()}
        />
      </View>

      <ScrollView
        keyboardShouldPersistTaps="handled"
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{flexGrow: 1}}>
        <View style={styles.body}>
          <View
            style={{
              width: '100%',
              marginTop: 70,
              alignItems: 'center',
            }}>
            <View
              style={{
                marginVertical: 28,
                borderColor:
                  state.focus === 'currentPassword' ? '#F54F84' : 'grey',
                borderWidth: state.focus === 'currentPassword' ? 1 : 0.5,
                borderRadius: 10,
              }}>
              <FormInput
                borderRadius={10}
                borderW={1}
                borderC={'#F52667'}
                value={userInfo.currentPassword}
                onChangeText={value =>
                  setUserInfo({...userInfo, currentPassword: value})
                }
                iconL
                secureText={state.secureText1}
                iconLName="lock"
                iconLType="Feather"
                iconR
                iconRName={state.secureText1 ? 'eye-with-line' : 'eye'}
                iconRType="Entypo"
                onPressR={() =>
                  setState({...state, secureText1: !state.secureText1})
                }
                placeHolder="Enter Current Password"
                onFocus={() => setState({...state, focus: 'currentPassword'})}
                onBlur={() => setState({...state, focus: ''})}
              />
            </View>

            <View
              style={{
                marginVertical: 28,
                borderColor:
                  state.focus === 'Enter New Password' ? '#F54F84' : 'grey',
                borderWidth: state.focus === 'Enter New Password' ? 1 : 0.5,
                borderRadius: 10,
              }}>
              <FormInput
                borderRadius={10}
                borderW={1}
                borderC={'#F52667'}
                value={userInfo.newPassword}
                onChangeText={value =>
                  setUserInfo({...userInfo, newPassword: value})
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
                placeHolder="Enter New Password"
                onFocus={() =>
                  setState({...state, focus: 'Enter New Password'})
                }
                onBlur={() => setState({...state, focus: ''})}
              />
            </View>

            <View
              style={{
                marginVertical: 28,
                borderColor:
                  state.focus === 'Confirm Password' ? '#F54F84' : 'grey',
                borderWidth: state.focus === 'Confirm Password' ? 1 : 0.5,
                borderRadius: 10,
              }}>
              <FormInput
                borderRadius={10}
                borderW={1}
                borderC={'#F52667'}
                value={userInfo.confirmPassword}
                onChangeText={value =>
                  setUserInfo({...userInfo, confirmPassword: value})
                }
                iconL
                secureText={state.secureText3}
                iconLName="lock"
                iconLType="Feather"
                iconR
                iconRName={state.secureText3 ? 'eye-with-line' : 'eye'}
                iconRType="Entypo"
                onPressR={() =>
                  setState({...state, secureText3: !state.secureText3})
                }
                placeHolder="Confirm Password"
                onFocus={() => setState({...state, focus: 'Confirm Password'})}
                onBlur={() => setState({...state, focus: ''})}
              />
            </View>

            <View style={{paddingVertical: 20, width: '100%'}}>
              <LinearGradient
                colors={['#F52667', '#F54F84']}
                style={styles.loginBtn}>
                <AppButton
                  buttonStyle={styles.loginBtn}
                  label="Save"
                  onPress={() => {
                    // props.navigation.replace('MyDrawer', {screen: 'home'});
                  }}
                />
              </LinearGradient>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ChangePassword;

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    backgroundColor: 'white',
  },
  body: {
    width: '90%',
    height: '100%',
    alignSelf: 'center',
  },
  loginBtn: {
    width: '100%',
    height: 43,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
