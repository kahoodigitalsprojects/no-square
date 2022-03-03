import React, {useState} from 'react';
import {
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {HomeHeader} from '../../../components';
import {Themes, Images} from './../../../constants';

const FitnessGame = props => {
  const data = [
    {
      img1: Images.Backgrounds.box1,
      img2: Images.Backgrounds.box2,
      nav1: 'blogs',
      nav2: 'blogs',
    },
    {
      img1: Images.Backgrounds.box3,
      img2: Images.Backgrounds.box4,
      nav1: 'blogs',
      nav2: 'blogs',
    },

    {
      img1: Images.Backgrounds.box5,
      img2: Images.Backgrounds.box6,
      nav1: 'blogs',
      nav2: 'blogs',
    },
  ];
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: 'white',
      }}>
      <StatusBar backgroundColor={'white'} barStyle="dark-content" />

      <View style={styles.container}>
        <HomeHeader home navigation={props.navigation} />
        <View style={styles.heading}>
          <Text style={{color: '#191919B8', fontSize: 20, fontWeight: 'bold'}}>
            Finesse Game
          </Text>
        </View>
        <View style={styles.mainContainer}>
          <ScrollView
            keyboardShouldPersistTaps="handled"
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{flexGrow: 1}}>
            <View style={{width: '100%'}}>
              {data.map((item, i) => {
                return (
                  <View
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                      marginTop: 10,
                    }}>
                    <TouchableOpacity
                      style={styles.box1}
                      activeOpacity={0.9}
                      onPress={() => {
                        props.navigation.navigate(item.nav1);
                      }}>
                      <Image
                        source={item.img1}
                        style={{width: '100%', height: 171, borderRadius: 20}}
                      />
                      <Text style={styles.boxText}>
                        Lorem ipsum dolor sit amet, consetetur sadipscing elitr
                      </Text>

                      <View style={styles.boxFooter}>
                        <Text style={{color: '#B9B4B4', fontSize: 10}}>
                          24 June, 2021
                        </Text>
                        <Text style={{color: '#B9B4B4', fontSize: 10}}>
                          12 Mins Read
                        </Text>
                      </View>
                    </TouchableOpacity>
                    <TouchableOpacity
                      style={styles.box2}
                      activeOpacity={0.9}
                      onPress={() => {
                        props.navigation.navigate(item.nav2);
                      }}>
                      <Image
                        resizeMode="stretch"
                        source={item.img2}
                        style={{width: '100%', height: 171, borderRadius: 20}}
                      />
                      <Text style={styles.boxText}>
                        Lorem ipsum dolor sit amet, consetetur sadipscing elitr
                      </Text>
                      <View
                        style={{
                          flexDirection: 'row',
                          alignSelf: 'center',
                          position: 'absolute',
                          bottom: 10,
                          justifyContent: 'space-between',
                          width: '85%',
                        }}>
                        <Text style={{color: '#B9B4B4', fontSize: 10}}>
                          24 June, 2021
                        </Text>
                        <Text style={{color: '#B9B4B4', fontSize: 10}}>
                          12 Mins Read
                        </Text>
                      </View>
                    </TouchableOpacity>
                  </View>
                );
              })}
            </View>
          </ScrollView>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default FitnessGame;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
  },
  mainContainer: {
    width: '90%',
    height: '100%',
    alignSelf: 'center',
    paddingBottom: 150,
  },
  heading: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    paddingBottom: 20,
  },

  box1: {
    width: '45%',
    backgroundColor: '#F9F8F8',
    borderRadius: 20,
    margin: 5,
    height: 225,
  },
  box2: {
    borderRadius: 20,
    width: '45%',
    height: 262,
    backgroundColor: '#F9F8F8',
    height: 225,
    margin: 5,
  },
  boxText: {
    fontSize: 10,
    color: '#5D5959',
    alignSelf: 'center',
    fontWeight: 'bold',
    marginTop: 5,
  },
  boxFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '85%',
    alignSelf: 'center',
    marginTop: 5,
  },
});
