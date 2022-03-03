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
  TextInput,
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

const InnerPost = props => {
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
            right
            settingIconProps={() => props.navigation.navigate('home')}
            text={'Post'}
            fontSize={35}
            margin={-20}
            settingIconProps={() => props.navigation.navigate('home')}
          />
          <View style={styles.mainContainer}>
            <TouchableOpacity
              style={styles.PostVIew}
              activeOpacity={1}
              onPress={() => {}}>
              <View style={styles.postHeaderContentLeft}>
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                  <TouchableOpacity
                    style={styles.postHeaderImg}
                    activeOpacity={0.8}>
                    <ImageBackground
                      source={Images.Backgrounds.postProfile}
                      style={{
                        height: '100%',
                        height: '100%',
                      }}></ImageBackground>
                  </TouchableOpacity>
                  <View>
                    <Text style={styles.postHeaderContentRight}>
                      Daniela Fernández Ramos
                    </Text>
                    <Text
                      style={{
                        fontSize: 9,
                        color: '#BABDC9',
                        paddingLeft: 10,
                      }}>
                      <Image
                        source={Images.Backgrounds.globe}
                        style={{width: 8.1, height: 8.1}}
                      />
                      {'  '}3 hours ago
                    </Text>
                  </View>
                </View>

                <View style={styles.dotLine}>
                  <Image
                    style={{width: 12.68, height: 3.6}}
                    source={Images.Backgrounds.dotLine}
                  />
                </View>
              </View>
              <View style={{width: '100%', marginTop: 20}}>
                <Text style={{fontSize: 13, color: '#444D6E'}}>
                  Lorem ipsum dolor sit amet, consetetur sadipscing 🥺 sit amet,
                  consetetur sadipscing sit amet, consetetur sadipscing sit
                  amet, consetetur sadipscing sit amet, consetetur sadipscing 🥺
                </Text>
              </View>
            </TouchableOpacity>
          </View>
          <View style={{width: '100%', height: 217.39, marginTop: 20}}>
            <ImageBackground
              source={Images.Backgrounds.postImage}
              style={{
                width: '100%',
                height: '100%',
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <TouchableOpacity
                style={{
                  width: 80,
                  height: 80,
                  borderRadius: 100,
                  alignItems: 'center',
                  justifyContent: 'center',
                  borderWidth: 2,
                  borderColor: 'white',
                }}
                activeOpacity={0.9}>
                <Image
                  source={Images.Backgrounds.play}
                  style={{width: 24, height: 24}}
                />
              </TouchableOpacity>
            </ImageBackground>
            <View
              style={{
                width: '100%',
                alignItems: 'center',
                justifyContent: 'center',
                height: 50,
              }}>
              <Text
                style={{
                  fontSize: 10,
                  color: '#747EA0',
                  marginTop: 5,
                  position: 'absolute',
                  right: 10,
                }}>
                30 comments · 5 shares
              </Text>

              <View
                style={{
                  flexDirection: 'row',
                  position: 'absolute',
                  left: 10,
                }}>
                <Text
                  style={{
                    marginTop: 2,
                    color: '#747EA0',
                    fontSize: 9,
                  }}>
                  1.2k
                </Text>
                <TouchableOpacity style={styles.rightIconBtn}>
                  <Icon
                    name="like"
                    type="Fontisto"
                    style={{
                      fontSize: 8,
                      alignSelf: 'center',
                      color: 'white',
                    }}
                  />
                </TouchableOpacity>
                <TouchableOpacity style={styles.rightIconBtn2}>
                  <Icon
                    name="heart"
                    type="AntDesign"
                    style={{
                      fontSize: 8,
                      alignSelf: 'center',
                      color: 'white',
                    }}
                  />
                </TouchableOpacity>
              </View>
            </View>

            <View
              style={{
                width: '100%',
                height: 63,
                backgroundColor: '#B9B3B333',
                alignItems: 'center',
                justifyContent: 'space-evenly',
                flexDirection: 'row',
              }}>
              <TouchableOpacity
                style={{
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: 30,
                  height: 30,
                  borderRadius: 50,
                  backgroundColor: '#F54F8444',
                }}>
                <Icon
                  name="like"
                  type="Fontisto"
                  style={{
                    fontSize: 14,
                    alignSelf: 'center',
                    color: '#F54F84',
                  }}
                />
              </TouchableOpacity>

              <TouchableOpacity
                style={{
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: 30,
                  height: 30,
                  borderRadius: 50,
                  backgroundColor: '#F54F8444',
                }}>
                <Icon
                  name="message-circle"
                  type="Feather"
                  style={{
                    fontSize: 14,
                    alignSelf: 'center',
                    color: '#F54F84',
                  }}
                />
              </TouchableOpacity>

              <TouchableOpacity
                style={{
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: 30,
                  height: 30,
                  borderRadius: 50,
                  backgroundColor: '#F54F8444',
                }}>
                <Icon
                  name="share"
                  type="FontAwesome"
                  style={{
                    fontSize: 14,
                    alignSelf: 'center',
                    color: '#F54F84',
                  }}
                />
              </TouchableOpacity>
            </View>
            <View style={{width: '90%', alignSelf: 'center', marginTop: 20}}>
              <UserComment nested />
              <UserComment />
            </View>
          </View>
          <View
            style={{
              width: '100%',
              height: 46,
              backgroundColor: '#B9B3B333',
              borderRadius: 30,
              position: 'absolute',
              bottom: 10,
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <View
              style={{
                width: '10%',
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Image
                source={Images.Pictures.smile2}
                style={{width: 25.33, height: 25.33}}
              />
            </View>

            <TextInput
              placeholder="Type Here....."
              style={{
                width: '70%',
                height: 45,
              }}></TextInput>
            <View
              style={{
                width: '15%',
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-evenly',
              }}>
              <Image
                source={Images.Pictures.iconImage}
                style={{width: 21, height: 21}}
              />

              <Icon
                name="send"
                type="FontAwesome"
                style={{fontSize: 21, color: '#F54F84'}}
              />
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default InnerPost;

const styles = StyleSheet.create({
  container: {
    width: '95%',
    alignSelf: 'center',
    height: '100%',
    paddingBottom: 440,
  },
  mainContainer: {
    width: '90%',
    alignSelf: 'center',
    marginTop: 10,
  },
  PostVIew: {
    width: '100%',
    marginTop: 15,
  },
  postHeader: {width: '90%', height: '100%', alignSelf: 'center'},
  postHeaderContentLeft: {
    width: '100%',
    flexDirection: 'row',
    marginTop: 10,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  postHeaderImg: {
    width: 29.89,
    height: 29.89,
    borderWidth: 2,
    borderColor: '#F54F84',
    borderRadius: 29,
  },
  postHeaderContentRight: {
    fontSize: 13,
    paddingLeft: 10,
    fontWeight: 'bold',
    color: '#19295C',
  },
  dotLine: {
    width: 28.64,
    height: 22.64,
    alignItem: 'center',
    justifyContent: 'center',
  },
  rightIconBtn: {
    width: 19.93,
    height: 19.93,
    alignItem: 'center',
    justifyContent: 'center',
    backgroundColor: '#1977F3',
    borderRadius: 15,
  },
  rightIconBtn2: {
    width: 19.93,
    height: 19.93,
    alignItem: 'center',
    justifyContent: 'center',
    backgroundColor: '#F31954',
    borderRadius: 15,
  },
});
