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
  BackHandler,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import LinearGradient from 'react-native-linear-gradient';

import {HomeHeader} from '../../../components';
import {Themes, Images} from './../../../constants';
import {Icon} from 'native-base';
import {State} from 'react-native-gesture-handler';

const Box = ({image, text, isActive, onPress}) => {
  //   const [active, setActive] = useState({
  //     index: 0,
  //   });
  return (
    <TouchableOpacity
      elevation={0.8}
      activeOpacity={0.9}
      onPress={() => {
        onPress();
        // setActive({...active, index: num});
      }}>
      <LinearGradient
        elevation={0.8}
        colors={isActive ? ['#F9F9F9', '#F9F9F9'] : ['#F54F84', '#F52667']}
        style={styles.headerBoxesImage}>
        <Image
          source={image}
          style={{
            width: 20.8,
            height: 22.56,
            tintColor: isActive ? '#F52667' : '#F9F9F9',
          }}
        />
        <Text style={{fontSize: 12, color: isActive ? '#F52667' : '#F9F9F9'}}>
          {text}
        </Text>
      </LinearGradient>
    </TouchableOpacity>
  );
};

const AddStatus = props => {
  const [state, setState] = useState(0);
  const [myActive, setMyActive] = useState(0);

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

  useEffect(() => {
    const backScreen = props?.route?.params?.backScreen;
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
              text={'Status'}
              iconName={'cross'}
              iconT={'Entypo'}
              color={'#B5B3B5'}
              fontSize={35}
              onPress={() => {
                props.navigation.navigate('home');
              }}
            />
          </View>
          <View style={styles.mainContainer}>
            <View style={styles.headerBoxes}>
              {[
                {text: 'Images', icon: Images.Pictures.photos},
                {text: 'Videos', icon: Images.Backgrounds.play},
                {text: 'Text', icon: Images.Pictures.Aa, status: 0},
              ].map((val, index) => {
                console.log(index, myActive);
                return (
                  <Box
                    onPress={
                      val.text === 'Text'
                        ? () => {
                            setMyActive(0),
                              props.navigation.navigate('Statics', {
                                screen: 'status3',
                              });
                          }
                        : () => setMyActive(index)
                    }
                    image={val.icon}
                    text={val.text}
                    isActive={index === myActive}
                  />
                );
              })}
            </View>
            <View style={styles.textHeading}>
              <View style={styles.Text}>
                <Text style={styles.leftRightText}>Gallery</Text>
                <Icon
                  name="down"
                  type="AntDesign"
                  style={{color: '#211E1F', fontSize: 15, paddingLeft: 5}}
                />
              </View>
              <Text style={styles.leftRightText1}>Browse Image</Text>
            </View>

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
                          }}>
                          {myActive == 1 ? (
                            <Image
                              source={Images.Backgrounds.play}
                              style={{width: 18, height: 20}}
                            />
                          ) : null}
                        </ImageBackground>
                      </View>

                      <View style={{width: '30%', height: 113}}>
                        <ImageBackground
                          source={item.icon2}
                          style={{
                            width: '100%',
                            height: '100%',
                            alignItems: 'center',
                            justifyContent: 'center',
                          }}>
                          {myActive == 1 ? (
                            <Image
                              source={Images.Backgrounds.play}
                              style={{width: 18, height: 20}}
                            />
                          ) : null}
                        </ImageBackground>
                      </View>
                      <View style={{width: '30%', height: 113}}>
                        <ImageBackground
                          source={item.icon3}
                          style={{
                            width: '100%',
                            height: '100%',
                            alignItems: 'center',
                            justifyContent: 'center',
                          }}>
                          {myActive == 1 ? (
                            <Image
                              source={Images.Backgrounds.play}
                              style={{width: 18, height: 20}}
                            />
                          ) : null}
                        </ImageBackground>
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
  );
};

export default AddStatus;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
  },
  mainContainer: {
    width: '80%',
    height: '100%',
    alignSelf: 'center',
    marginTop: 10,
    paddingBottom: 100,
  },
  headerBoxes: {
    flexDirection: 'row',
    width: '90%',
    alignSelf: 'center',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 10,
  },
  headerBoxesImage: {
    width: 75,
    height: 78,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textHeading: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  Text: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  leftRightText1: {fontSize: 15, color: '#F54F84'},
  leftRightText: {fontSize: 15, color: '#211E1F', fontWeight: '600'},
});
