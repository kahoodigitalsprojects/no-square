import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  ScrollView,
  StatusBar,
  Image,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {Icon, Item} from 'native-base';
import {Themes, Images} from './../../../constants';
import {HomeHeader} from '../../../components';

const NotificationPrivacy = props => {
  const Data = [
    {
      icon: Images.Backgrounds.comment,
      text: 'Comment',
      subText: 'In App, Email, Device',

      rightIcon: 'right',
      rightIconType: 'AntDesign',
      imageHeight: 30,
      imageWidth: 30,
      onPress: 'notificationSettings',
    },
    {
      icon: Images.Backgrounds.share,
      text: 'Sharing',
      subText: 'In App, Email, Device',

      rightIcon: 'right',
      rightIconType: 'AntDesign',
      imageHeight: 30,
      imageWidth: 30,
      onPress: 'notificationSettings',
    },
    {
      icon: Images.Backgrounds.msg,
      text: 'New Message',
      subText: 'In App, Email, Device',
      rightIcon: 'right',
      rightIconType: 'AntDesign',
      imageHeight: 30,
      imageWidth: 30,
      onPress: 'notificationSettings',
    },

    {
      icon: Images.Backgrounds.home,
      text: 'Friend Request',
      subText: 'In App, Email, Device',
      rightIcon: 'right',
      rightIconType: 'AntDesign',
      imageHeight: 30,
      imageWidth: 30,
      onPress: 'notificationSettings',
    },
    {
      icon: Images.Backgrounds.likeIcon,
      text: 'Like',
      subText: 'In App, Email, Device',
      rightIcon: 'right',
      rightIconType: 'AntDesign',
      imageHeight: 30,
      imageWidth: 30,
      onPress: 'notificationSettings',
    },
    {
      icon: Images.Backgrounds.tag,
      text: 'Tags',
      subText: 'In App, Email, Device',
      rightIcon: 'right',
      rightIconType: 'AntDesign',
      imageHeight: 28.56,
      imageWidth: 27.57,
      onPress: 'notificationSettings',
    },
  ];
  return (
    <SafeAreaView style={styles.screenContainer}>
      <StatusBar backgroundColor={'white'} barStyle="dark-content" />
      <View style={{marginTop: 40}}>
        <HomeHeader
          navigation={props.navigation}
          setting
          right
          settingIconProps={() => props.navigation.goBack()}
          text={'Notifications Privacy'}
          onPress={'settings'}
        />
      </View>
      <ScrollView
        keyboardShouldPersistTaps="handled"
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{flexGrow: 1}}>
        <View style={styles.body}>
          {Data.map((item, i) => {
            return (
              <>
                <TouchableOpacity
                  style={styles.bodyItems}
                  activeOpacity={0.8}
                  onPress={() => {
                    props.navigation.navigate(item.onPress);
                  }}>
                  <View style={styles.item1}>
                    <Image
                      source={item.icon}
                      style={{width: item.imageWidth, height: item.imageHeight}}
                    />
                  </View>

                  <View style={styles.item2}>
                    <Text style={{fontSize: 18, color: '#323232'}}>
                      {item.text}
                    </Text>
                    <Text style={{fontSize: 12, color: '#323232'}}>
                      {item.subText}
                    </Text>
                  </View>
                  <View style={styles.item3}>
                    <Icon
                      name={item.rightIcon}
                      type={item.rightIconType}
                      style={{fontSize: 18, color: '#F54F84'}}
                    />
                  </View>
                </TouchableOpacity>
              </>
            );
          })}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default NotificationPrivacy;

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    backgroundColor: 'white',
  },
  body: {
    width: '90%',
    height: '100%',
    alignSelf: 'center',
    paddingBottom: 50,
  },
  bodyItems: {
    width: '100%',
    height: 42,
    marginTop: 35,
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  item1: {
    width: '15%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  item2: {
    width: '65%',
    justifyContent: 'center',
  },
  item3: {
    width: '20%',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
