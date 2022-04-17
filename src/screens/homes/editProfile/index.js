/* eslint-disable react-native/no-inline-styles */
import React, {useState, useEffect} from 'react';
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
// import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
// import ImagePicker from 'react-native-image-picker';
import ImagePicker from 'react-native-image-crop-picker';
import {SafeAreaView} from 'react-native-safe-area-context';
import LinearGradient from 'react-native-linear-gradient';
import * as Animatable from 'react-native-animatable';

import {FormInput, AppButton, CheckBox, HomeHeader} from '../../../components';
import {Images} from './../../../constants';
import {Icon} from 'native-base';
import {updateProfile, updateProfileImage} from '../../../api/userAPI';
import {useSelector, useDispatch} from 'react-redux';
import Toast from 'react-native-toast-message';

const CheckBoxComponent = ({onPress, checked = false}) => {
  return (
    <TouchableOpacity
      activeOpacity={0.7}
      onPress={onPress}
      style={{
        width: 20,
        height: 20,
        borderWidth: 1,
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: '#D3D3D3',
      }}>
      {checked && (
        <Animatable.View
          animation={checked ? 'bounceIn' : 'bounceOut'}
          duration={500}
          useNativeDriver={true}>
          <Icon
            name="check"
            type="FontAwesome"
            style={{
              color: '#F52A6A',
              fontSize: 15,
            }}
          />
        </Animatable.View>
      )}
    </TouchableOpacity>
  );
};

