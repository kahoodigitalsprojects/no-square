import React, {useState} from 'react';
import {
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import LinearGradient from 'react-native-linear-gradient';

import {HomeHeader} from '../../../components';

const DeleteAccount = props => {
  return (
    <SafeAreaView style={styles.screenContainer}>
      <StatusBar backgroundColor={'white'} barStyle="dark-content" />
      <ScrollView
        keyboardShouldPersistTaps="handled"
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{flexGrow: 1}}>
        <View style={{marginTop: 20}}>
          <HomeHeader
            navigation={props.navigation}
            setting
            text={'Delete Account'}
            right
            settingIconProps={() => props.navigation.goBack()}
          />
        </View>

        <View style={styles.mainBody}>
          <Text style={styles.textHead}>Permanently Delete Account</Text>
          <View style={styles.text}>
            <Text style={{fontSize: 14, color: '#4B4B4B'}}>
              You will be logged out and your account will be deleted. You will
              have to sign up again to use NoSquare in Future. Your account,
              activities, posts and other related things will be deleted
              permanently.
            </Text>
          </View>

          <TouchableOpacity
            style={styles.dltBtn}
            onPress={() => {
              props.navigation.navigate('Statics', {
                screen: 'deleteAccountConfirmation',
              });
            }}>
            <Text style={styles.btnText}>Delete Account</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default DeleteAccount;

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    backgroundColor: 'white',
  },
  mainBody: {
    width: '80%',
    height: '100%',
    alignSelf: 'center',
    paddingBottom: 30,
    marginTop: 20,
  },
  textHead: {
    height: 24,
    fontSize: 17,
    marginTop: 20,
    fontWeight: 'bold',
    color: '#2A2A2A',
  },
  text: {
    width: '100%',
    height: 100,
    justifyContent: 'center',
  },
  dltBtn: {
    width: '50%',
    height: 51,
    borderWidth: 1.5,
    borderColor: '#BC2323',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    marginTop: 10,
  },
  btnText: {fontSize: 14, color: '#BE0909'},
});
