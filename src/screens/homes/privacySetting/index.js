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
import {Switch} from 'react-native-paper';
import React, {useState} from 'react';
import {Icon, Item} from 'native-base';
import {Themes, Images} from './../../../constants';
import {HomeHeader} from '../../../components';
import {Header} from 'react-native-elements';

const privacySetting = props => {
  const [isSwitchOn, setIsSwitchOn] = useState(false);
  const onToggleSwitch = () => setIsSwitchOn(!isSwitchOn);

  return (
    <SafeAreaView style={styles.screenContainer}>
      <StatusBar backgroundColor={'white'} barStyle="dark-content" />

      <View style={{marginTop: 40}}>
        <HomeHeader
          navigation={props.navigation}
          setting
          right
          settingIconProps={() => props.navigation.goBack()}
          text={'Privacy Setting'}
          onPress={'settings'}
        />
      </View>
      <ScrollView
        keyboardShouldPersistTaps="handled"
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{flexGrow: 1}}>
        <View style={styles.body}>
          <View
            style={{
              width: '100%',
              flexDirection: 'row',
              marginTop: 35,
              alignItems: 'center',
              justifyContent: 'space-evenly',
            }}>
            <View>
              <Text style={{fontSize: 18, color: '#323232', fontWeight: '700'}}>
                Profile Privacy
              </Text>
              <Text
                style={{
                  fontSize: 12,
                  color: '#323232',
                  width: 251,
                  height: 36,
                  fontWeight: '700',
                }}>
                After turn on this button your profile become private and just
                yourfriends see your profile.
              </Text>
            </View>
            <Switch
              value={isSwitchOn}
              onValueChange={onToggleSwitch}
              color="#F54F84"
              style={{width: 41, height: 66}}
            />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
export default privacySetting;

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    backgroundColor: 'white',
  },
  body: {
    width: '90%',
    height: '100%',
    alignSelf: 'center',
  },
});
