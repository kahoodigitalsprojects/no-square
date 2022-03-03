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
import {
  FormInput,
  AppButton,
  CheckBox,
  Header,
  HomeHeader,
  SearchBar,
  Corousel,
} from '../../../components';
import {Themes, Images} from './../../../constants';
import {Icon, Item} from 'native-base';

const Search = props => {
  return (
    <SafeAreaView style={styles.screenContainer}>
      <StatusBar backgroundColor={'transparent'} translucent={true} />
      <ScrollView
        keyboardShouldPersistTaps="handled"
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{flexGrow: 1}}>
        <HomeHeader navigation={props.navigation} home notify />
        <SearchBar />
        <View style={styles.mainBody}>
          <View style={styles.corouselStyle}>
            <Corousel />
          </View>
          <View style={styles.elevation1}>
            <View style={{alignSelf: 'center', marginTop: 10}}>
              <Text style={styles.elevationHeadText}>Informations</Text>
            </View>
            <View style={styles.elevationContent}>
              <View style={{flexDirection: 'row'}}>
                <Text style={styles.elevationHeadTextName}>Name</Text>
                <Text style={styles.elevationHeadTextNameTitle}>Jennie</Text>
              </View>
              <View style={{flexDirection: 'row'}}>
                <Text style={styles.elevationHeadTextName}>Country </Text>
                <Text style={styles.elevationHeadTextNameTitle}>
                  United States
                </Text>
              </View>
            </View>
          </View>

          <View style={styles.elevation2}>
            <View style={{alignSelf: 'center', marginTop: 10}}>
              <Text style={styles.elevationHeadText}>About Me</Text>
            </View>
            <View style={styles.elevationContent}>
              <View style={{flexDirection: 'row'}}>
                <Text style={styles.elevationHeadTextName}>Name</Text>
                <Text style={styles.elevationHeadTextNameTitle}>Jennie</Text>
              </View>
              <View style={{flexDirection: 'row'}}>
                <Text style={styles.elevationHeadTextName}>Country </Text>
                <Text style={styles.elevationHeadTextNameTitle}>
                  United States
                </Text>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Search;

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
  },
  mainBody: {
    width: '90%',
    height: '100%',
    alignSelf: 'center',
    paddingBottom: 60,
  },
  corouselStyle: {
    marginTop: 20,
    width: '90%',
    height: 361,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
  elevation1: {
    width: '100%',
    height: 124,
    elevation: 0.5,
    backgroundColor: 'white',
    borderRadius: 30,
    marginTop: 20,
  },
  elevationContent: {width: 206, height: 62, marginLeft: 20, marginTop: 10},
  elevationHeadText: {fontSize: 15, color: '#19295C', fontWeight: 'bold'},
  elevationHeadTextName: {fontSize: 18, color: '#19295C', fontWeight: '500'},
  elevationHeadTextNameTitle: {fontSize: 20, color: '#888080', paddingLeft: 10},

  elevation2: {
    width: '100%',
    height: 124,
    elevation: 0.2,
    backgroundColor: '#888080',
    opacity: 0.5,
    borderRadius: 30,
    marginTop: 20,
  },
});
