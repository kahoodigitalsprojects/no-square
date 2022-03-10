import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  StatusBar,
  Image,
  TouchableOpacity,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import Video from 'react-native-video';
import {Images} from '../../../constants/images';
import {Icon} from 'native-base';
import * as Progress from 'react-native-progress';
import {useIsFocused} from '@react-navigation/native';

const Status = props => {
  const isFocused = useIsFocused();
  const [progress, setProgress] = useState(0);
  // const progress = useProgress();

  useEffect(() => {
    if (isFocused) {
      setProgress(0);
    }
  }, [isFocused]);

  useEffect(() => {
    if (progress < 1.0) {
      setTimeout(() => {
        setProgress(progress => progress + 0.01);
      }, 100);
    } else {
      props.navigation.goBack();
    }
  }, [progress]);

  // if (progress >= 1) {
  //   props.navigation.goBack();
  // }

  return (
    <>
      <StatusBar
        backgroundColor={'transparent'}
        translucent={true}
        barStyle="light-content"
      />
      <SafeAreaView style={{flex: 1, backgroundColor: 'black'}}>
        <Video
          source={require('../../../assets/videos/video.mp4')}
          style={styles.video}
          muted={true}
          repeat={true}
          resizeMode={'cover'}
          rate={1.0}
          ignoreSilentSwitch={'obey'}
        />

        <View style={styles.statusHeader}>
          <TouchableOpacity
            activeOpacity={0.7}
            onPress={() => props.navigation.navigate('myProfile')}
            style={{width: 50, aspectRatio: 1}}>
            <Image
              source={Images.Backgrounds.chatProfile1}
              style={{width: '100%', height: '100%'}}
              resizeMode="contain"
            />
          </TouchableOpacity>
          <TouchableOpacity
            activeOpacity={0.7}
            onPress={() => props.navigation.navigate('home')}
            style={{
              width: 30,
              height: 30,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Icon name="cross" type="Entypo" style={{color: '#fff'}} />
          </TouchableOpacity>
        </View>

        <Progress.Bar
          color="#F54F84"
          progress={progress}
          width={Dimensions.get('window').width}
          style={{
            width: '100%',
            backgroundColor: 'white',
            height: 4,
            borderWidth: 0,
          }}
        />
      </SafeAreaView>
    </>
  );
};

export default Status;

const styles = StyleSheet.create({
  video: {
    height: Dimensions.get('window').height,
    position: 'absolute',
    top: 0,
    left: 0,
    alignItems: 'stretch',
    bottom: 0,
    right: 0,
  },

  statusHeader: {
    height: 70,
    width: '90%',
    alignSelf: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});
