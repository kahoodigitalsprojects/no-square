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
import React, {useState} from 'react';
import {Icon, Item} from 'native-base';
import {Themes, Images} from '../../../constants';
import {
  HomeHeader,
  FormInput,
  AppButton,
  CustomPopup,
} from '../../../components';
import LinearGradient from 'react-native-linear-gradient';

const DeleteAccountConfirmation = props => {
  const {navigation} = props;
  const [userInfo, setUserInfo] = useState({
    email: '',
    password: '',
  });

  const [error, setError] = useState();

  const [state, setState] = useState({
    focus: false,
    secureText: true,
  });
  const [visible, setVisible] = useState(false);
  return (
    <>
      <SafeAreaView style={styles.screenContainer}>
        <StatusBar backgroundColor={'white'} barStyle="dark-content" />
        <View style={{marginTop: 20}}>
          <HomeHeader
            navigation={props.navigation}
            setting
            right
            settingIconProps={() => props.navigation.goBack()}
          />
        </View>
        <ScrollView
          keyboardShouldPersistTaps="handled"
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{flexGrow: 1}}>
          <View style={styles.body}>
            <View style={{width: '100%'}}>
              <Icon
                name="key-outline"
                type="Ionicons"
                style={{alignSelf: 'center', fontSize: 100, color: '#F54D83'}}
              />
            </View>

            <View style={{width: '100%', alignItems: 'center', marginTop: 20}}>
              <Text style={styles.textHead}>Delete Account</Text>
            </View>

            <View style={styles.text}>
              <Text style={{fontSize: 22, color: '#000000'}}>
                Enter your password
              </Text>
            </View>
            <View style={{marginVertical: 20}}>
              <Text
                style={{
                  alignSelf: 'flex-start',
                  fontSize: 18,
                  color: Themes.textColors.blackText,
                }}>
                Password
              </Text>
              <View
                style={{
                  marginVertical: 8,
                  borderColor: state.focus === 'password' ? '#F54F84' : 'grey',
                  borderWidth: state.focus === 'password' ? 1 : 0.5,
                  borderRadius: 8,
                }}>
                <FormInput
                  borderW={1}
                  borderC={'#F52667'}
                  value={userInfo.password}
                  onChangeText={value =>
                    setUserInfo({...userInfo, password: value})
                  }
                  iconL
                  secureText={state.secureText}
                  iconLName="lock"
                  iconLType="Feather"
                  iconR
                  iconRName={state.secureText ? 'eye-with-line' : 'eye'}
                  iconRType="Entypo"
                  onPressR={() =>
                    setState({...state, secureText: !state.secureText})
                  }
                  placeHolder="************"
                  onFocus={() => setState({...state, focus: 'password'})}
                  onBlur={() => setState({...state, focus: ''})}
                />
              </View>
            </View>
            <LinearGradient
              colors={['#F52667', '#F54F84']}
              style={styles.loginBtn}>
              <AppButton
                label="Confirm"
                onPress={() => {
                  setVisible(true);
                }}
              />
            </LinearGradient>
          </View>
        </ScrollView>
      </SafeAreaView>

      <CustomPopup
        stateOverlay={visible}
        setstateOverlay={() => setVisible(false)}
        modelHeight={216}
        accountDelete
        modelWidth={250}
        border_radius={15}
        onDelete={() => {
          props.navigation.replace('Auth', {screen: 'mainAuth'});
        }}
        OBonPress={() => {
          setVisible(false);
          props.navigation.navigate('Statics', {screen: 'deleteAccount'});
        }}
      />
    </>
  );
};

export default DeleteAccountConfirmation;

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    backgroundColor: 'white',
  },
  body: {
    width: '90%',
    height: '100%',
    alignSelf: 'center',
    paddingBottom: 50,
    backgroundColor: 'white',

    alignItems: 'center',
  },
  textHead: {
    marginTop: 20,
    fontSize: 26,
    fontWeight: 'bold',
    color: '#000000',
  },
  text: {
    marginTop: 20,
    width: '100%',
    alignItems: 'center',
  },
  loginBtn: {
    width: '100%',
    height: 56,
    borderRadius: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
