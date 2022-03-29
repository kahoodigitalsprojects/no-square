import {Icon} from 'native-base';
import React, {useState} from 'react';
import {
  StatusBar,
  ScrollView,
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Image,
  ImageBackground,
  Dimensions,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {FormInput, AppButton, Header} from '../../components';
import {Images} from '../../constants';

const CustomDrawer = ({navigation}) => {
  const dashboardData = [
    {
      image: Images.Pictures.user,
      stack: 'Statics',
      text: 'Connections',
      rightText: '500',
      nav: 'connections',
    },
    {
      image: Images.Pictures.setting,
      text: 'Settings',
      rightText: '',
      nav: 'settings',
      stack: 'Statics',
    },

    {
      image: Images.Pictures.fitness,
      text: 'Finesse Game',
      rightText: '',
      stack: 'MyTabs',
      nav: 'fitnessGame',
    },
    {
      stack: 'MyTabs',
      image: Images.Pictures.user,
      text: 'Chat Rooms',
      rightText: '',
      nav: 'chatRoom',
    },
    {
      image: Images.Pictures.lesbian,
      text: 'All Messages',
      rightText: '',
      nav: 'messeges',
      stack: 'MyTabs',
    },
    {
      image: Images.Pictures.lesbian,
      text: 'Saved',
      rightText: '9',
      nav: 'savedPost',
      stack: 'Statics',
    },
    {
      image: Images.Pictures.lesbian,
      text: 'Contact Us',
      rightText: '',
      nav: 'contactUs',
      stack: 'Statics',
    },
  ];
  const recentChatDate = [
    {image: Images.Backgrounds.profileImg, text: 'Ashley Snchayaz'},
    {image: Images.Backgrounds.profileImg, text: 'Ashley Snchayaz'},
    {image: Images.Backgrounds.profileImg, text: 'Ashley Snchayaz'},
    {image: Images.Backgrounds.profileImg, text: 'Ashley Snchayaz'},
  ];

  return (
    <View style={styles.container}>
      <LinearGradient colors={['#FB437E', '#C70340']} style={styles.linear}>
        <View style={{marginTop: 50}}>
          <Header
            width={49.34}
            heightImage={50}
            text
            fontSize={20}
            fontColor={'white'}
          />
        </View>
        <ScrollView
          keyboardShouldPersistTaps="handled"
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{flexGrow: 1}}>
          <View style={{marginTop: 20, paddingBottom: 20}}>
            <View
              style={{
                width: 161,
                borderBottomWidth: 2,
                borderBottomColor: 'white',
              }}>
              <Text style={{fontSize: 15, color: 'white', marginLeft: 5}}>
                My Profile
              </Text>
            </View>

            <TouchableOpacity
              style={styles.profileBox}
              activeOpacity={0.9}
              onPress={() => {
                navigation.navigate('Statics', {
                  screen: 'myProfile',
                  params: {backScreen: 'home'},
                });
              }}>
              <View style={styles.profileBoxBody}>
                <Image
                  style={{width: 63, height: 71, borderRadius: 10}}
                  source={Images.Backgrounds.profileDrawer}
                />
                <View style={{justifyContent: 'center', paddingLeft: 2}}>
                  <Text style={{fontSize: 15, color: 'white'}}>
                    Laura Ellish
                  </Text>
                  <Text style={{fontSize: 13, color: 'white'}}>
                    San Jose, CA
                  </Text>
                  <Text style={{fontSize: 13, color: '#FFEE00'}}>
                    Premium
                    <Icon
                      name="star"
                      type="AntDesign"
                      style={{fontSize: 11, color: '#FFEE00'}}
                    />
                  </Text>
                </View>
              </View>
            </TouchableOpacity>

            <View
              style={{
                width: 161,
                borderBottomWidth: 2,
                borderBottomColor: 'white',
                marginTop: 10,
              }}>
              <Text style={{fontSize: 15, color: 'white', marginLeft: 5}}>
                Dashboard
              </Text>
            </View>

            <View style={styles.dashboardBox} activeOpacity={0.9}>
              <View
                style={{
                  width: '90%',
                  height: '90%',
                  justifyContent: 'space-between',
                }}>
                {dashboardData.map((item, i) => {
                  return (
                    <>
                      <TouchableOpacity
                        key={i}
                        style={styles.dashboardBoxBtn}
                        activeOpacity={0.8}
                        onPress={() => {
                          navigation.navigate(item.stack, {
                            screen: item.nav,
                            params: {backScreen: 'Home'},
                          });
                        }}>
                        <View
                          style={{
                            width: '70%',
                            flexDirection: 'row',
                            alignItems: 'center',
                            justifyContent: 'flex-start',
                          }}>
                          <View style={{width: 22, height: 17}}>
                            <Image
                              style={{width: '100%', height: '100%'}}
                              source={item.image}
                              resizeMode="contain"
                              tintColor={'white'}
                            />
                          </View>
                          <View style={{paddingLeft: 15}}>
                            <Text
                              style={{
                                fontSize: 15,
                                color: 'white',
                                textAlign: 'left',
                              }}>
                              {item.text}
                            </Text>
                          </View>
                        </View>

                        <View
                          style={{
                            width: '30%',
                            flexDirection: 'row',
                            alignItems: 'center',
                            justifyContent: 'flex-end',
                          }}>
                          <View
                            style={{
                              width: 39,
                              height: 20,
                              borderRadius: 30,
                              opacity: 0.7,
                              flexDirection: 'row',
                              justifyContent: 'center',
                              backgroundColor:
                                item.rightText === '' ? '#FB437E' : '#FFFFFF',
                              alignItems: 'center',
                            }}>
                            {item.rightText.length > 0 ? (
                              <Text style={{color: 'black', fontSize: 10}}>
                                {item.rightText}
                              </Text>
                            ) : null}
                          </View>
                        </View>
                      </TouchableOpacity>
                      {i === dashboardData.length - 1 ? null : (
                        <View
                          style={{
                            width: '60%',
                            alignSelf: 'center',
                            borderBottomWidth: 2,
                            borderBottomColor: 'white',
                          }}></View>
                      )}
                    </>
                  );
                })}
              </View>
            </View>

            <View
              style={{
                width: 161,
                borderBottomWidth: 2,
                borderBottomColor: 'white',
                flexDirection: 'row',
                marginTop: 20,
                alignItems: 'center',
                justifyContent: 'space-between',
              }}>
              <Text style={{fontSize: 15, color: 'white', marginLeft: 5}}>
                Recent Message
              </Text>

              <Icon
                name="down"
                type="AntDesign"
                style={{fontSize: 14, color: 'white'}}
              />
            </View>

            <View
              style={{
                width: '80%',
                height: 218,
                borderRadius: 10,
                alignSelf: 'center',
                backgroundColor: '#FB437E',
                elevation: 5,
                marginTop: 10,
                alignItems: 'center',
                justifyContent: 'center',
              }}
              activeOpacity={0.9}>
              <View
                style={{
                  width: '90%',
                  height: '90%',
                  justifyContent: 'space-between',
                }}>
                {recentChatDate.map((item, i) => {
                  return (
                    <View
                      key={i}
                      style={{
                        width: '100%',
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        height: '20%',
                      }}>
                      <View
                        style={{
                          width: 35,
                          height: 35,
                          alignItems: 'center',
                        }}>
                        <ImageBackground
                          source={item.image}
                          style={{
                            width: '100%',
                            height: '100%',
                          }}></ImageBackground>
                        <View
                          style={{
                            width: 8,
                            height: 8,
                            borderRadius: 8,
                            backgroundColor: '#24A206',
                            position: 'absolute',
                            right: 0,
                            bottom: 5,
                          }}></View>
                      </View>
                      <View
                        style={{
                          width: '72%',
                          height: 19,
                        }}>
                        <Text
                          style={{
                            fontSize: 13,
                            color: 'white',
                            fontWeight: '700',
                          }}>
                          {item.text}
                        </Text>
                      </View>
                    </View>
                  );
                })}
              </View>
            </View>
          </View>
        </ScrollView>
        <TouchableOpacity
          style={{
            width: '100%',
            flexDirection: 'row',
            marginLeft: 5,
            height: 50,
            alignItems: 'center',
          }}
          activeOpacity={0.8}>
          <Icon
            name="logout"
            type="SimpleLineIcons"
            style={{fontSize: 24, color: 'white'}}
          />
          <Text style={{fontSize: 13, color: 'white', paddingLeft: 5}}>
            Log Out
          </Text>
        </TouchableOpacity>
      </LinearGradient>
    </View>
  );
};

export {CustomDrawer};

const styles = StyleSheet.create({
  container: {
    borderTopRightRadius: 80,
    borderBottomRightRadius: 50,
    width: '100%',
    height: '100%',
    overflow: 'hidden',
  },
  linear: {
    width: '100%',
    height: '100%',
    borderTopRightRadius: 80,
    borderBottomRightRadius: 50,
    overflow: 'hidden',
  },
  profileBox: {
    width: '80%',
    height: 82,
    borderRadius: 5,
    alignSelf: 'center',
    backgroundColor: '#FB437E',
    elevation: 5,
    marginTop: 20,
    justifyContent: 'center',
    alignItems: 'center',
    // flexDirection: 'row',
  },
  profileBoxBody: {
    width: '90%',
    height: '90%',
    flexDirection: 'row',
    alignItems: 'center',
  },
  dashboardBox: {
    width: '80%',
    height: 287,
    borderRadius: 15,
    alignSelf: 'center',
    backgroundColor: '#FB437E',
    elevation: 5,
    marginTop: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  dashboardBoxBtn: {
    width: '100%',
    height: 30,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});
