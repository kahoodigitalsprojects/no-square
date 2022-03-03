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

const TextWithLine = ({text}) => {
  return (
    <>
      <View
        style={{
          width: '100%',
          height: 25,
          alignItems: 'center',
          justifyContent: 'center',
          marginTop: 10,
          flexDirection: 'row',
        }}>
        <View
          style={{
            width: '100%',
            height: 2,
            backgroundColor: 'grey',
            alignItems: 'center',
          }}>
          <View
            style={{
              position: 'absolute',
              top: -13,
              height: 25,
              overflow: 'hidden',
              backgroundColor: '#ffff',
              paddingHorizontal: 10,
            }}>
            <Text style={styles.activeRoomText}>{text}</Text>
          </View>
        </View>
        {/* <View style={styles.activeRoom}></View>
        <Text style={styles.activeRoomText}>{text}</Text>
        <View style={styles.activeLine}></View> */}
      </View>
    </>
  );
};
const NotificationPage = props => {
  const ChatData = [
    {image: Images.Backgrounds.chatProfile1, text: 'Business Room'},
    {image: Images.Backgrounds.chatProfile2, text: 'Fitness Club'},
  ];
  const ChatData1 = [
    {image: Images.Backgrounds.chatProfile1, text: 'Business Room'},
    {image: Images.Backgrounds.chatProfile2, text: 'Fitness Club'},
    {image: Images.Backgrounds.chatProfile1, text: 'Business Room'},
    {image: Images.Backgrounds.chatProfile2, text: 'Fitness Club'},
    {image: Images.Backgrounds.chatProfile1, text: 'Business Room'},
    {image: Images.Backgrounds.chatProfile2, text: 'Fitness Club'},
  ];
  return (
    <SafeAreaView style={styles.screenContainer}>
      <StatusBar backgroundColor={'white'} barStyle="dark-content" />
      <HomeHeader
        navigation={props.navigation}
        setting
        text={'Notification'}
        settingIconProps={() =>
          props.navigation.navigate('MyTabs', {screen: 'home'})
        }
        right
      />
      <ScrollView
        keyboardShouldPersistTaps="handled"
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{flexGrow: 1}}>
        <TouchableOpacity
          style={{width: '90%', alignSelf: 'center'}}
          activeOpacity={0.8}>
          <Text style={styles.clearText}>Clear All</Text>
        </TouchableOpacity>
        <View style={styles.body}>
          <TextWithLine text={'Recent Notification'} />
          {ChatData.map((item, i) => {
            return (
              <View style={styles.chatBox}>
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}>
                  <View style={styles.chatProfile}>
                    <Image
                      source={item.image}
                      style={{width: 60, height: 60}}
                    />
                  </View>
                  <View
                    style={{
                      width: '65%',
                      height: 50,
                      borderBottomColor: 'black',
                      borderBottomWidth: 0.5,
                    }}>
                    <Text style={styles.profileName}>{item.text}</Text>
                    <Text style={styles.profileName1}>{item.text}</Text>
                  </View>
                </View>

                <View
                  style={{
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    width: '15%',
                  }}>
                  <Text style={{fontSize: 10, color: '#151515'}}>02:00 AM</Text>
                  <Text style={{fontSize: 10, color: '#151515'}}>11/12/21</Text>
                </View>
              </View>
            );
          })}
          <TextWithLine text={'Past Notification'} />

          {ChatData1.map((item, i) => {
            return (
              <View style={styles.chatBox}>
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}>
                  <View style={styles.chatProfile}>
                    <Image
                      source={item.image}
                      style={{width: 60, height: 60}}
                    />
                  </View>
                  <View
                    style={{
                      width: '60%',
                      height: 50,
                      borderBottomColor: 'black',
                      borderBottomWidth: 0.5,
                    }}>
                    <Text style={styles.profileName}>{item.text}</Text>
                    <Text style={styles.profileName1}>{item.text}</Text>
                  </View>
                </View>

                <View
                  style={{
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    width: '20%',
                  }}>
                  <Text style={{fontSize: 10, color: '#151515'}}>02:00 AM</Text>
                  <Text style={{fontSize: 10, color: '#151515'}}>11/12/21</Text>
                </View>
              </View>
            );
          })}

          <TouchableOpacity
            style={{
              width: 100,
              height: 20,
              alignItems: 'center',
              justifyContent: 'center',
              alignSelf: 'center',
              marginTop: 10,
            }}
            activeOpacity={0.7}>
            <Text style={{fontSize: 15, color: '#F54F84'}}>Load More...</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default NotificationPage;

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    backgroundColor: 'white',
  },
  body: {
    marginTop: 10,
    width: '100%',
    height: '100%',
    alignSelf: 'center',
    paddingBottom: 50,
  },
  clearText: {
    fontSize: 15,
    color: '#F54F84',
    fontWeight: 'bold',
    alignSelf: 'flex-end',
  },
  chatText: {
    marginTop: 10,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  activeRoom: {
    width: '30%',
    borderBottomWidth: 1.5,
    borderColor: '#707070',
  },
  activeRoomText: {
    fontSize: 18,
    color: '#211E1F',
    fontWeight: 'bold',
  },
  activeLine: {
    width: '30%',
    borderBottomWidth: 1.5,
    borderColor: '#707070',
  },
  chatBox: {
    width: '90%',
    flexDirection: 'row',
    marginTop: 20,
    alignSelf: 'center',
    justifyContent: 'space-between',
    height: 60,
  },
  chatProfile: {width: '20%', height: 60},
  profileName: {
    fontSize: 13,
    color: '#151515',
    marginLeft: 10,
    fontWeight: 'bold',
  },
  profileName1: {
    fontSize: 13,
    color: '#151515',
    marginLeft: 10,
    fontWeight: '600',
  },
});
