import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TouchableHighlight,
} from 'react-native';
import Swipeable from 'react-native-swipeable';
import React from 'react';

const SwipeableChat = () => {
  const ChatData = [
    {
      image: Images.Backgrounds.chatProfile2,
      text: 'Alicia Sierra',
      title: '27 Mutual Friends',
    },
    {
      image: Images.Backgrounds.chatProfile1,
      text: 'Alison Parker',
      title: '27 Mutual Friends',
    },
    {
      image: Images.Backgrounds.chatProfile2,
      text: 'Alicia Sierra',
      title: '27 Mutual Friends',
    },
    {
      image: Images.Backgrounds.chatProfile4,
      text: 'Marcia Dor',
      title: '27 Mutual Friends',
    },

    {
      image: Images.Backgrounds.chatProfile3,
      text: 'Helan',
      title: '27 Mutual Friends',
    },
    {
      image: Images.Backgrounds.chatProfile2,
      text: 'Alicia Sierra',
      title: '27 Mutual Friends',
    },
    {
      image: Images.Backgrounds.chatProfile1,
      text: 'Lucy Grey',
      title: '27 Mutual Friends',
    },
    {
      image: Images.Backgrounds.chatProfile3,
      text: 'Anna May',
      title: '27 Mutual Friends',
    },
    {
      image: Images.Backgrounds.chatProfile4,
      text: 'Helan',
      title: '27 Mutual Friends',
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
          <Text style={{fontSize: 10, color: 'black'}}>Block</Text>
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
            }}>
            <Image
              source={Images.Pictures.iconCross}
              style={{width: 15, height: 15}}
            />
          </View>
          <Text style={{fontSize: 10, color: 'black'}}>unfriend</Text>
        </View>
      </TouchableOpacity>
    </View>,
  ];

  return (
    <Swipeable rightButtons={rightButtons}>
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
              style={{width: '100%', height: '100%'}}
            />
            {item.text === 'Helan' ||
            item.text === 'Marcia Dor' ||
            item.text === 'Lucy Grey' ? (
              <View style={styles.active}></View>
            ) : null}
          </View>

          <View>
            <Text style={styles.profileName}>{item.text}</Text>
            <Text style={styles.profileTitle}>{item.title}</Text>
          </View>
        </View>

        <View style={{alignItems: 'center', justifyContent: 'center'}}>
          <Text style={{fontSize: 10}}>20 min</Text>
          <Text style={{fontSize: 12}}>20k Members</Text>
        </View>
      </View>
    </Swipeable>
  );
};

export default SwipeableChat;

const styles = StyleSheet.create({
  chatBox: {
    width: '90%',
    height: 60,

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
  active: {
    width: 13,
    height: 13,
    borderRadius: 14,
    backgroundColor: '#24A206',
    position: 'absolute',
    top: 0,
    right: 0,
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
  rightContentHiddin: {
    marginTop: 10,
    height: 60,
    width: '40%',
    marginRight: 20,
    alignItems: 'center',
    justifyContent: 'center',
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
