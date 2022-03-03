import React, {useState} from 'react';
import {
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
  ImageBackground,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import LinearGradient from 'react-native-linear-gradient';
import Toast from 'react-native-toast-message';
import {
  FormInput,
  AppButton,
  CheckBox,
  Header,
  HomeHeader,
  SearchBar,
} from '../../../components';
import {Themes, Images} from './../../../constants';
import {Icon} from 'native-base';

const Blogs = props => {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: 'white',
      }}>
      <StatusBar backgroundColor={'white'} barStyle="dark-content" />

      <View style={styles.container}>
        <HomeHeader setting left text={'Discover'} />
        <View style={styles.mainContainer}>
          <ScrollView
            keyboardShouldPersistTaps="handled"
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{flexGrow: 1}}>
            <View style={styles.boxImage}>
              <ImageBackground
                source={Images.Backgrounds.mainBox}
                style={{
                  width: '100%',
                  height: '100%',
                }}>
                <View style={styles.boxIconMain}>
                  <TouchableOpacity
                    style={styles.boxIconBtn}
                    activeOpacity={0.9}>
                    <Image
                      source={Images.Backgrounds.boxShare}
                      style={{width: 23.9, height: 27.36}}
                    />
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={styles.boxIconBtn}
                    activeOpacity={0.9}>
                    <Image
                      source={Images.Backgrounds.boxLock}
                      style={{width: 23.9, height: 27.36}}
                    />
                  </TouchableOpacity>
                </View>
                <View style={styles.boxTextView}>
                  <Text style={styles.boxText}>
                    Lorem ipsum dolor sit amet, consetetur Sadipscing.
                  </Text>
                </View>
                <View style={styles.profileview}>
                  <View style={styles.profileImg}>
                    <Image
                      source={Images.Backgrounds.profileIcon}
                      style={{width: '100%', height: '100%', borderRadius: 100}}
                    />
                  </View>
                  <Text style={{fontSize: 12, color: 'white', paddingLeft: 5}}>
                    Martha Dorthy
                  </Text>
                </View>
              </ImageBackground>
            </View>
            <View style={styles.textBody}>
              <View
                style={{
                  transform: [{rotate: '224.5deg'}, {rotateZ: '0.785398rad'}],
                  width: '100%',
                  justifyContent: 'space-between',
                  height: 32,
                  position: 'absolute',
                  top: 320,
                  marginLeft: -160,
                  flexDirection: 'row',
                }}>
                <View style={{marginHorizontal: 20}}>
                  <Text
                    style={{
                      fontSize: 30,
                    }}>
                    Conclusion
                  </Text>
                </View>
                <View style={{marginHorizontal: 20}}>
                  <Text
                    style={{
                      fontSize: 30,
                    }}>
                    About
                  </Text>
                </View>
                <View style={{marginHorizontal: 20}}>
                  <Text
                    style={{
                      color: 'black',
                      fontSize: 30,
                    }}>
                    Introduction
                  </Text>
                </View>
              </View>

              <View style={{marginLeft: 50, marginTop: 20}}>
                <Text style={{color: 'black'}}>
                  Luyam erat, sed diam voluptua. At vero eos et accusam et justo
                  duo dolores et ea rebum. Stet clita kasd gubergren, no sea
                  takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum
                  dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
                  eirmod tempor invidunt ut labore et dolore magna aliquyam
                  erat, sed diam voluptua. At vero eos et accusam et justo duo
                  dolores et ea rebum. Stet clita kasd gubergren, no sea
                  takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum
                  dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
                  eirmod tempor invidunt ut labore et dolore magna aliquyam
                  erat, sed diam voluptua. At vero eos et accusam et justo duo
                  dolores et ea rebum. Stet clita kasd gubergren, no sea
                  takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum
                  dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
                  eirmod tempor invidunt ut labore et dolore magna aliquyam
                  erat, sed diam voluptua. At vero eos et accusam et justo duo
                  dolores et ea rebum. Stet clita kasd gubergren, no sea
                  takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum
                  dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
                  eirmod tempor invidunt ut labore et dolore magna aliquyam
                  erat, sed diam voluptua. At vero eos et accusam et justo duo
                  dolores et ea rebum. Stet clita kasd gubergren,
                </Text>
              </View>
            </View>
          </ScrollView>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Blogs;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
  },
  mainContainer: {
    width: '90%',
    height: '100%',
    alignSelf: 'center',
    marginTop: 10,
    paddingBottom: 100,
  },
  boxImage: {
    width: '100%',
    height: 383,
    borderRadius: 20,
    overflow: 'hidden',
  },
  boxIconBtn: {
    width: 50,
    height: 50,
    borderRadius: 50,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 2,
  },
  boxIconMain: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    padding: 10,
  },
  boxTextView: {
    width: '100%',
    height: 89,
    position: 'absolute',
    bottom: 40,
  },
  boxText: {
    padding: 5,
    width: '100%',
    height: '100%',
    fontSize: 27,
    color: 'white',
  },
  profileview: {
    width: '100%',
    flexDirection: 'row',
    position: 'absolute',
    bottom: 20,
    left: 15,
    alignItems: 'center',
  },
  profileImg: {
    width: 31,
    height: 30,
    borderRadius: 30,
    backgroundColor: 'white',
  },
  textBody: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    width: '100%',
    height: '100%',
  },
});
