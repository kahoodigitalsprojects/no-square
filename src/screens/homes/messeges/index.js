import React, {useState} from 'react';
// import Swipeable from 'react-native-swipeable';
import {
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
  Animated,
  Dimensions,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

import {HomeHeader, SearchBar} from '../../../components';
import {Themes, Images} from './../../../constants';
import Swipeable from 'react-native-gesture-handler/Swipeable';

const Messeges = props => {
  const [state, setState] = useState({
    active: true,
    listViewData: [{}],
    boxWidth: false,
  });
  const ChatData = [
    {
      image: Images.Backgrounds.chatProfile2,
      text: 'Alicia Sierra',
      title: 'You: I m waiting for.',
    },
    {
      image: Images.Backgrounds.chatProfile1,
      text: 'Alison Parker',
      title: 'You: I m waiting for.',
    },
    {
      image: Images.Backgrounds.chatProfile2,
      text: 'Alicia Sierra',
      title: 'You: I m waiting for.',
    },
    {
      image: Images.Backgrounds.chatProfile4,
      text: 'Marcia Dor',
      title: 'You: I m waiting for.',
    },

    {
      image: Images.Backgrounds.chatProfile3,
      text: 'Helan',
      title: 'You: I m waiting for.',
    },
    {
      image: Images.Backgrounds.chatProfile2,
      text: 'Alicia Sierra',
      title: 'You: I m waiting for.',
    },
    {
      image: Images.Backgrounds.chatProfile1,
      text: 'Lucy Grey',
      title: 'You: I m waiting for.',
    },
    {
      image: Images.Backgrounds.chatProfile3,
      text: 'Anna May',
      title: 'You: I m waiting for.',
    },
    {
      image: Images.Backgrounds.chatProfile4,
      text: 'Helan',
      title: 'You: I m waiting for.',
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
          <Text style={{fontSize: 9, color: 'black'}}>Block</Text>
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
              backgroundColor: '#F779A1',
            }}
            opacity={0.3}>
            <Image
              source={Images.Pictures.delete}
              style={{width: 15, height: 15}}
            />
          </View>
          <Text style={{fontSize: 9, color: 'black'}}>Delete</Text>
        </View>
      </TouchableOpacity>
    </View>,
  ];

  const rightSwipe = (progress, dragX) => {
    console.log({dragX});
    return (
      <View
        style={{
          width: 100,
          height: '100%',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Animated.View
          style={{
            width: '100%',
            height: '100%',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
            // transform: [
            //   {
            //     translateX: dragX.interpolate({
            //       inputRange: [0, 0, 100],
            //       outputRange: [0, 0, 100],
            //     }),
            //   },
            // ],
          }}>
          <TouchableOpacity activeOpacity={0.9}>
            <View>
              <View style={styles.rightContentHiddinData}>
                <Image
                  source={Images.Backgrounds.block}
                  style={{width: 15, height: 15}}
                />
              </View>
              <Text style={{fontSize: 9, color: 'black'}}>Block</Text>
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
                  backgroundColor: '#F779A1',
                }}
                opacity={0.3}>
                <Image
                  source={Images.Pictures.delete}
                  style={{width: 15, height: 15}}
                />
              </View>
              <Text style={{fontSize: 9, color: 'black'}}>Delete</Text>
            </View>
          </TouchableOpacity>
        </Animated.View>
      </View>
      // </View>

      // </View>
      // </View>
    );
  };

  return (
    <SafeAreaView style={styles.screenContainer}>
      <StatusBar backgroundColor={'white'} barStyle="dark-content" />
      <ScrollView
        keyboardShouldPersistTaps="handled"
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{flexGrow: 1}}>
        <>
          <HomeHeader home navigation={props.navigation} {...props} notify />
          <SearchBar placeholder={'Search for Chat'} />
          <View style={styles.mainBody}>
            <View style={styles.chatText}>
              <Text style={styles.textStyle}>Your Messages</Text>
              <View style={styles.textBorderLine}></View>
            </View>

            {ChatData.map((item, i) => {
              return (
                <Swipeable
                  renderRightActions={rightSwipe}
                  containerStyle={{
                    height: 60,
                    marginVertical: 10,
                    width: '100%',
                    alignSelf: 'center',
                  }}>
                  <TouchableOpacity
                    onPress={() => {
                      props.navigation.navigate('Statics', {
                        screen: 'chat',
                      });
                    }}
                    activeOpacity={0.7}
                    style={{
                      width: '90%',
                      alignSelf: 'center',
                      height: '100%',
                      flexDirection: 'row',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                    }}>
                    <View style={styles.chatProfile}>
                      <Image
                        source={item.image}
                        style={{width: '100%', height: '100%'}}
                      />
                    </View>
                    <View style={{flex: 1, paddingLeft: 15}}>
                      <Text style={styles.profileName}>{item.text}</Text>
                      <Text style={styles.profileTitle}>{item.title}</Text>
                    </View>

                    <View
                      style={{
                        height: 60,
                        alignItems: 'center',
                        justifyContent: 'center',
                        width: 60,
                      }}>
                      {i < 2 && (
                        <View
                          style={{
                            width: 20,
                            height: 20,
                            borderRadius: 100,
                            backgroundColor: '#F54F84',
                            justifyContent: 'center',
                            alignItems: 'center',
                            marginBottom: 5,
                          }}>
                          <Text style={{fontSize: 10}}>5</Text>
                        </View>
                      )}
                      <Text style={{color: '#707070', fontSize: 10}}>
                        20 min
                      </Text>
                    </View>
                  </TouchableOpacity>
                </Swipeable>

                // <Swipeable rightButtons={rightButtons}>
                //   <TouchableOpacity
                //     style={styles.chatBox}
                //     onPress={() => {
                //       props.navigation.navigate('Statics', {
                //         screen: 'chat',
                //       });
                //     }}
                //     activeOpacity={0.8}>
                //     <View
                //       style={{
                //         flexDirection: 'row',
                //         alignItems: 'center',
                //         justifyContent: 'center',
                //       }}>
                //       <View style={styles.chatProfile}>
                //         <Image
                //           source={item.image}
                //           style={{width: '100%', height: '100%'}}
                //         />
                //         {item.text === 'Helan' ||
                //         item.text === 'Marcia Dor' ||
                //         item.text === 'Lucy Grey' ? (
                //           <View style={styles.active}></View>
                //         ) : null}
                //       </View>

                //       <View>
                //         <Text style={styles.profileName}>{item.text}</Text>
                //         <Text style={styles.profileTitle}>{item.title}</Text>
                //       </View>
                //     </View>
                //     <View
                //       style={{
                //         alignSelf: 'flex-end',
                //         height: 60,
                //         alignItems: 'center',
                //         justifyContent: 'center',
                //         marginRight: 15,
                //       }}>
                //       <Text style={{color: '#707070', fontSize: 10}}>
                //         20 min
                //       </Text>
                //     </View>
                //   </TouchableOpacity>
                // </Swipeable>
              );
            })}
          </View>
        </>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Messeges;

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
  chatBox: {
    width: '105%',
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
  rightContentHiddin: {
    marginTop: 10,
    height: 60,
    width: '20%',
    marginLeft: 18,
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

  deleteBox: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 100,
    height: 60,
  },
});
const SCREEN_WIDTH = Dimensions.get('window').width;
