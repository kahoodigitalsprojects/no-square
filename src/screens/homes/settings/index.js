import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  ScrollView,
  StatusBar,
  Image,
  TouchableOpacity,
  BackHandler,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {Icon, Item} from 'native-base';
import {Themes, Images} from './../../../constants';
import {HomeHeader, CustomPopup} from '../../../components';

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
      route: {screen: 'notificationPrivacy'},
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
      route: {screen: 'privacySetting'},
    },
    {
      icon: Images.Backgrounds.privacy,
      text: 'Subscriptions Plan',
      rightText: '',
      rightIcon: 'right',
      rightIconType: 'AntDesign',
      imageHeight: 30,
      imageWidth: 30,
      statics: 1,
      route: {screen: 'subcriptionPlan'},
    },
    {
      icon: Images.Backgrounds.lock,
      text: 'Change Password',
      rightText: '',
      rightIcon: 'right',
      rightIconType: 'AntDesign',
      imageHeight: 16.98,
      imageWidth: 14.98,
      onPress: 'changePassword',
      route: {screen: 'changePassword'},
    },
    {
      icon: Images.Pictures.delete,
      text: 'Delete Account',
      rightIcon: 'right',
      rightIconType: 'AntDesign',
      imageHeight: 16.98,
      imageWidth: 14.98,
      onPress: 'deleteAccount',
      route: {screen: 'deleteAccount'},
    },
    {
      icon: Images.Backgrounds.terms,
      text: 'Terms & Conditions',
      rightText: '',
      rightIcon: 'right',
      rightIconType: 'AntDesign',
      imageHeight: 30,
      imageWidth: 30,
      route: {screen: 'termsAndConditions'},
      onProps: () => {
        setVisible(true);
        setPrivacy('Terms & Conditions');
      },
    },
    {
      icon: Images.Pictures.eye,
      text: 'Privacy Policy',
      rightText: '',
      rightIcon: 'right',
      rightIconType: 'AntDesign',
      imageHeight: 30,
      imageWidth: 30,
      route: {screen: 'privacyPolicy'},
      onProps: () => {
        setVisible(true);
        setPrivacy('Privacy Policy');
      },
    },
  ];
  const [visible, setVisible] = useState(false);
  const [privacy, setPrivacy] = useState('Terms & Conditions');

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
        <View style={{marginTop: 40}}>
          <HomeHeader
            navigation={props.navigation}
            setting
            text={'Settings'}
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
                  onPress={
                    i > 4
                      ? item.onProps
                      : () => props.navigation.navigate('Statics', item.route)
                  }>
                  <View style={styles.item1}>
                    <Image
                      resizeMode="contain"
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

      <CustomPopup
        stateOverlay={visible}
        setstateOverlay={() => setVisible(false)}
        modelHeight={618}
        modelWidth={332}
        privacyText={privacy}
        privacy
        border_radius={30}
        OBonPress={() => {
          setVisible(false);
        }}
      />
      {/* <CustomPopup
        stateOverlay={visibles}
        setstateOverlay={() => setVvisible(false)}
        modelHeight={618}
        modelWidth={332}
        privacy
        border_radius={30}
        OBonPress={() => {
          setVvisible(false);
        }}
      /> */}
    </>
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
