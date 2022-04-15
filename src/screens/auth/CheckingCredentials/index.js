import {
  ActivityIndicator,
  Image,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React, {useEffect} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Themes, Images} from '../../../constants';
import {AppText} from '../../../components';

const CheckingCredentials = props => {
  useEffect(() => {
    setTimeout(() => {
      props.navigation.replace('MyDrawer', {screen: 'home'});
    }, 1000);
  }, []);

  return (
    <SafeAreaView edges={['top']} style={styles.container}>
      <StatusBar
        backgroundColor={Themes.backgrounds.primaryBG}
        barStyle="light-content"
      />
      <View style={styles.logoContainer}>
        <View style={styles.logo}>
          <Image
            source={Images.Pictures.authLogo}
            style={{width: '100%', height: '100%'}}
          />
        </View>

        <View
          style={{
            width: '100%',
            justifyContent: 'center',
            alignItems: 'center',
            paddingTop: 10,
          }}>
          <Text style={{color: '#fff', textAlign: 'center', paddingBottom: 5}}>
            CheckingCredentials
          </Text>
          <ActivityIndicator size={'small'} color="#fff" />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default CheckingCredentials;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Themes.backgrounds.primaryBG,
    justifyContent: 'center',
    alignItems: 'center',
  },

  logo: {
    width: 140,
    aspectRatio: 1,
  },

  logoContainer: {
    width: '90%',
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
