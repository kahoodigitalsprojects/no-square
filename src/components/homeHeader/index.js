import React from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
  ImageBackground,
} from 'react-native';

import {Themes, Images} from './../../constants';
import {Icon} from 'native-base';
import {color} from 'react-native-reanimated';
import {useDrawerStatus} from '@react-navigation/drawer';
const HomeHeader = props => {
  const {
    iconName,
    navigation,
    home,
    setting,
    text,
    onPress,
    notify,
    left,
    right,
    iconT,
    fontSize,
    color,
    margin,
    settingIconProps,
    textColor,
  } = props;
  // const isDrawerOpen = useDrawerStatus();
  return (
    <View style={styles.container}>
      <View style={styles.containerBox}>
        {home && (
          <>
            <TouchableOpacity
              style={styles.left}
              onPress={() => {
                props.navigation.openDrawer();
              }}>
              <Image
                source={Images.Pictures.homeLogo}
                style={{width: 20, height: 20}}
              />
            </TouchableOpacity>

            <View style={styles.mid}>
              <Image
                source={Images.Pictures.locationIcon}
                style={{width: 24, height: 24}}
              />

              <Text
                style={{
                  width: 125,
                  height: 28,
                  fontSize: 20,
                  color: '#262223',
                }}>
                New York, US
              </Text>
              <Icon
                name="down"
                type="AntDesign"
                style={{fontSize: 12, color: '#F54F84'}}
              />
            </View>
            {notify && (
              <TouchableOpacity
                style={styles.right}
                onPress={() => {
                  props.navigation.navigate('Statics', {
                    screen: 'notificationPage',
                  });
                }}>
                <ImageBackground
                  source={Images.Pictures.notificationIcon}
                  style={{width: 25.36, height: 29.97}}>
                  <View style={styles.rightIcon}></View>
                </ImageBackground>
              </TouchableOpacity>
            )}
          </>
        )}

        {setting && (
          <>
            <View
              style={{
                alignItems: 'center',
                justifyContent: 'center',
                width: '100%',
              }}>
              {left && (
                <TouchableOpacity
                  style={{position: 'absolute', left: 0, top: 3}}
                  onPress={onPress}>
                  <Icon
                    name={iconName || 'left'}
                    type={iconT || 'AntDesign'}
                    style={{
                      color: color || '#595959',
                      fontWeight: 'bold',
                      fontSize: fontSize || 28,
                    }}
                  />
                </TouchableOpacity>
              )}
              <Text
                style={{
                  marginTop: margin || 30,
                  fontSize: 20,
                  color: textColor || '#191919B8',
                  fontWeight: 'bold',
                }}>
                {text}
              </Text>
            </View>
            {right && (
              <TouchableOpacity
                style={{position: 'absolute', right: 0, top: 4}}
                onPress={settingIconProps}>
                <Icon
                  name="cross"
                  type="Entypo"
                  style={{
                    color: color || '#595959',
                    fontWeight: 'bold',
                    fontSize: fontSize || 28,
                  }}
                />
              </TouchableOpacity>
            )}
          </>
        )}
      </View>
    </View>
  );
};

export {HomeHeader};

const styles = StyleSheet.create({
  container: {width: '100%', height: 70},
  containerBox: {
    width: '90%',
    height: '100%',
    alignSelf: 'center',
    flexDirection: 'row',

    alignItems: 'center',
  },
  left: {
    width: '15%',

    height: 52,
    justifyContent: 'center',
    alignItems: 'center',
  },
  mid: {
    width: '70%',

    height: 52,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  right: {
    width: '15%',
    height: 52,
    justifyContent: 'center',
    alignItems: 'center',
  },
  rightIcon: {
    width: 8,
    height: 8,
    borderRadius: 5,
    backgroundColor: '#FB0E0E',
    position: 'absolute',
    right: 0,
    top: 2,
    // top: 14,
    // right: 18,
  },
});
