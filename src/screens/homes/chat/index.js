import React, {useState, useEffect} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Dimensions,
} from 'react-native';
import {Images, Themes} from '../../../constants';
import {Icon} from 'native-base';
import {Image} from 'react-native';
import {TextInput} from 'react-native';
import {ScrollView} from 'react-native';

const Chat = props => {
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
      {
        _id: 1,
        text: 'Hello developer',
        createdAt: new Date(),
        user: {
          _id: 2,
          name: 'React Native',
          avatar: 'https://placeimg.com/140/140/any',
        },
      },
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
      {
        _id: 1,
        text: 'Hello developer',
        createdAt: new Date(),
        user: {
          _id: 2,
          name: 'React Native',
          avatar: 'https://placeimg.com/140/140/any',
        },
      },
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
      {
        _id: 1,
        text: 'Hello developer',
        createdAt: new Date(),
        user: {
          _id: 2,
          name: 'React Native',
          avatar: 'https://placeimg.com/140/140/any',
        },
      },
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
      {
        _id: 1,
        text: 'Hello developer',
        createdAt: new Date(),
        user: {
          _id: 2,
          name: 'React Native',
          avatar: 'https://placeimg.com/140/140/any',
        },
      },
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
      {
        _id: 1,
        text: 'Hello developer',
        createdAt: new Date(),
        user: {
          _id: 2,
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
      <View
        style={{
          width: '90%',
          alignSelf: 'center',
          paddingTop: 20,
          height: '100%',
        }}>
        <View style={{width: '100%', height: orientation ? '90%' : '85%'}}>
          <View
            style={{
              width: '100%',
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <TouchableOpacity
              onPress={() => {
                props.navigation.goBack();
              }}>
              <Icon name="chevron-back" type="Ionicons" />
            </TouchableOpacity>
          </View>

          <View
            style={{
              width: '90%',
              alignSelf: 'center',
              height: 100,
              justifyContent: 'center',
              alignItems: 'center',
              borderBottomWidth: 1,
              paddingBottom: 15,
              borderBottomColor: '#707070',
            }}>
            <View style={{width: 60, aspectRatio: 1, borderRadius: 100}}>
              <Image
                source={Images.Backgrounds.chatProfile}
                style={{width: '100%', height: '100%'}}
                resizeMode="contain"
              />
            </View>
            <View style={{paddingTop: 5}}>
              <Text
                style={{color: '#3B3939', fontSize: 16, fontWeight: 'bold'}}>
                Maria Saldana
              </Text>
            </View>
            <View style={{paddingVertical: 2}}>
              <Text style={{color: '#3B3939', fontSize: 14, fontWeight: '500'}}>
                Lorem ipsum
              </Text>
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
                <>
                  <View
                    style={{
                      width: '70%',

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
                        source={Images.Backgrounds.chatProfile}
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
                    <View
                      style={{
                        alignSelf: 'center',
                        width: 3.6,
                        height: 18,
                        marginLeft: 5,
                        marginRight: 5,
                        justifyContent: 'space-between',
                      }}>
                      <View
                        style={{
                          opacity: 0.5,
                          width: '100%',
                          height: '30%',
                          borderRadius: 100,
                          backgroundColor: '#4E4C4Ccc',
                        }}></View>
                      <View
                        style={{
                          borderRadius: 100,
                          width: '100%',
                          height: '30%',
                          backgroundColor: '#4E4C4Ccc',
                          opacity: 0.5,
                        }}></View>
                      <View
                        style={{
                          opacity: 0.5,
                          borderRadius: 100,
                          width: '100%',
                          height: '30%',
                          backgroundColor: '#4E4C4Ccc',
                        }}></View>
                    </View>
                  </View>
                </>
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

export default Chat;

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
});
