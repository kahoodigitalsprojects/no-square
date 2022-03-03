import React from 'react';
import {useEffect} from 'react';
import LinearGradient from 'react-native-linear-gradient';
import {
  ImageBackground,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Themes, Images} from './../../../constants';
import {AppButton} from '../../../components';

const MainAuth = props => {
  const {navigation} = props;
  return (
    <>
      <ImageBackground
        source={Images.Backgrounds.authBackground}
        style={styles.screenContainer}>
        <StatusBar backgroundColor={'transparent'} translucent={true} />
        <ScrollView
          keyboardShouldPersistTaps="handled"
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{flexGrow: 1}}>
          <View style={styles.screenBody}>
            <View
              style={{
                marginTop: 60,
                width: '100%',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Image
                source={Images.Pictures.authLogo}
                style={{width: 153, height: 151}}
              />
              <Text
                style={{
                  fontSize: 49,
                  color: Themes.textColors.whiteText,
                  marginTop: 20,
                }}>
                NoSquare
              </Text>
              <View style={{width: 284, height: 68, marginTop: 20}}>
                <Text
                  style={{fontSize: 15, color: Themes.textColors.whiteText}}>
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                  diam nonumy eirmod tempor invidunt ut labore et dolore
                </Text>
              </View>
            </View>
            <View style={styles.authButtonContainer}>
              <LinearGradient
                colors={['#F54F84', '#F52667']}
                style={styles.authButton}>
                <AppButton
                  buttonStyle={styles.footerBtn}
                  label="Login"
                  onPress={() => navigation.navigate('login')}
                />
              </LinearGradient>
              <View style={styles.authButton}>
                <AppButton
                  buttonStyle={styles.footerBtn2}
                  label="Sign up"
                  onPress={() => navigation.navigate('signup')}
                />
              </View>
            </View>
          </View>
        </ScrollView>
      </ImageBackground>
    </>
  );
};

export default MainAuth;

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
  },

  screenBody: {
    width: '100%',
    height: '100%',
    alignSelf: 'center',
    position: 'relative',
  },

  authButtonContainer: {
    width: '100%',
    height: 150,

    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 120,
    marginBottom: 20,
  },

  authButton: {
    width: 223,
    height: 66,
    borderRadius: 40,
  },
  footerBtn: {
    width: 229,
    height: 66,
    borderRadius: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  footerBtn2: {
    borderWidth: 1.5,
    borderColor: 'white',
    width: 229,
    height: 66,
    borderRadius: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnText: {
    fontSize: 18,
    fontWeight: '700',
    color: Themes.textColors.whiteText,
  },
});