const isValidFeilds = userInfo => {
  return Object.values(userInfo).every(value => value.trim());
};
const EditProfile = props => {
  const {userData} = useSelector(state => state.user);
  const dispatch = useDispatch();
  const [state, setState] = useState({
    focus: false,
    secureText: true,
  });
  const [imageData, setImageData] = useState({
    filepath: {
      data: '',
      uri: '',
    },
    fileData: '',
    fileUri: '',
  });
  const [loading, setLoading] = useState(false);
  const [checked1, setChecked1] = useState(false);
  const [checked2, setChecked2] = useState(false);
  // const [Token, setToken] = useState('');
  const [userInfo, setUserInfo] = useState({
    firstName: '',
    lastName: '',
    userName: '',
    email: '',
    gender: '',
    age: '',
    // confirmPassword: '',
    // password: '',
    phoneNo: '',
    profileImage: '',
    imageUrl: '',
    // description: 'a',
  });
  useEffect(() => {
    console.log(userData);
    // setToken(userData.accessToken);
    setUserInfo({
      firstName: userData.user.firstName,
      lastName: userData.user.lastName,
      userName: userData.user.userName,
      email: userData.user.email,
      gender: userData.user.gender,
      age: userData.user.age,
      // confirmPassword: '',
      // password: '',
      imageUrl: userData.user.image,
      phoneNo: userData.user.phoneNo,
      profileImage: userData.user.image,
      // description: userData.user.description,
    });
    // return () => {
    //   // console.log("unmount works")
    //   setUserInfo({}); // This worked for me
    // };
  }, []);
  const isValidForm = () => {
    if (!isValidFeilds(userInfo)) {
      return 'All feilds are required';
    }
    // if (!isValidEmail(userInfo.email)) return 'Invalid Email';
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
  const showToast = text => {
    Toast.show({
      type: 'error',
      text2: text,
      visibilityTime: 4000,
      topOffset: 15,
    });
  };
  // const getFormData = object =>
  //   Object.keys(object).reduce((formData, key) => {
  //     formData.append(key, object[key]);
  //     return formData;
  //   }, new FormData());

  // const toFormData = object => {
  //   var form_data = new FormData();
  //   // console.log("user object",userInfo);
  //   for (var key in object) {
  //     form_data.append(key, object[key]);
  //   }
  //   return form_data;
  // };
  // console.log(userInfo.profileImage);
  const openCamera = () => {
    ImagePicker.openCamera({
      width: 300,
      height: 400,
      cropping: true,
    }).then(image => {
      console.log(image);
      // setUserInfo({profileImage: 'dfjahsdfjh'});
      // editProfileHandler();
      // profileImgeHandler();
    });
  };
  const selectImage = () => {
    ImagePicker.openPicker({
      width: 300,
      height: 400,
      cropping: true,
    }).then(image => {
      console.log(image);
      setUserInfo({profileImage: image});
      // editProfileHandler();
    });
  };

  const editProfileHandler = async () => {
    try {
      const token = userData.accessToken;
      // console.log(token);
      const resultAction = await dispatch(
        updateProfile({token: token, data: userInfo}),
      );
      if (updateProfile.fulfilled.match(resultAction)) {
        // user will have a type signature of User as we passed that as the Returned parameter in createAsyncThunk
        setLoading(false);
        const user = resultAction.payload;
        showToast('updated successfully');
        props.navigation.replace('MyDrawer', {screen: 'login'});
      } else {
        if (resultAction.payload) {
          // Being that we passed in ValidationErrors to rejectType in `createAsyncThunk`, those types will be available here.
          // formikHelpers.setErrors(resultAction.payload.field_errors)
          console.log('inside changepassword 1', resultAction.payload);
          showToast(resultAction.payload);
        } else {
          // showToast('error', `Update failed: ${resultAction.error}`)
          console.log('inside changepassword 2', resultAction.error);
        }
        setLoading(false);
      }
    } catch (err) {
      console.log(err);
      setLoading(false);
    }
  };

  // const profileImgeHandler = async () => {
  //   try {
  //     setLoading(true);
  //     console.log('working???????');
  //     // const check = handleSubmit();
  //     // if (!check) {
  //     //   // showToast('all field');
  //     //   setLoading(false);
  //     // } else {
  //     const token = userData.accessToken;
  //     console.log('checking that image is working?');
  //     const resultAction = await dispatch(
  //       editProfileImage({token: token, data: userInfo.profileImage}),
  //     );
  //     console.log(resultAction);
  //     if (editProfileImage.fulfilled.match(resultAction)) {
  //       // user will have a type signature of User as we passed that as the Returned parameter in createAsyncThunk
  //       const user = resultAction.payload;
  //       console.log('user data for update', user.data);
  //       setLoading(false);
  //       showToast('updated Successfully');
  //       props.navigation.navigate('myProfile');
  //     } else {
  //       if (resultAction.payload) {
  //         // Being that we passed in ValidationErrors to rejectType in `createAsyncThunk`, those types will be available here.
  //         // formikHelpers.setErrors(resultAction.payload.field_errors)
  //         setLoading(false);
  //         console.log('inside login 1', resultAction.payload);
  //         showToast(resultAction.payload.message);
  //       } else {
  //         // showToast('error', `Update failed: ${resultAction.error}`)
  //         console.log('inside login 2', resultAction.error);
  //       }
  //       setLoading(false);
  //     }
  //     // }
  //   } catch (err) {
  //     console.log(err);
  //   }
  // };

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
          <View style={{marginTop: 20}}>
            <HomeHeader
              setting
              left
              text={'Edit Profile'}
              fontSize={24}
              onPress={() => {
                props.navigation.goBack();
              }}
            />
          </View>
          <View style={styles.profileView}>
            <ImageBackground
              source={{uri: userInfo.imageUrl}}
              // source={Images.Backgrounds.myProfile}

              style={{width: 116, height: 119}}>
              <TouchableOpacity
                onPress={openCamera}
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
                value={userInfo.firstName}
                onChangeText={value =>
                  setUserInfo({...userInfo, firstName: value})
                }
              />
            </View>
            <View
              style={{
                borderBottomColor: 'black',
                marginTop: 35,
                borderBottomWidth: 1,
              }}>
              <FormInput
                placeHolder="SMITH"
                placeHolderColor={'black'}
                iconColor={'black'}
                iconLName="user"
                iconLType="AntDesign"
                iconR
                iconRName="edit"
                iconRType="AntDesign"
                iconL
                value={userInfo.lastName}
                onChangeText={value =>
                  setUserInfo({...userInfo, lastName: value})
                }
              />
            </View>

            <View
              style={{
                borderBottomColor: 'black',
                marginTop: 35,
                borderBottomWidth: 1,
              }}>
              <FormInput
                placeHolder="User Name"
                placeHolderColor={'black'}
                iconColor={'black'}
                iconLName="user"
                iconLType="AntDesign"
                iconR
                iconRName="edit"
                iconRType="AntDesign"
                iconL
                value={userInfo.userName}
                onChangeText={value =>
                  setUserInfo({...userInfo, userName: value})
                }
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
                value={userInfo.email}
                onChangeText={value => setUserInfo({...userInfo, email: value})}
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
                value={userInfo.phoneNo}
                onChangeText={value =>
                  setUserInfo({...userInfo, phoneNo: value})
                }
              />
            </View>

            <View
              style={{
                borderBottomColor: 'black',
                marginTop: 35,
                borderBottomWidth: 1,
              }}>
              <FormInput
                // value={userInfo.password}
                // onChangeText={value =>
                //   setUserInfo({...userInfo, password: value})
                // }
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
                <Text
                  style={{color: '#000000', fontSize: 12}}
                  // value={userInfo.description}
                  // onChangeText={value => {
                  // setUserInfo({...userInfo, description: value});
                  // }}
                >
                  {/* Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                  diam nonumy eirmod tempor invidunt ut labore et dolore magna
                  aliquyam erat, sed diam voluptua */}
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
                <CheckBoxComponent
                  checked={checked1}
                  onPress={() => setChecked1(!checked1)}
                />
                {/* <View style={{}}>
                  <CheckBox
                    onPress={() => setState({checked1: !state.checked1})}
                    checked={state.checked1}
                    left
                    checkedColor={'#F52A6A'}
                  />
                </View> */}
              </View>

              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  marginTop: 15,
                }}>
                <View>
                  <Text
                    style={{fontSize: 12, color: '#323232', fontWeight: '500'}}>
                    Hide Phone Number
                  </Text>
                </View>
                <CheckBoxComponent
                  checked={checked2}
                  onPress={() => setChecked2(!checked2)}
                />
              </View>
              <View style={styles.activeLine}></View>
            </View>
            <View style={{paddingVertical: 20, width: '100%'}}>
              <LinearGradient
                colors={['#F52667', '#F54F84']}
                style={styles.loginBtn}>
                <AppButton
                  loader={loading}
                  buttonStyle={styles.loginBtn}
                  label="Update"
                  // onPress={() => {
                  //   props.navigation.navigate('myProfile');
                  // }}
                  onPress={editProfileHandler}
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
