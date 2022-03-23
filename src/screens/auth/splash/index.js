import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import {
  ImageBackground,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Themes, Images} from './../../../constants';

const Splash = ({navigation}) => {
  // useEffect(() => {
  //   setTimeout(() => {
  //     navigation.replace('mainAuth');
  //   }, 1500);
  // }, []);

  return (
    <ScrollView
      keyboardShouldPersistTaps="handled"
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{flexGrow: 1}}>
      <ImageBackground
        resizeMode="stretch"
        source={Images.Backgrounds.splashBg}
        style={styles.screenContainer}>
        <StatusBar backgroundColor={'transparent'} translucent={true} />
        <View
          style={{
            width: '100%',
            height: '100%',
            justifyContent: 'center',
          }}>
          <View style={styles.textView}>
            <Text style={styles.textline1}>
              Join the
              <Text style={styles.textline1Part2}> Finesse</Text>
            </Text>
            <Text style={styles.textline2}>Team</Text>
          </View>
          <View style={styles.footer}>
            <TouchableOpacity
              activeOpacity={0.7}
              onPress={() => {
                navigation.navigate('splash2');
              }}>
              <LinearGradient
                colors={['#F54F84', '#F52667']}
                style={styles.footerBtn}>
                <Text style={styles.btnText}>Continue...</Text>
              </LinearGradient>
            </TouchableOpacity>

            <View style={styles.sliderView}>
              <LinearGradient
                colors={['#6BB6E3', '#009DFF']}
                style={styles.linearBtn}></LinearGradient>

              <View style={styles.sliderBtn}></View>

              <View style={styles.sliderBtn}></View>
            </View>
          </View>
        </View>
      </ImageBackground>
    </ScrollView>
  );
};

export default Splash;

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  footer: {
    width: '100%',
    height: 120,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 100,
  },
  footerBtn: {
    width: 229,
    height: 66,
    borderRadius: 40,
    backgroundColor: 'pink',
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnText: {
    fontSize: 18,
    fontWeight: '700',
    color: Themes.textColors.whiteText,
  },
  sliderView: {
    flexDirection: 'row',
    height: 30,
    width: 55,
    marginTop: 10,

    alignItems: 'center',
    justifyContent: 'space-between',
  },
  sliderBtn: {
    width: 11,
    height: 10,
    backgroundColor: '#ABB2B7',
    borderRadius: 5,
  },
  linearBtn: {
    width: 23,
    height: 10,
    borderRadius: 4,
  },
  textView: {
    width: '100%',
    height: 120,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 250,
  },
  textline1: {
    fontSize: 30,
    color: Themes.backgrounds.blackBG,
    fontWeight: 'bold',
  },
  textline1Part2: {fontSize: 30, color: Themes.textColors.textPink},
  textline2: {
    fontSize: 30,
    color: Themes.backgrounds.blackBG,
    fontWeight: 'bold',
  },
});
