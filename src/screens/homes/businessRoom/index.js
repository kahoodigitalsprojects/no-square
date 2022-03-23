import React, {useState, useEffect} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Dimensions,
  StatusBar,
} from 'react-native';
import {Tooltip, colors} from 'react-native-elements';
import {Images, Themes} from '../../../constants';
import {Icon} from 'native-base';
import {Image} from 'react-native';
import {TextInput} from 'react-native';
import {ScrollView} from 'react-native';

const BusinessRoom = props => {
  const [messages, setMessages] = useState([]);
  const [message, setMessage] = useState('');
  const [orientation, setOrientation] = useState(true);

  const isPortrait = () => {
    const dim = Dimensions.get('screen');
    return dim.height >= dim.width;
  };

  useEffect(() => {
    Dimensions.addEventListener('change', () => {
      setOrientation(isPortrait());
    });
  }, [Dimensions]);

  useEffect(() => {
    setMessages([
      {
        _id: 1,
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        createdAt: new Date(),
        user: {
          _id: 1,
          name: 'React Native',
          avatar: 'https://placeimg.com/140/140/any',
        },
      },
    ]);
  }, []);

  const onSend = () => {
    setMessages([
      ...messages,
      {
        _id: 1,
        text: message,
        createdAt: new Date(),
        user: {
          _id: 2,
          name: 'React Native',
          avatar: 'https://placeimg.com/140/140/any',
        },
      },
    ]);

    setMessage('');

    scrollViewRef.scrollToEnd({animated: true});
  };

  function formatAMPM(date) {
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var ampm = hours >= 12 ? 'pm' : 'am';
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
    minutes = minutes < 10 ? '0' + minutes : minutes;
    var strTime = hours + ':' + minutes + ' ' + ampm;
    return strTime;
  }

  let [scrollViewRef, setRef] = useState({});

  return (
    <SafeAreaView style={styles.screenContainer}>
      <StatusBar backgroundColor={'white'} />
      <View
        style={{
          width: '90%',
          alignSelf: 'center',
          height: '100%',
          paddingTop: 40,
        }}>
        <View
          style={{
            width: '100%',
            height: orientation ? '90%' : '85%',
          }}>
          <View
            style={{
              width: '10%',
              alignSelf: 'flex-start',
              alignItems: 'center',
            }}>
            <TouchableOpacity onPress={() => props.navigation.goBack()}>
              <Icon name="chevron-back" type="Ionicons" />
            </TouchableOpacity>
          </View>

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
          <View
            style={{
              width: '10%',
              position: 'absolute',

              right: 0,
              alignSelf: 'flex-start',
              alignItems: 'center',
            }}>
            <View style={styles.view}>
              <Tooltip
                popover={<Text style={{color: 'white'}}>Leave Room</Text>}
                width={83}
                backgroundColor={'#F54F84'}>
                <View style={styles.dot}></View>
                <View style={styles.dot}></View>
                <View style={styles.dot}></View>
              </Tooltip>
            </View>
          </View>
          <View
            style={{
              width: '90%',
              alignSelf: 'center',
              height: 120,
              flexDirection: 'row',
              justifyContent: 'space-between',
              borderBottomWidth: 1,
              borderBottomColor: '#707070',
            }}>
            <View
              style={{
                width: '77%',
                height: 99,
                marginTop: 10,
                flexDirection: 'row',
              }}>
              <Image
                source={Images.Backgrounds.myProfile}
                style={{width: 99, height: 99, borderRadius: 20}}
              />
              <View style={{marginLeft: 5, marginTop: 5}}>
                <Text
                  style={{
                    color: '#342E2E',
                    fontSize: 25,
                    fontWeight: 'bold',
                  }}>
                  Dinner Plan
                </Text>

                <Text style={{color: '#342E2E', fontSize: 15}}>4 Members</Text>
              </View>
            </View>
          </View>
          <ScrollView
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{flexGrow: 1}}
            ref={ref => setRef(ref)}
            onContentSizeChange={() =>
              scrollViewRef.scrollToEnd({animated: true})
            }>
            {messages.map((message, i) => {
              return (
                <View
                  style={{
                    width: '70%',
                    marginTop: 8,

                    flexDirection:
                      message?.user?._id == 1 ? 'row' : 'row-reverse',
                    marginVertical: 10,
                    alignItems: 'flex-start',

                    alignSelf:
                      message?.user?._id == 1 ? 'flex-start' : 'flex-end',
                  }}>
                  <View
                    style={{
                      marginLeft: message?.user?._id == 1 ? 0 : 5,
                      marginRight: message?.user?._id == 1 ? 5 : 0,
                      width: 40,
                      aspectRatio: 1,
                      borderRadius: 100,
                      marginTop: 5,
                    }}>
                    <Image
                      source={Images.Backgrounds.chatProfile1}
                      style={{width: '100%', height: '100%'}}
                    />
                  </View>
                  <View
                    style={{
                      minHeight: 50,
                      paddingVertical: 10,
                      overflow: 'hidden',
                      //   height: '90%',
                      justifyContent: 'center',
                      alignItems: 'center',
                      backgroundColor:
                        message?.user?._id == 1 ? '#4996D6' : '#F54F84',
                      borderRadius: 25,
                      paddingHorizontal: 10,
                      minWidth: 80,
                    }}>
                    <Text style={{color: '#fff'}}> {message?.text} </Text>
                  </View>
                </View>
              );
            })}
          </ScrollView>
        </View>

        <View
          style={{
            width: '100%',
            height: orientation ? '10%' : '15%',
            marginBottom: 5,

            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}>
          <View
            style={{
              width: '90%',
              justifyContent: 'flex-start',
              alignItems: 'center',
              flexDirection: 'row',
              backgroundColor: '#fff',
              elevation: 2,
              borderRadius: 50,
              paddingLeft: 5,
            }}>
            <View>
              <Icon
                name="emoji-emotions"
                type="MaterialIcons"
                style={{color: '#00000030'}}
              />
            </View>
            <TextInput
              multiline={true}
              placeholder="Type Here"
              value={message}
              onChangeText={text => {
                setMessage(text.trimStart());
              }}
              style={{width: '80%'}}
            />
            <View
              style={{
                position: 'absolute',
                right: 5,
                justifyContent: 'center',
              }}>
              <Icon
                name="attachment"
                type="Entypo"
                style={{color: '#00000030'}}
              />
            </View>
          </View>
          {message.length <= 0 ? null : (
            <View
              style={{
                width: '10%',
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'flex-end',
              }}>
              <Icon
                name="send"
                type="MaterialIcons"
                style={{color: '#F54F84'}}
                onPress={onSend}
              />
            </View>
          )}
        </View>
      </View>
    </SafeAreaView>
  );
};

export default BusinessRoom;

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    backgroundColor: Themes.backgrounds.screenBG,
  },

  topComponent: {
    width: '100%',
    backgroundColor: '#1C1C1C',
    height: 90,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    top: 20,
    zIndex: 99,
  },
  mid: {
    width: '50%',
    alignSelf: 'center',
    height: 25,
    marginTop: -15,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  dot: {
    width: 6,
    height: 6,
    backgroundColor: '#5D5A5A',
    borderRadius: 8,
  },
  view: {},
});
