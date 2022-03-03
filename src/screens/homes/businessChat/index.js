import React, {useState, useCallback, useEffect} from 'react';
import {
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
  ImageBackground,
  TextInput,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {GiftedChat, InputToolbar, Bubble} from 'react-native-gifted-chat';
import {HomeHeader} from '../../../components';
import {Themes, Images} from './../../../constants';
import {Icon} from 'native-base';

const BusinessChat = props => {
  const {navigation} = props;
  const [msg, setMsg] = useState({
    _id: 1,
    text: 'Hello developer',
    createdAt: new Date(),
    user: {
      _id: 2,
      name: 'React Native',
      avatar: 'https://placeimg.com/140/140/any',
    },
  });

  const [messages, setMessages] = useState([]);

  useEffect(() => {
    setMessages([
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

  //   const onSend = useCallback((messages = []) => {
  //     setMessages(previousMessages =>
  //       GiftedChat.append(previousMessages, messages),
  //     );
  //   }, []);

  const onSend = () => {
    setMessages(previousMessages => GiftedChat.append(previousMessages, msg));
  };

  // const customBubble = props => {
  //   const {currentMessage} = props;
  //   console.log(props.currentMessage?.user?._id);
  //   return (
  //     <View
  //       style={{
  //         width: '90%',

  //         alignItems: 'flex-end',
  //       }}>
  //       <View
  //         style={{
  //           minHeight: 40,
  //           width: '50%',
  //           backgroundColor:
  //             currentMessage?.user?._id === 2 ? '#F54F84' : '#4996D6',
  //           borderRadius: 50,
  //           flexDirection: 'row',
  //           //   justifyContent:
  //           //     currentMessage?.user?._id === 1 ? 'flex-end' : 'flex-start',
  //           // alignSelf: currentMessage?.user?._id === 1 ? 'center' : 'flex-end',

  //           alignItems: 'center',
  //           paddingHorizontal: 10,
  //         }}>
  //         <Text style={{color: '#fff'}}>{currentMessage.text}</Text>
  //         <View style={{width: 40, aspectRatio: 1}}>
  //           <Image source={currentMessage.user.avatar} />
  //         </View>
  //       </View>
  //     </View>
  //   );
  // };
  const customBubble1 = props => {
    const {currentMessage} = props;
    console.log(props.currentMessage?.user?._id);
    return (
      <Bubble
        {...props}
        textStyle={{
          right: {
            color: '#FFFFFF',
          },
        }}
        wrapperStyle={{
          left: {
            backgroundColor: '#4996D6',
          },
          right: {
            backgroundColor: '#F54F84',
          },
        }}
      />
    );
  };

  const customInput = props => {
    console.log(props.messages);
    return (
      <InputToolbar
        containerStyle={{
          width: '100%',
          alignSelf: 'center',
          justifyContent: 'center',
          alignItems: 'center',
        }}
        {...props}
        renderComposer={() => {
          return (
            <View
              style={{
                width: '90%',
                alignSelf: 'center',
                height: 46,
                backgroundColor: '#B9B3B333',
                borderRadius: 30,
                //   position: 'absolute',
                //   bottom: 10,
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              <View
                style={{
                  width: '10%',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <Image
                  source={Images.Pictures.smile2}
                  style={{width: 25.33, height: 25.33}}
                />
              </View>

              <TextInput
                onChangeText={text => setMsg({...msg, text: text})}
                placeholder="Type Here....."
                style={{
                  width: '70%',
                  height: 45,
                }}></TextInput>
              <TouchableOpacity
                activeOpacity={0.7}
                onPress={onSend}
                style={{
                  width: '15%',
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'space-evenly',
                }}>
                <Icon
                  name="send"
                  type="FontAwesome"
                  style={{fontSize: 21, color: '#F54F84'}}
                />
              </TouchableOpacity>
            </View>
          );
        }}
      />
      //   <InputToolbar
      //     {...props}
      //     containerStyle={{
      //       backgroundColor: '#F9F9F9',
      //       borderRadius: 50,
      //       height: 45,
      //       justifyContent: 'center',
      //       alignItems: 'center',
      //       paddingHorizontal: 10,
      //     }}
      //   />
    );
  };

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: 'white'}}>
      <StatusBar backgroundColor={'white'} barStyle="dark-content" />
      <ScrollView
        keyboardShouldPersistTaps="handled"
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{flexGrow: 1}}>
        <HomeHeader navigation={props.navigation} home />

        <GiftedChat
          renderBubble={props => customBubble1(props)}
          renderInputToolbar={props => customInput(props)}
          placeholder="Type Here"
          user={{_id: 1, name: 'gullu'}}
          messages={messages}
          //   onSend={messages => onSend(messages)}
          //   user={{
          //     _id: 1 || 2,
          //   }}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

export default BusinessChat;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
  },
  mainContainer: {
    width: '90%',
    height: '100%',
    alignSelf: 'center',
    paddingBottom: 50,
  },
});
