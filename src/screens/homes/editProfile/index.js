import React, {useState} from 'react';
import {
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
  ImageBackground,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import LinearGradient from 'react-native-linear-gradient';

import {
  FormInput,
  AppButton,
  CheckBox,
  Header,
  HomeHeader,
  SearchBar,
  UserComment,
} from '../../../components';
import {Themes, Images} from './../../../constants';
import {Icon} from 'native-base';

const EditProfile = props => {
  const [state, setState] = useState({
    focus: false,
    secureText: true,
    checked1: false,
    checked2: false,
  });
  const [userInfo, setUserInfo] = useState({
    email: '',
    password: '',
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
            setting
            left
            text={'Edit Profile'}
            fontSize={24}
            onPress={() => {
              props.navigation.goBack();
            }}
          />
          <View style={styles.profileView}>
            <ImageBackground
              source={Images.Backgrounds.myProfile}
              style={{width: 116, height: 119}}>
              <TouchableOpacity
                style={{
                  position: 'absolute',
                  top: -10,
                  right: -20,
                }}
                activeOpacity={0.8}>
                <LinearGradient
                  colors={['#F54F84', '#F52667']}
                  style={styles.iconCamera}>
                  <Image
                    source={Images.Pictures.camera}
                    style={{width: 25.49, height: 22.12}}
                  />
                </LinearGradient>
              </TouchableOpacity>
            </ImageBackground>
          </View>
          <View style={styles.mainContainer}>
            <View
              style={{
                borderBottomColor: 'black',
                borderBottomWidth: 1,
              }}>
              <FormInput
                placeHolder="JOHN"
                placeHolderColor={'black'}
                iconColor={'black'}
                iconLName="user"
                iconLType="AntDesign"
                iconR
                iconRName="edit"
                iconRType="AntDesign"
                iconL
              />
            </View>
            <View
              style={{
                borderBottomColor: 'black',
                marginTop: 35,
                borderBottomWidth: 1,
              }}>
              <FormInput
                placeHolder="JOHN"
                placeHolderColor={'black'}
                iconColor={'black'}
                iconLName="user"
                iconLType="AntDesign"
                iconR
                iconRName="edit"
                iconRType="AntDesign"
                iconL
              />
            </View>
            <View
              style={{
                borderBottomColor: 'black',
                marginTop: 35,
                borderBottomWidth: 1,
              }}>
              <FormInput
                placeHolder="johnsmith@gmail.com"
                placeHolderColor={'black'}
                iconColor={'black'}
                iconLName="mail"
                iconLType="AntDesign"
                iconL
              />
            </View>
            <View
              style={{
                borderBottomColor: 'black',
                marginTop: 35,
                borderBottomWidth: 1,
              }}>
              <FormInput
                phoneNo
                iconL
                iconR
                iconColor={'black'}
                iconRName="edit"
                iconRType="AntDesign"
                keyboardType={'number-pad'}
                placeHolder="    56 775 8196"
              />
            </View>

            <View
              style={{
                borderBottomColor: 'black',
                marginTop: 35,
                borderBottomWidth: 1,
              }}>
              <FormInput
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
                placeHolder="*********"
              />
            </View>
            <View style={{marginTop: 5}}>
              <View style={styles.activeRoom}>
                <Text style={styles.activeRoomText}>Description</Text>
              </View>
              <View
                style={{
                  width: '90%',
                  minHeight: 50,
                  marginTop: 15,
                }}>
                <Text style={{color: '#000000', fontSize: 12}}>
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                  diam nonumy eirmod tempor invidunt ut labore et dolore magna
                  aliquyam erat, sed diam voluptua
                </Text>
              </View>
              <View style={styles.activeLine}></View>
            </View>

            <View style={{marginTop: 5}}>
              <View style={styles.activeRoom}>
                <Text style={styles.activeRoomText2}>Custom Privacy</Text>
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  marginTop: 10,
                  alignItems: 'center',
                  justifyContent: 'space-between',
                }}>
                <View>
                  <Text
                    style={{fontSize: 12, color: '#323232', fontWeight: '500'}}>
                    Hide Email Address
                  </Text>
                </View>
                <View style={{}}>
                  <CheckBox
                    onPress={() => setState({checked1: !state.checked1})}
                    checked={state.checked1}
                    left
                    checkedColor={'#F52A6A'}
                  />
                </View>
              </View>

              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                }}>
                <View>
                  <Text
                    style={{fontSize: 12, color: '#323232', fontWeight: '500'}}>
                    Hide Phone Number
                  </Text>
                </View>
                <View style={{position: 'absolute', right: 0, top: -16}}>
                  <CheckBox
                    onPress={() => setState({checked2: !state.checked2})}
                    checked={state.checked2}
                    left
                    checkedColor={'#F52A6A'}
                  />
                </View>
              </View>
              <View style={styles.activeLine}></View>
            </View>
            <View style={{paddingVertical: 20, width: '100%'}}>
              <LinearGradient
                colors={['#F52667', '#F54F84']}
                style={styles.loginBtn}>
                <AppButton
                  buttonStyle={styles.loginBtn}
                  label="Update"
                  onPress={() => {
                    props.navigation.navigate('myProfile');
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

export default EditProfile;

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
  iconCamera: {
    width: 51,
    height: 53,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  profileView: {
    width: 116,
    height: 140,
    marginTop: 30,
    alignSelf: 'center',
  },
  activeRoom: {
    width: '100%',
    flexDirection: 'row',
    marginTop: 10,
  },
  activeRoomText: {
    fontSize: 15,
    color: 'black',
    fontWeight: '800',
    width: '30%',
  },
  activeRoomText2: {
    fontSize: 18,
    color: 'black',
    fontWeight: '800',
  },
  activeLine: {
    marginTop: 7,
    width: '100%',
    borderBottomWidth: 1,
    borderColor: '#707070',
  },
  loginBtn: {
    width: '100%',
    height: 43,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  authButton: {
    width: '100%',
    height: 43,
  },
});
