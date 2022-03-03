import React, {useState, useEffect} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Dimensions,
} from 'react-native';
import {Images} from '../../constants';
import {Icon} from 'native-base';
import {Image} from 'react-native';
import {TextInput} from 'react-native';
import {ScrollView} from 'react-native';
import AudioRecorderPlayer from 'react-native-audio-recorder-player';

const audio = '';

const Recording = () => {
  let [scrollViewRef, setRef] = useState({});
  const [orientation, setOrientation] = useState(true);
  const [messages, setMessages] = useState([{audio: ''}]);
  const [message, setMessage] = useState('');
  const [isPlay, setIsPlay] = useState(false);

  const isPortrait = () => {
    const dim = Dimensions.get('screen');
    return dim.height >= dim.width;
  };

  useEffect(() => {
    Dimensions.addEventListener('change', () => {
      setOrientation(isPortrait());
    });
  }, [Dimensions]);

  // useEffect(async () => {
  //   if (Platform.OS === 'android') {
  //     try {
  //       const grants = await PermissionsAndroid.requestMultiple([
  //         PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
  //         PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE,
  //         PermissionsAndroid.PERMISSIONS.RECORD_AUDIO,
  //       ]);

  //       console.log('write external stroage', grants);

  //       if (
  //         grants['android.permission.WRITE_EXTERNAL_STORAGE'] ===
  //           PermissionsAndroid.RESULTS.GRANTED &&
  //         grants['android.permission.READ_EXTERNAL_STORAGE'] ===
  //           PermissionsAndroid.RESULTS.GRANTED &&
  //         grants['android.permission.RECORD_AUDIO'] ===
  //           PermissionsAndroid.RESULTS.GRANTED
  //       ) {
  //         console.log('Permissions granted');
  //       } else {
  //         console.log('All required permissions not granted');
  //         return;
  //       }
  //     } catch (err) {
  //       console.warn(err);
  //       return;
  //     }
  //   }
  // }, []);

  const audioRecorderPlayer = new AudioRecorderPlayer();

  const onStartRecord = async () => {
    await audioRecorderPlayer.startRecorder();
    audioRecorderPlayer.addRecordBackListener(e => {
      console.log('Recording . . . ', e.currentPosition);
      return;
    });
  };

  const onStopRecord = async () => {
    audio = await audioRecorderPlayer.stopRecorder();
    audio = audio.replace('.mp4', '.mp3');
    console.log('audio', audio);
    audioRecorderPlayer.removeRecordBackListener();
  };

  //   onStartPlay = async () => {
  //     console.log('onStartPlay');
  //     const msg = await audioRecorderPlayer.startPlayer();
  //     console.log(msg);
  //     audioRecorderPlayer.addPlayBackListener(e => {
  //       setState({
  //         currentPositionSec: e.currentPosition,
  //         currentDurationSec: e.duration,
  //         playTime: audioRecorderPlayer.mmssss(Math.floor(e.currentPosition)),
  //         duration: audioRecorderPlayer.mmssss(Math.floor(e.duration)),
  //       });
  //       return;
  //     });
  //   };

  //   onPausePlay = async () => {
  //     await audioRecorderPlayer.pausePlayer();
  //   };

  //   onStopPlay = async () => {
  //     console.log('onStopPlay');
  //     audioRecorderPlayer.stopPlayer();
  //     audioRecorderPlayer.removePlayBackListener();
  //   };

  const onPlay = async () => {
    // setIsPlay(true);
    const msg = await audioRecorderPlayer.startPlayer();
    console.log(msg);
    audioRecorderPlayer.play(audio.path);
    // setIsPlay(false);
  };

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: 'white'}}>
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
            <TouchableOpacity onPress={() => props.navigation.goBack()}>
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
                source={Images.Backgrounds.chatProfile1}
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
                    {/* {isPlay ? (
                      <Icon
                        onPress={onPlay}
                        name="pause"
                        type="Ionicons"
                        style={{color: 'white'}}
                      />
                    ) : ( */}
                    <Icon
                      onPress={onPlay}
                      name="controller-play"
                      type="Entypo"
                      style={{color: 'white'}}
                    />
                    {/* )} */}
                    {/* <Text style={{color: '#fff'}}> {message?.text} </Text> */}
                  </View>
                </View>
              );
            })}
          </ScrollView>
        </View>

        <View
          style={{
            width: '90%',
            height: orientation ? '10%' : '15%',
            marginBottom: 5,
            alignSelf: 'center',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}>
          <TouchableOpacity
            onPress={onStopRecord}
            style={{
              width: 40,
              height: 40,
              borderRadius: 100,
              backgroundColor: 'white',
              elevation: 5,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Icon
              name="delete"
              type="MaterialIcons"
              style={{color: '#F54F84'}}
            />
          </TouchableOpacity>
          <TouchableOpacity
            activeOpacity={0.7}
            onPress={onStartRecord}
            style={{
              width: 40,
              height: 40,
              borderRadius: 100,
              backgroundColor: 'white',
              elevation: 5,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Icon
              name="microphone"
              type="Foundation"
              style={{color: '#F54F84'}}
            />
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Recording;

const styles = StyleSheet.create({});
