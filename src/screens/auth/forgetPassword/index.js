import React, {useState} from 'react';
import {
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import LinearGradient from 'react-native-linear-gradient';

import {
  FormInput,
  AppButton,
  CustomPopup,
  HomeHeader,
} from '../../../components';
import {Themes, Images} from './../../../constants';

const ForgetPassword = props => {
  const [visible, setVisible] = useState(false);
  const [userInfo, setUserInfo] = useState({
    email: '',
    password: '',
  });
  const [state, setState] = useState({
    focus: false,
    secureText: true,
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
    <>
      <SafeAreaView
        style={{
          flex: 1,
          backgroundColor: 'white',
        }}>
        <StatusBar backgroundColor={'white'} barStyle="dark-content" />
        <ScrollView
          keyboardShouldPersistTaps="handled"
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{flexGrow: 1}}>
          <View style={styles.container}>
            <HomeHeader
              onPress={() => props.navigation.navigate('login')}
              setting
              left
              text={'Forget Password'}
              fontSize={24}
            />

            <View style={styles.mainContainer}>
              <View style={styles.HeaderText}>
                <Text style={{fontSize: 20, color: '#191919B8'}}>
                  Enter Your Registered Email To Get The Password Reset Link
                </Text>
              </View>
              <View style={{marginTop: 40}}>
                <Text
                  style={{
                    alignSelf: 'center',
                    fontSize: 20,
                    color: Themes.textColors.blackText,
                    fontWeight: '400',
                  }}>
                  Email Address
                </Text>
                <View
                  style={{
                    marginVertical: 20,
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
                    placeHolder="example@gmail.com"
                    onFocus={() => setState({...state, focus: 'email'})}
                    onBlur={() => setState({...state, focus: ''})}
                  />
                </View>

                <TouchableOpacity style={{marginTop: 20}}>
                  <LinearGradient
                    colors={['#F52667', '#F54F84']}
                    style={styles.loginBtn}>
                    <AppButton
                      onPress={() => {
                        setVisible(true);
                      }}
                      buttonStyle={styles.loginBtn}
                      label="Submit"
                      fontSize={25}
                    />
                  </LinearGradient>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
      <CustomPopup
        stateOverlay={visible}
        setstateOverlay={() => setVisible(false)}
        modelHeight={220}
        paymentSuccesProps={props.navigation}
        modelWidth={'90%'}
        forgetPassword
        border_radius={30}
        OBonPress={() => {
          setVisible(false);
        }}
      />
    </>
  );
};

export default ForgetPassword;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
  },
  mainContainer: {
    width: '90%',
    height: '100%',
    alignSelf: 'center',
    marginTop: 10,
    paddingBottom: 70,
  },
  HeaderText: {
    width: '80%',
    marginTop: 40,
    height: 47,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
  loginBtn: {
    width: '100%',
    alignSelf: 'center',
    height: 57,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
