import {StyleSheet, Text, TextInput, View} from 'react-native';
import React from 'react';
import {Icon} from 'native-base';

const SearchBar = ({width}) => {
  return (
    <View
      style={{
        width: '100%',
        height: 60,
        marginTop: 10,
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <View
        style={{
          width: width || '80%',
          height: 41,
          borderRadius: 25,
          backgroundColor: '#E6E2E2',
          alignSelf: 'center',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}>
        <View
          style={{
            width: '15%',
            height: 24,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Icon
            name="search1"
            type="AntDesign"
            style={{fontsize: 18, color: '#262223'}}
          />
        </View>
        <View style={{width: '85%', height: 40}}>
          <TextInput placeholder="Search for Friends"></TextInput>
        </View>
      </View>
    </View>
  );
};

export {SearchBar};

const styles = StyleSheet.create({});
