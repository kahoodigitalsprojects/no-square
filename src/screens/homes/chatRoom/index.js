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

import {HomeHeader, SearchBar, TextWithLine} from '../../../components';
import {Themes, Images} from './../../../constants';
import {Icon, Item} from 'native-base';

const ChatRoom = props => {
  const ChatData = [
    {image: Images.Backgrounds.chatProfile1, text: 'Business Room'},
    {image: Images.Backgrounds.chatProfile2, text: 'Fitness Club'},
    {image: Images.Backgrounds.chatProfile3, text: 'Fitness Club'},
    {image: Images.Backgrounds.chatProfile4, text: 'Fitness Club'},
  ];
  return (
    <SafeAreaView style={styles.screenContainer}>
      <StatusBar backgroundColor={'white'} barStyle="dark-content" />
      <ScrollView
        keyboardShouldPersistTaps="handled"
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{flexGrow: 1}}>
        <>
          <HomeHeader navigation={props.navigation} home notify />
          <SearchBar />
          <View style={styles.mainBody}>
            <View style={styles.chatText}>
              <Text style={styles.textStyle}>Chat Rooms</Text>
              <View style={styles.textBorderLine}></View>
            </View>
            <View style={{width: '100%', height: 38, marginTop: 20}}>
              <TouchableOpacity
                style={styles.createChatRoomBtn}
                onPress={() => {
                  props.navigation.navigate('Statics', {
                    screen: 'createChatRoom',
                  });
                }}
                activeOpacity={0.9}>
                <Icon
                  name="group-add"
                  type="MaterialIcons"
                  style={{color: 'white'}}
                />
                <Text style={{fontSize: 12, color: 'white', paddingLeft: 7}}>
                  Create Chat Room
                </Text>
              </TouchableOpacity>
            </View>

            <View style={{marginTop: 0}}>
              <TextWithLine
                text="Active Room"
                left={0}
                fontSize={15}
                fontWeight="600"
              />
            </View>
            <View style={styles.chatBox}>
              <TouchableOpacity
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
                activeOpacity={0.8}
                onPress={() => {
                  props.navigation.navigate('Statics', {
                    screen: 'recording',
                  });
                }}>
                <View style={styles.chatProfile}>
                  <Image
                    source={Images.Backgrounds.chatProfile3}
                    style={{width: '100%', height: '100%'}}
                  />
                </View>
                <Text style={styles.profileName}>Music Room</Text>
              </TouchableOpacity>

              <View style={{alignItems: 'center', justifyContent: 'center'}}>
                <Text style={{fontSize: 10}}>20 min</Text>
                <Text style={{fontSize: 12}}>20k Members</Text>
              </View>
            </View>
            <TextWithLine
              text="Available Room"
              left={0}
              fontSize={15}
              fontWeight="600"
            />
            {ChatData.map((item, i) => {
              return (
                <View style={styles.chatBox} key={i}>
                  <View
                    style={{
                      flexDirection: 'row',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}>
                    <View style={styles.chatProfile}>
                      <Image
                        source={item.image}
                        style={{width: '100%', height: '100%'}}
                      />
                    </View>
                    <Text style={styles.profileName}>{item.text}</Text>
                  </View>

                  <View
                    style={{alignItems: 'center', justifyContent: 'center'}}>
                    <Text style={{fontSize: 10}}>1 hour ago</Text>
                    <Text style={{fontSize: 12}}>20k Members</Text>
                  </View>
                </View>
              );
            })}
          </View>
        </>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ChatRoom;

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
  activeLine: {
    width: '65%',
    borderBottomWidth: 1.5,
    borderColor: '#707070',
    alignSelf: 'center',
  },
  chatBox: {
    width: '90%',
    flexDirection: 'row',
    marginTop: 20,
    alignSelf: 'center',
    justifyContent: 'space-between',
  },
  chatProfile: {width: 60, height: 60},
  profileName: {
    fontSize: 15,
    color: '#6D6B6B',
    marginLeft: 10,
    fontWeight: '600',
  },
  createChatRoomBtn: {
    width: '50%',
    height: '100%',
    borderRadius: 5,
    backgroundColor: '#F54D83',
    position: 'absolute',
    right: 0,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
});
