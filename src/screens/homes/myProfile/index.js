import React, {useEffect, useState} from 'react';
import {
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
  ImageBackground,
  TextInput,
  BackHandler,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import LinearGradient from 'react-native-linear-gradient';
import {useSelector, useDispatch} from 'react-redux';

import {HomeHeader, TextWithLine, CustomPopup} from '../../../components';
import {Themes, Images} from './../../../constants';
import {Icon} from 'native-base';

const MyProfile = props => {
  console.log('what is my props.routes', props.route);
  const isCheck = props?.route?.params?.check || null;
  const {navigation} = props;
  const {userData} = useSelector(state => state.auth);
  const [userInfo, setUserInfo] = useState({
    profileImage: '',
    firstName: '',
    lastName: '',
    userName: '',
  });
  const [visible, setVisible] = useState(false);
  const statusImage = [
    {
      icon1: Images.Backgrounds.status1,
      icon2: Images.Backgrounds.status2,
      icon3: Images.Backgrounds.status3,
    },
    {
      icon1: Images.Backgrounds.status4,
      icon2: Images.Backgrounds.status5,
      icon3: Images.Backgrounds.status6,
    },

    {
      icon1: Images.Backgrounds.status7,
      icon2: Images.Backgrounds.status8,
      icon3: Images.Backgrounds.status9,
    },
    {
      icon1: Images.Backgrounds.status1,
      icon2: Images.Backgrounds.status2,
      icon3: Images.Backgrounds.status3,
    },
    {
      icon1: Images.Backgrounds.status4,
      icon2: Images.Backgrounds.status5,
      icon3: Images.Backgrounds.status6,
    },
  ];
  const statusData = [
    {
      imageUri: Images.Backgrounds.Ellipse1,
      Text: 'You',
      plusIcon: Images.Pictures.plusIcon,
      props: 'addStatus',
    },
    {
      imageUri: Images.Backgrounds.Ellipse2,
      Text: 'Yu Chin',
      props: 'status',
    },
    {
      imageUri: Images.Backgrounds.Ellipse3,
      Text: 'Maria',
      props: 'status',
    },
    {
      imageUri: Images.Backgrounds.Ellipse4,
      Text: 'Alexa',
      props: 'status',
    },
    {
      imageUri: Images.Backgrounds.Ellipse4,
      Text: 'Alexa',
      props: 'status',
    },
    {
      imageUri: Images.Backgrounds.Ellipse2,
      Text: 'Yu Chin',
      props: 'status',
    },
    {
      imageUri: Images.Backgrounds.Ellipse4,
      Text: 'Alexa',
      props: 'status',
    },
    {
      imageUri: Images.Backgrounds.Ellipse3,
      Text: 'Maria',
      props: 'status',
    },
  ];

  useEffect(() => {
    const backScreen = props?.route?.params?.backScreen;
    setUserInfo({
      profileImage: userData.data.image,
      firstName: userData.data.firstName,
      lastName: userData.data.lastName,
      userName: userData.data.userName,
    });
    const backAction = () => {
      props.navigation.navigate('MyTabs', {screen: backScreen});
      // } else {
      props.navigation.goBack();
      // }

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
      <SafeAreaView style={{flex: 1, backgroundColor: 'white'}}>
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
                text={isCheck ? 'Profile' : 'My Profile'}
                fontSize={24}
                onPress={() => {
                  props.navigation.navigate('MyTabs', {screen: 'home'});
                }}
              />
            </View>
            <View style={styles.mainContainer}>
              <View
                style={{
                  width: '100%',
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                }}>
                <View style={styles.profileView}>
                  <ImageBackground
                    source={{uri: userInfo.profileImage}}
                    // source={Images.Backgrounds.myProfile}
                    style={{width: 116, height: 119}}>
                    {isCheck ? null : (
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
                    )}
                  </ImageBackground>
                  <View style={{alignItems: 'center'}}>
                    <Text
                      style={{
                        fontSize: 15,
                        color: '#211E1F',
                        textAlign: 'center',
                      }}>
                      {`${userInfo.firstName} ${userInfo.lastName}`}
                    </Text>
                    <Text
                      style={{
                        fontSize: 12,
                        color: '#211E1F',
                        textAlign: 'center',
                      }}>
                      {`@${userInfo.userName}`}
                    </Text>
                  </View>
                </View>

                <View
                  style={{
                    height: 170,
                    flex: 1,
                    paddingLeft: 30,

                    justifyContent: 'flex-start',
                    marginTop: -10,
                    alignItems: 'center',
                  }}>
                  <View
                    style={{
                      width: '100%',
                      height: 100,
                      alignItems: 'center',
                      flexDirection: 'row',
                      justifyContent: 'space-evenly',
                    }}>
                    <View style={{alignItems: 'center'}}>
                      <Text style={{fontSize: 15, color: '#211E1F'}}>50</Text>
                      <Text
                        style={{
                          fontSize: 15,
                          color: '#211E1F',
                          fontWeight: 'bold',
                        }}>
                        Post
                      </Text>
                    </View>
                    <View style={{alignItems: 'center'}}>
                      <Text style={{fontSize: 15, color: '#211E1F'}}>64</Text>
                      <Text
                        style={{
                          fontSize: 15,
                          color: '#211E1F',
                          fontWeight: 'bold',
                        }}>
                        Friends
                      </Text>
                    </View>
                  </View>
                  <TouchableOpacity
                    style={{width: '100%'}}
                    activeOpacity={0.8}
                    onPress={
                      isCheck
                        ? null
                        : () => {
                            props.navigation.navigate('Statics', {
                              screen: 'editProfile',
                            });
                          }
                    }>
                    <LinearGradient
                      colors={['#F54F84', '#F52667']}
                      style={{
                        width: '100%',
                        height: 46,
                        borderRadius: 10,
                        alignItems: 'center',
                        justifyContent: 'center',
                      }}>
                      <Text style={{fontSize: 16, color: '#FFFFFF'}}>
                        {isCheck ? 'Sent Friend Request' : 'Edit Profile'}
                      </Text>
                    </LinearGradient>
                  </TouchableOpacity>
                </View>
              </View>

              <TextWithLine fontSize={15} left={0} text={'Recent Status'} />
              <View style={styles.header}>
                <ScrollView
                  showsHorizontalScrollIndicator={false}
                  horizontal={true}
                  contentContainerStyle={{flexGrow: 1}}>
                  {statusData.map((item, i) => {
                    return (
                      <View
                        style={{
                          alignItems: 'center',
                          justifyContent: 'center',
                        }}>
                        <TouchableOpacity
                          style={styles.statusBox}
                          activeOpacity={0.8}
                          onPress={
                            isCheck
                              ? () => {
                                  props.navigation.navigate('status');
                                }
                              : () => {
                                  props.navigation.navigate(item.props);
                                }
                          }>
                          <ImageBackground
                            source={item.imageUri}
                            style={{width: 65, height: 65}}>
                            {isCheck ? null : item.Text === 'You' ? (
                              <TouchableOpacity
                                style={styles.plusBtn}
                                activeOpacity={0.8}>
                                <Image
                                  source={item.plusIcon}
                                  style={{width: '100%', height: '100%'}}
                                />
                              </TouchableOpacity>
                            ) : null}
                          </ImageBackground>
                        </TouchableOpacity>
                        {i === 0 && (
                          <View>
                            {isCheck ? null : <Text>{item.Text}</Text>}
                          </View>
                        )}
                      </View>
                    );
                  })}
                </ScrollView>
              </View>
              {isCheck ? (
                <Text
                  style={{top: -7, left: 7, color: '#262223', fontSize: 15}}>
                  Recent Story
                </Text>
              ) : null}
              <TextWithLine left={0} text={'Description'} fontSize={15} />
              <View
                style={{
                  width: '90%',
                  // height: 50,
                  minHeight: 50,
                  marginTop: 10,
                  alignSelf: 'center',
                }}>
                <Text style={{color: 'black', fontSize: 12}}>
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                  diam nonumy eirmod tempor invidunt ut labore et dolore magna
                  aliquyam erat, sed diam voluptua
                </Text>
              </View>
              <TextWithLine left={0} text={'Contact Details'} fontSize={15} />
              <View style={{width: '100%', marginTop: 10}}>
                <View
                  style={{
                    flexDirection: 'row',
                    height: 20,

                    alignItems: 'center',
                  }}>
                  <Icon name="mail" type="AntDesign" style={{fontSize: 18}} />
                  <Text style={{fontSize: 12, color: 'black', paddingLeft: 5}}>
                    info@abc.com
                  </Text>
                </View>
                <View
                  style={{
                    flexDirection: 'row',
                    height: 20,
                    marginTop: 5,
                    alignItems: 'center',
                  }}>
                  <Icon name="phone" type="Feather" style={{fontSize: 18}} />
                  <Text style={{fontSize: 12, color: 'black', paddingLeft: 5}}>
                    +12304568429
                  </Text>
                </View>
              </View>
              <TextWithLine left={0} text={'Post'} fontSize={15} />
              {isCheck ? null : (
                <TouchableOpacity
                  style={{
                    width: 40,
                    height: 37,
                    borderRadius: 5,
                    alignItems: 'center',
                    justifyContent: 'center',
                    alignSelf: 'flex-end',
                    marginTop: 5,
                    borderColor: '#F54F84',
                    borderWidth: 2,
                  }}
                  onPress={() => {
                    setVisible(true);
                  }}
                  activeOpacity={0.8}>
                  <Icon
                    name="plus"
                    type="AntDesign"
                    style={{color: '#F54F84', fontWeight: 'bold', fontSize: 35}}
                  />
                </TouchableOpacity>
              )}

              <View
                style={{
                  width: '100%',
                  height: '100%',
                  marginTop: 20,
                }}>
                {statusImage.map((item, i) => {
                  return (
                    <View style={{width: '100%', marginBottom: 10}}>
                      <View
                        style={{
                          flexDirection: 'row',
                          justifyContent: 'space-between',
                        }}>
                        <View style={{width: '30%', height: 113}}>
                          <ImageBackground
                            source={item.icon1}
                            style={{
                              width: '100%',
                              height: '100%',
                              alignItems: 'center',
                              justifyContent: 'center',
                            }}></ImageBackground>
                        </View>

                        <View style={{width: '30%', height: 113}}>
                          <ImageBackground
                            source={item.icon2}
                            style={{
                              width: '100%',
                              height: '100%',
                              alignItems: 'center',
                              justifyContent: 'center',
                            }}></ImageBackground>
                        </View>
                        <View style={{width: '30%', height: 113}}>
                          <ImageBackground
                            source={item.icon3}
                            style={{
                              width: '100%',
                              height: '100%',
                              alignItems: 'center',
                              justifyContent: 'center',
                            }}></ImageBackground>
                        </View>
                      </View>
                    </View>
                  );
                })}
              </View>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>

      <CustomPopup
        stateOverlay={visible}
        setstateOverlay={() => setVisible(false)}
        modelHeight={341}
        tabPopup
        border_radius={15}
        OBonPress={() => {
          setVisible(false);
        }}
      />
    </>
  );
};

export default MyProfile;

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
  },
  iconCamera: {
    width: 51,
    height: 53,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  profileView: {
    justifyContent: 'center',
    height: 170,
  },
  activeRoom: {
    width: '100%',
    flexDirection: 'row',
    marginTop: 10,
    alignSelf: 'center',
    alignItems: 'center',
  },
  activeRoomText: {
    fontSize: 14,
    color: '#211E1F',
    fontWeight: '500',
    alignItems: 'center',
    width: '30%',
  },
  activeLine: {
    width: '70%',
    borderBottomWidth: 1.5,
    borderColor: '#707070',
    alignItems: 'center',
    justifyContent: 'center',
  },

  DescriptionRoom: {
    width: '100%',
    flexDirection: 'row',
    marginTop: 10,
    alignSelf: 'center',
    alignItems: 'center',
  },
  DescriptionRoomText: {
    fontSize: 15,
    color: '#211E1F',
    fontWeight: '500',
    alignItems: 'center',
    width: '30%',
  },
  DescriptionLine: {
    width: '70%',
    borderBottomWidth: 1.5,
    borderColor: '#707070',
    alignItems: 'center',
    justifyContent: 'center',
  },

  ContactRoom: {
    width: '100%',
    flexDirection: 'row',
    marginTop: 10,
    alignSelf: 'center',
    alignItems: 'center',
  },
  ContactRoomText: {
    fontSize: 15,
    color: '#211E1F',
    fontWeight: '500',
    alignItems: 'center',
    width: '30%',
  },
  ContactLine: {
    width: '70%',
    borderBottomWidth: 1.5,
    borderColor: '#707070',
    alignItems: 'center',
    justifyContent: 'center',
  },

  postRoom: {
    width: '100%',
    flexDirection: 'row',
    marginTop: 10,
    alignSelf: 'center',
    alignItems: 'center',
  },
  postRoomText: {
    fontSize: 15,
    color: '#211E1F',
    fontWeight: '500',
    alignItems: 'center',
    width: '30%',
  },
  postLine: {
    width: '70%',
    borderBottomWidth: 1.5,
    borderColor: '#707070',
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    width: '100%',
    height: 100,
    marginTop: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  statusBox: {
    marginLeft: 5,
    width: 80,
    height: 80,
    borderRadius: 50,
    backgroundColor: 'white',
    borderWidth: 3,
    borderColor: '#F54F84',
    alignItems: 'center',
    justifyContent: 'center',
  },
  plusBtn: {
    width: 24,
    height: 24,
    borderRadius: 24,
    borderWidth: 3,
    borderColor: '#F54F84',
    position: 'absolute',
    bottom: -3,
    right: -8,
    backgroundColor: 'white',
  },
});
