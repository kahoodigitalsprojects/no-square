import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {
  ImageBackground,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  Switch,
} from 'react-native';
import {HomeHeader, TextWithLine} from '../../../components';
import {View, Text} from 'react-native';
import {Images} from '../../../constants';
import {Icon} from 'native-base';
import {useState} from 'react';

const SwitchComponent = ({iconN, iconT, text, value, onSwitch}) => {
  return (
    <View
      style={{
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <View
        style={{
          width: '80%',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'flex-start',
        }}>
        <View
          style={{width: 30, justifyContent: 'center', alignItems: 'center'}}>
          <Icon
            name={iconN}
            type={iconT}
            style={{color: '#F54F84', fontSize: 25}}
          />
        </View>

        <View style={{paddingLeft: 6}}>
          <Text style={{color: '#323232', fontSize: 15}}>{text}</Text>
        </View>
      </View>
      <View style={{width: '20%'}}>
        <Switch
          value={value}
          onChange={onSwitch}
          trackColor={{
            true: '#F54F84',
            false: '#C2C2C2',
          }}
          thumbColor={'#FFFFFF'}
          size="lg"
        />
      </View>
    </View>
  );
};

const NotificationSettings = props => {
  const [state, setState] = useState({
    appNotification: true,
    email: false,
    device: false,
  });

  return (
    <>
      <SafeAreaView style={styles.container}>
        {/* ADD Header HERE */}

        <View style={{marginBottom: 20}}>
          <View style={{marginTop: 20}}>
            <HomeHeader
              settingIconProps={() => props.navigation.goBack()}
              setting
              right
              paddingRight
              text={'Notification Privacy'}
              textColor={'#191919B8'}
              fontSize={20}
            />
          </View>
        </View>

        <ScrollView
          contentContainerStyle={{flexGrow: 1}}
          showsVerticalScrollIndicator={false}>
          <View style={styles.screenBody}>
            <View style={{width: '100%', alignSelf: 'flex-start'}}>
              <Text
                style={{color: '#191919B8', fontSize: 20, fontWeight: 'bold'}}>
                Where you receive these {'\n'} notifications
              </Text>
            </View>
            <View style={{width: '100%', paddingTop: 30}}>
              <View style={{marginVertical: 10}}>
                <SwitchComponent
                  iconN="email-outline"
                  iconT="MaterialCommunityIcons"
                  text="In App Notifications"
                  value={state.appNotification}
                  onSwitch={() =>
                    setState({
                      ...state,
                      appNotification: !state.appNotification,
                    })
                  }
                />
              </View>
              <View style={{marginVertical: 10}}>
                <SwitchComponent
                  iconN="email-outline"
                  iconT="MaterialCommunityIcons"
                  text="Email"
                  value={state.email}
                  onSwitch={() =>
                    setState({
                      ...state,
                      email: !state.email,
                    })
                  }
                />
              </View>
              <View style={{marginVertical: 10}}>
                <SwitchComponent
                  iconN="mobile-alt"
                  iconT="FontAwesome5"
                  text="Device"
                  value={state.device}
                  onSwitch={() =>
                    setState({
                      ...state,
                      device: !state.device,
                    })
                  }
                />
              </View>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

export default NotificationSettings;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },

  screenBody: {
    width: '90%',
    alignSelf: 'center',
    paddingBottom: 10,
  },

  headerText: {
    width: '100%',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 10,
  },

  headText: {
    color: '#191919B8',
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },

  postContainer: {
    width: '100%',
    height: 85,
    // backgroundColor: '#F5F5F5',
    marginVertical: 10,
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  postDetail: {
    width: '80%',
    height: '100%',
    justifyContent: 'flex-start',
    alignItems: 'center',
    flexDirection: 'row',
  },

  deleteContainer: {
    height: '100%',
    width: '20%',
    alignItems: 'flex-end',
    justifyContent: 'center',
    paddingRight: 10,
  },

  deleteButton: {
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },

  postImage: {
    width: 99,
    height: 85,
    backgroundColor: 'pink',
    borderRadius: 10,
  },

  postLength: {
    position: 'absolute',
    bottom: 0,
    width: '60%',
    alignSelf: 'center',
    height: 20,
    backgroundColor: '#000',
    justifyContent: 'center',
    alignItems: 'center',
  },

  postInfo: {
    height: '80%',
    paddingLeft: 15,
    justifyContent: 'center',
  },

  postLiteText: {color: '#000', fontSize: 12, fontWeight: '300'},
});
