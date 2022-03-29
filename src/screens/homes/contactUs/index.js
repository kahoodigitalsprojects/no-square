import React, {useEffect, useState} from 'react';
import {
  BackHandler,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import LinearGradient from 'react-native-linear-gradient';

import {
  AppButton,
  FormInput,
  HomeHeader,
  CustomPopup,
} from '../../../components';

import {Icon, Item} from 'native-base';

const ContactUs = props => {
  const [userInfo, setUserInfo] = useState({
    firstName: '',
    LastName: '',
    email: '',
    messege: '',
  });

  const [state, setState] = useState({
    focus: false,
    secureText: true,
    secureText2: true,
    checked: false,
    checked2: false,
  });
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const backScreen = props?.route?.params?.backScreen;
    const backAction = () => {
      if (backScreen) {
        props.navigation.navigate('MyTabs', {screen: backScreen});
      } else {
        props.navigation.goBack();
      }

      return true;
    };
    let backHandler;
    props.navigation.addListener('focus', () => {
      backHandler = BackHandler.addEventListener(
        'hardwareBackPress',
        backAction,
      );
    });

    props.navigation.addListener('blur', () => {
      if (backHandler) {
        backHandler.remove();
      }
    });
  }, []);

  return (
    <>
      <SafeAreaView style={styles.screenContainer}>
        <StatusBar backgroundColor={'white'} barStyle="dark-content" />
        <ScrollView
          keyboardShouldPersistTaps="handled"
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{flexGrow: 1}}>
          <View style={{marginTop: 40}}>
            <HomeHeader
              navigation={props.navigation}
              setting
              text={'Contact Us '}
              left
              onPress={() => props.navigation.goBack()}
            />

            <View style={styles.mainBody}>
              <View style={styles.noticeBox}>
                <Text style={{fontSize: 16, color: '#000', fontWeight: 'bold'}}>
                  For Email Now
                </Text>

                <View style={{height: 50, marginTop: 10}}>
                  <Text
                    style={{textAlign: 'center', color: '#000', fontSize: 18}}>
                    If you have any questions of concerns, send us an email
                  </Text>
                </View>

                <Icon
                  name="mail"
                  type="Ionicons"
                  style={{color: '#D7245C', fontSize: 30}}
                />
                <Text style={{fontSize: 16, color: '#000', fontWeight: 'bold'}}>
                  info@stealfriday.com
                </Text>
              </View>

              <View style={styles.ortext}>
                <Text style={{fontSize: 25, color: '#000', fontWeight: 'bold'}}>
                  or
                </Text>
                <Text style={{fontSize: 20, color: '#000', fontWeight: 'bold'}}>
                  Send US a Message
                </Text>
              </View>

              <View style={{width: '100%', marginTop: 10}}>
                <View style={styles.inputContainer}>
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
                      placeHolder="First Name"
                      onFocus={() => setState({...state, focus: 'firstName'})}
                      onBlur={() => setState({...state, focus: ''})}
                    />
                  </View>

                  <View style={{marginVertical: 5}}>
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
                        placeHolder="Last Name"
                        onFocus={() => setState({...state, focus: 'lastName'})}
                        onBlur={() => setState({...state, focus: ''})}
                      />
                    </View>
                  </View>

                  <View style={{marginVertical: 3}}>
                    <View
                      style={{
                        marginVertical: 8,
                        borderColor:
                          state.focus === 'email' ? '#F54F84' : 'grey',
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
                        placeHolder="Email Address"
                        onFocus={() => setState({...state, focus: 'email'})}
                        onBlur={() => setState({...state, focus: ''})}
                      />
                    </View>
                  </View>

                  <View style={{marginVertical: 5}}>
                    <View
                      style={{
                        marginVertical: 8,
                        borderColor:
                          state.focus === 'messege' ? '#F54F84' : 'grey',
                        borderWidth: state.focus === 'messege' ? 1 : 0.5,
                        borderRadius: 8,
                      }}>
                      <FormInput
                        styleI={{height: '100%', width: '100%'}}
                        borderW={1}
                        borderC={'#F52667'}
                        autoCapitalize="none"
                        value={userInfo.messege}
                        multiLine={true}
                        textAlign
                        height={238}
                        textHeight={238}
                        onChangeText={value =>
                          setUserInfo({...userInfo, messege: value})
                        }
                        placeHolder="Messege"
                        onFocus={() => setState({...state, focus: 'messege'})}
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
                        label="Send"
                        onPress={() => {
                          setVisible(true);
                        }}
                      />
                    </LinearGradient>
                  </View>
                </View>
              </View>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>

      <CustomPopup
        modelWidth={'70%'}
        stateOverlay={visible}
        setstateOverlay={() => setVisible(false)}
        modelHeight={225}
        contactSendMessege
        border_radius={15}
        OBonPress={() => {
          setVisible(false);
          props.navigation.navigate('Auth', {screen: 'login'});
        }}
      />
    </>
  );
};

export default ContactUs;

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    backgroundColor: 'white',
  },
  mainBody: {
    width: '80%',
    height: '100%',
    alignSelf: 'center',
    paddingBottom: 30,
  },
  noticeBox: {
    width: '100%',
    height: 214,
    backgroundColor: '#ffff',
    elevation: 5,
    marginTop: 10,
    alignItems: 'center',
    justifyContent: 'space-evenly',
    borderColor: '#F54F84',
    borderWidth: 1,
  },
  ortext: {
    width: '100%',
    height: 65,
    marginTop: 10,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  loginBtn: {
    width: '100%',
    alignSelf: 'center',
    height: 38,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
