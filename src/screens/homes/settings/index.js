import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  ScrollView,
  StatusBar,
  Image,
} from 'react-native';
import React from 'react';
import {Icon, Item} from 'native-base';
import {Themes, Images} from './../../../constants';
import {HomeHeader} from '../../../components';
import {TouchableOpacity} from 'react-native-gesture-handler';
const Settings = props => {
  const Data = [
    {
      icon: Images.Backgrounds.notification,
      text: 'Notification',
      rightText: 'Allow',
      rightIcon: 'right',
      rightIconType: 'AntDesign',
      imageHeight: 15,
      imageWidth: 11.9,
      onPress: 'notificationPrivacy',
    },
    {
      icon: Images.Backgrounds.privacy,
      text: 'Privacy Setting',
      rightText: 'off',
      rightIcon: 'right',
      rightIconType: 'AntDesign',
      imageHeight: 30,
      imageWidth: 30,
      onPress: 'privacySetting',
    },
    {
      icon: Images.Backgrounds.terms,
      text: 'Terms of Use',
      rightText: '',
      rightIcon: 'right',
      rightIconType: 'AntDesign',
      imageHeight: 30,
      imageWidth: 30,
      // onPress: '',
    },
    {
      icon: Images.Backgrounds.lock,
      text: 'Change Password',
      rightText: '',
      rightIcon: '',
      rightIconType: '',
      imageHeight: 16.98,
      imageWidth: 14.98,
      onPress: 'changePassword',
    },
  ];
  return (
    <SafeAreaView style={styles.screenContainer}>
      <StatusBar backgroundColor={'white'} barStyle="dark-content" />
      <View style={{marginTop: 40}}>
        <HomeHeader
          navigation={props.navigation}
          setting
          text={'Setting'}
          right
          settingIconProps={() => props.navigation.navigate('home')}
        />
      </View>
      <ScrollView
        keyboardShouldPersistTaps="handled"
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{flexGrow: 1}}>
        <View style={styles.body}>
          {Data.map((item, i) => {
            return (
              <TouchableOpacity
                style={styles.bodyItems}
                activeOpacity={0.8}
                onPress={() => {
                  i === 2 ? null : props.navigation.navigate(item.onPress);
                }}>
                <View style={styles.item1}>
                  <Image
                    source={item.icon}
                    style={{width: item.imageWidth, height: item.imageHeight}}
                  />
                </View>

                <View style={styles.item2}>
                  <Text style={{fontSize: 12, color: '#323232'}}>
                    {item.text}
                  </Text>
                </View>
                <View style={styles.item3}>
                  <Text
                    style={{
                      fontSize: 12,
                      color: '#C2C2C2',
                      fontWeight: '900',
                      width: 30,
                      height: 16,
                    }}>
                    {item.rightText}
                  </Text>
                  <Icon
                    name={item.rightIcon}
                    type={item.rightIconType}
                    style={{fontSize: 18, color: '#F54F84'}}
                  />
                </View>
              </TouchableOpacity>
            );
          })}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Settings;

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    backgroundColor: 'white',
  },
  body: {
    width: '80%',
    height: '100%',
    alignSelf: 'center',
    paddingBottom: 50,
    backgroundColor: 'white',
  },
  bodyItems: {
    width: '100%',
    height: 40,
    marginTop: 35,
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  item1: {
    width: '10%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  item2: {
    width: '70%',

    justifyContent: 'center',
    borderBottomColor: 'grey',
    borderBottomWidth: 1,
  },
  item3: {
    width: '20%',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
