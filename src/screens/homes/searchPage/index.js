import React, {useEffect, useState} from 'react';
import {
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
  BackHandler,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

import {HomeHeader, SearchBar, TextWithLine} from '../../../components';
import {Themes, Images} from './../../../constants';
import {Icon} from 'native-base';

const SearchPage = props => {
  const [state, setState] = useState({
    active: true,
  });
  const data = [
    {
      name: 'Niki Martin',
    },
    {
      name: 'Martha Jose',
    },
    {
      name: 'Ziouhan Change',
    },
    {
      name: 'Alecia Markus',
    },
    {
      name: 'Anna Martins',
    },
    {
      name: 'Niki Martin',
    },
    {
      name: 'Martha Jose',
    },
  ];

  const backScreen = props?.route?.params?.backScreen;
  useEffect(() => {
    const backAction = () => {
      props.navigation.navigate('MyTabs', {screen: backScreen});
      // } else {
      // props.navigation.goBack();
      // }

      return true;
    };
    let backHandler;
    props.navigation.addListener('focus', () => {
      backHandler = BackHandler.addEventListener(
        'hardwareBackPress',
        backAction,
      );
    });

    props.navigation.addListener('blur', () => {
      if (backHandler) {
        backHandler.remove();
      }
    });
  }, []);
  return (
    <SafeAreaView style={styles.screenContainer}>
      <StatusBar backgroundColor={'white'} barStyle="dark-content" />
      <View style={{marginTop: 30}}>
        <HomeHeader
          settingIconProps={() => {
            props.navigation.navigate('MyTabs', {screen: backScreen});
          }}
          navigation={props.navigation}
          setting
          text={'Search'}
          onPress={() => {
            props.navigation.navigate('MyTabs', {screen: backScreen});
          }}
          left
          right
        />
      </View>
      <SearchBar width={'90%'} edit={true} />
      <ScrollView
        keyboardShouldPersistTaps="handled"
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{flexGrow: 1}}>
        <View style={styles.body}>
          <TextWithLine text={'Recent Search'} left={0} />
          {data.map((item, i) => {
            return (
              <View style={styles.chatBox}>
                <TouchableOpacity
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                  activeOpacity={0.8}>
                  <View style={styles.chatProfile}>
                    <Image
                      source={Images.Backgrounds.chatProfile3}
                      style={{width: '100%', height: '100%'}}
                    />
                  </View>
                  <Text style={styles.profileName}>{item.name}</Text>
                </TouchableOpacity>

                <TouchableOpacity
                  style={{alignItems: 'center', justifyContent: 'center'}}
                  activeOpacity={0.8}>
                  <Image
                    source={Images.Backgrounds.cross}
                    style={{width: 24, height: 24}}
                  />
                </TouchableOpacity>
              </View>
            );
          })}
          <TouchableOpacity
            style={{
              width: 74,
              height: 20,
              alignItems: 'center',
              justifyContent: 'center',
              alignSelf: 'center',
            }}
            activeOpacity={0.7}>
            <Text style={{fontWeight: '600', fontSize: 15, color: '#F54F84'}}>
              See More..
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SearchPage;

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    backgroundColor: 'white',
  },
  body: {
    marginTop: 10,
    width: '90%',
    height: '100%',
    alignSelf: 'center',
    paddingBottom: 40,
  },
  activeRoom: {
    width: '100%',
    flexDirection: 'row',
    marginTop: 10,
    alignSelf: 'center',
    alignItems: 'center',
  },
  activeRoomText: {
    fontSize: 15,
    color: '#211E1F',
    fontWeight: '500',
    alignItems: 'center',
    width: '29%',
  },
  activeLine: {
    width: '71%',
    borderBottomWidth: 1.5,
    borderColor: '#707070',
    alignItems: 'center',
    justifyContent: 'center',
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

    color: '#151515',
    marginLeft: 10,
    fontWeight: '800',
  },
});
