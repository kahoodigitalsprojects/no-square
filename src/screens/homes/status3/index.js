import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  StatusBar,
  ScrollView,
  TextInput,
  TouchableOpacity,
  Image,
} from 'react-native';
import React from 'react';
import {Themes, Images} from './../../../constants';
import {Icon} from 'native-base';

const Status3 = props => {
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#D7245C'}}>
      <StatusBar backgroundColor={'#D7245C'} barStyle="light-content" />
      <ScrollView
        keyboardShouldPersistTaps="handled"
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{flexGrow: 1}}>
        <View
          style={{
            width: '100%',
            height: '100%',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <View
            style={{
              paddingTop: 20,
              position: 'absolute',
              top: '2%',
              right: 10,
              height: 150,
              justifyContent: 'space-between',
            }}>
            <TouchableOpacity
              style={{width: 34, height: 34}}
              onPress={() => {
                props.navigation.navigate('addStatus');
              }}>
              <Icon name="cross" type="Entypo" style={{color: 'white'}} />
            </TouchableOpacity>
            <TouchableOpacity style={{width: 34, height: 34}}>
              <Icon
                name="ios-color-palette-sharp"
                type="Ionicons"
                style={{color: 'white'}}
              />
            </TouchableOpacity>
            <TouchableOpacity style={{width: 34, height: 34}}>
              <Icon name="smile" type="FontAwesome5" style={{color: 'white'}} />
            </TouchableOpacity>
            <TouchableOpacity>
              <Icon name="text" type="Ionicons" style={{color: 'white'}} />
            </TouchableOpacity>
          </View>
          <View style={{width: '100%', alignItems: 'center'}}>
            <TextInput
              placeholder="Hi! Everyone"
              placeholderTextColor={'white'}
              style={{
                marginTop: 90,
                fontSize: 37,
                color: 'white',
              }}
              multiline={true}
            />
          </View>
          <View
            style={{
              width: '100%',
              height: 70,
              alignItems: 'flex-end',
              justifyContent: 'center',
              position: 'absolute',
              bottom: '2%',
              paddingRight: 10,
            }}>
            <TouchableOpacity
              style={{
                width: 71,
                height: 71,
                backgroundColor: 'white',
                borderRadius: 50,

                alignItems: 'center',
                justifyContent: 'center',
              }}
              activeOpacity={0.9}>
              <Image
                source={Images.Pictures.send}
                style={{width: 27.26, height: 27.27}}
              />
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Status3;

const styles = StyleSheet.create({});
