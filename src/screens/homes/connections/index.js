import React, {useState} from 'react';
// import Swipeable from 'react-native-swipeable';
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

import {HomeHeader, SearchBar} from '../../../components';
import {Images} from './../../../constants';
import {Icon} from 'native-base';

import Animated from 'react-native-reanimated';

import Swipeable from 'react-native-gesture-handler/Swipeable';

const Connections = props => {
  console.log(Animated);
  const [state, setState] = useState({
    active: true,
    listViewData: [{}],
  });
  const ChatData = [
    {
      image: Images.Backgrounds.chatProfile2,
      text: 'Alicia Sierra',
      title: '27 Mutual Friends',
      active: false,
    },
    {
      image: Images.Backgrounds.chatProfile1,
      text: 'Alison Parker',
      title: '27 Mutual Friends',
      active: false,
    },
    {
      image: Images.Backgrounds.chatProfile2,
      text: 'Alicia Sierra',
      title: '27 Mutual Friends',
      active: false,
    },
    {
      image: Images.Backgrounds.chatProfile4,
      text: 'Marcia Dor',
      title: '27 Mutual Friends',
      active: true,
    },

    {
      image: Images.Backgrounds.chatProfile3,
      text: 'Helan',
      title: '27 Mutual Friends',
      active: true,
    },
    {
      image: Images.Backgrounds.chatProfile2,
      text: 'Alicia Sierra',
      title: '27 Mutual Friends',
      active: false,
    },
    {
      image: Images.Backgrounds.chatProfile1,
      text: 'Lucy Grey',
      title: '27 Mutual Friends',
      active: true,
    },
    {
      image: Images.Backgrounds.chatProfile3,
      text: 'Anna May',
      title: '27 Mutual Friends',
      active: false,
    },
    {
      image: Images.Backgrounds.chatProfile4,
      text: 'Helan',
      title: '27 Mutual Friends',
      active: true,
    },
  ];

  const rightButtons = [
    <View style={styles.rightContentHiddin}>
      <TouchableOpacity activeOpacity={0.9}>
        <View>
          <View style={styles.rightContentHiddinData}>
            <Image
              source={Images.Backgrounds.block}
              style={{width: 15, height: 15}}
            />
          </View>
          <Text style={{fontSize: 9, color: 'black'}}>Block</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity activeOpacity={0.9} style={{marginLeft: 10}}>
        <View>
          <View
            style={{
              width: 28,
              height: 27,
              borderRadius: 5,
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: '#F779A1',
            }}
            opacity={0.3}>
            <Image
              source={Images.Pictures.iconCross}
              style={{width: 15, height: 15}}
            />
          </View>
          <Text style={{fontSize: 9, color: 'black'}}>unfriend</Text>
        </View>
      </TouchableOpacity>
    </View>,
  ];

  const rightSwipe = (progress, dragX) => {
    console.log({dragX});
    return (
      <View
        style={{
          width: 100,
          height: '100%',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Animated.View
          style={{
            width: '100%',
            height: '100%',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
            // transform: [
            //   {
            //     translateX: dragX.interpolate({
            //       inputRange: [0, 0, 100],
            //       outputRange: [0, 0, 100],
            //     }),
            //   },
            // ],
          }}>
          <TouchableOpacity activeOpacity={0.9}>
            <View>
              <View style={styles.rightContentHiddinData}>
                <Image
                  source={Images.Backgrounds.block}
                  style={{width: 15, height: 15}}
                />
              </View>
              <Text style={{fontSize: 9, color: 'black'}}>Block</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity activeOpacity={0.9} style={{marginLeft: 10}}>
            <View>
              <View
                style={{
                  width: 28,
                  height: 27,
                  borderRadius: 5,
                  alignItems: 'center',
                  justifyContent: 'center',
                  backgroundColor: '#F779A1',
                }}
                opacity={0.3}>
                <Image
                  source={Images.Pictures.delete}
                  style={{width: 15, height: 15}}
                />
              </View>
              <Text style={{fontSize: 9, color: 'black'}}>Delete</Text>
            </View>
          </TouchableOpacity>
        </Animated.View>
      </View>
      // </View>

      // </View>
      // </View>
    );
  };

  return (
    <SafeAreaView style={styles.screenContainer}>
      <StatusBar backgroundColor={'white'} barStyle="dark-content" />
      <ScrollView
        keyboardShouldPersistTaps="handled"
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{flexGrow: 1}}>
        <>
          <HomeHeader home navigation={props.navigation} {...props} notify />
          <TouchableOpacity
            onPress={() => {
              props.navigation.navigate('Statics', {screen: 'searchPage'});
            }}>
            <SearchBar />
          </TouchableOpacity>
          <View style={styles.mainBody}>
            <View style={styles.chatText}>
              <Text style={styles.textStyle}>Friends</Text>
              <View style={styles.textBorderLine}></View>
              <View
                style={{
                  marginTop: 20,
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <TouchableOpacity
                  style={{
                    width: 69,
                    height: 25,
                    borderRadius: 15,
                    backgroundColor: state.active === true ? '#F54F84' : '#fff',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                  onPress={() => {
                    setState({...state, active: true});
                  }}>
                  <Text
                    style={{
                      fontSize: 12,
                      color: state.active ? '#fff' : '#6D6B6B',
                    }}>
                    Friends
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={{
                    width: 95,
                    height: 25,
                    borderRadius: 15,
                    backgroundColor:
                      state.active === false ? '#F54F84' : '#fff',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                  onPress={() => {
                    setState({...state, active: false});
                  }}>
                  <Text
                    style={{
                      fontSize: 12,
                      color: !state.active ? '#fff' : '#6D6B6B',
                    }}>
                    Friend Request
                  </Text>
                </TouchableOpacity>
              </View>
            </View>

            {state.active === true
              ? ChatData.map((item, i) => {
                  return (
                    <Swipeable
                      key={i}
                      renderRightActions={rightSwipe}
                      containerStyle={{
                        height: 60,
                        marginVertical: 10,
                        width: '100%',
                        alignSelf: 'center',
                      }}>
                      <TouchableOpacity
                        // onPress={() => {
                        //   props.navigation.navigate('Statics', {
                        //     screen: 'chat',
                        //   });
                        // }}
                        activeOpacity={0.7}
                        style={{
                          width: '90%',
                          alignSelf: 'center',
                          height: '100%',
                          flexDirection: 'row',
                          alignItems: 'center',
                          justifyContent: 'space-between',
                        }}>
                        <View style={styles.chatProfile}>
                          <Image
                            source={item.image}
                            style={{width: '100%', height: '100%'}}
                          />
                        </View>
                        <View style={{flex: 1, paddingLeft: 15}}>
                          <Text style={styles.profileName}>{item.text}</Text>
                          <Text style={styles.profileTitle}>{item.title}</Text>
                        </View>
                      </TouchableOpacity>
                    </Swipeable>
                  );
                })
              : ChatData.map((item, i) => {
                  return (
                    <TouchableOpacity
                      style={styles.chatBox}
                      // onPress={() => {
                      //   props.navigation.navigate('Statics', {
                      //     screen: 'chat',
                      //   });
                      // }}
                      activeOpacity={0.8}>
                      <View style={styles.chatProfile}>
                        <Image
                          source={item.image}
                          style={{width: '100%', height: '100%'}}
                        />
                      </View>

                      <View style={{flex: 1, paddingLeft: 5}}>
                        <Text style={styles.profileName}>{item.text}</Text>
                        <Text style={styles.profileTitle}>{item.title}</Text>
                      </View>

                      <View
                        style={{
                          alignItems: 'center',
                          justifyContent: 'space-between',
                          flexDirection: 'row',
                          width: 80,
                        }}>
                        <View style={styles.rightContentHiddin2}>
                          <TouchableOpacity activeOpacity={0.9}>
                            <View style={{marginRight: 20}}>
                              <View style={styles.rightContentHiddinData}>
                                <Icon
                                  name="adduser"
                                  type="AntDesign"
                                  style={{fontSize: 15, color: 'white'}}
                                />
                              </View>
                              <Text
                                style={{
                                  fontSize: 10,
                                  color: 'black',
                                  width: 35,
                                }}>
                                Accept
                              </Text>
                            </View>
                          </TouchableOpacity>

                          <TouchableOpacity
                            activeOpacity={0.9}
                            style={{marginLeft: 10}}>
                            <View>
                              <View
                                style={{
                                  width: 28,
                                  height: 27,
                                  borderRadius: 5,
                                  alignItems: 'center',
                                  justifyContent: 'center',
                                  backgroundColor: '#F779A1',
                                }}
                                opacity={0.8}>
                                <Icon
                                  name="block"
                                  type="Entypo"
                                  style={{fontSize: 15, color: 'white'}}
                                />
                              </View>
                              <Text style={{fontSize: 10, color: 'black'}}>
                                Reject
                              </Text>
                            </View>
                          </TouchableOpacity>
                        </View>
                      </View>
                    </TouchableOpacity>
                  );
                })}
          </View>
        </>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Connections;

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    backgroundColor: 'white',
  },
  mainBody: {
    width: '90%',

    height: '100%',
    alignSelf: 'center',
    paddingBottom: 30,
  },
  chatText: {
    marginTop: 10,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  textBorderLine: {
    marginTop: 10,
    width: '80%',
    borderWidth: 3,
    borderColor: '#707070',
    opacity: 0.4,
    borderRadius: 20,
  },
  textStyle: {fontSize: 20, color: '#191919B8', fontWeight: '800'},
  activeRoom: {
    width: '100%',
    flexDirection: 'row',
    marginTop: 20,

    alignItems: 'center',
  },
  activeRoomText: {
    fontSize: 15,
    color: '#211E1F',
    fontWeight: '500',
    width: '30%',
  },
  profileTitle: {
    marginLeft: 10,
    fontSize: 12,
    color: '#707070',
  },
  activeLine: {
    width: '65%',
    borderBottomWidth: 1.5,
    borderColor: '#707070',
    alignSelf: 'center',
  },
  chatBox: {
    width: '90%',
    alignSelf: 'center',
    height: 60,
    flexDirection: 'row',
    marginTop: 20,
    alignItems: 'center',
  },
  chatProfile: {width: 60, height: 60},
  profileName: {
    fontSize: 15,
    color: '#6D6B6B',
    marginLeft: 10,
    fontWeight: '600',
  },
  active: {
    width: 13,
    height: 13,
    borderRadius: 14,
    backgroundColor: '#24A206',
    position: 'absolute',
    top: 0,
    right: 0,
  },
  rightContentHiddin: {
    marginTop: 10,
    height: 60,
    width: '20%',
    marginLeft: 18,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  rightContentHiddin2: {
    marginTop: 10,
    height: 60,
    width: '40%',
    justifyContent: 'center',
    marginLeft: 20,
    marginRight: 20,
    alignItems: 'center',
    flexDirection: 'row',
  },
  rightContentHiddinData: {
    width: 28,
    height: 27,
    borderRadius: 5,
    backgroundColor: '#F779A1',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
