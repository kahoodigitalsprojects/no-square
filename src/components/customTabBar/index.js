import React, {useEffect, useState} from 'react';
import {CustomPopup} from '../customPopup';
import {Icon} from 'native-base';
import {Themes, Images} from './../../constants';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';

const CustomTabBar = props => {
  const {state: bIndex, descriptors, navigation} = props;
  const [state, setState] = useState({
    index: 0,
    bottomTab: [
      {navTo: 'home', icon: Images.Pictures.homeIcon},
      {navTo: 'chatRoom', icon: Images.Pictures.usersIcon},
      // {navTo: '', icon: ''},
      {navTo: 'connections', icon: Images.Pictures.msgIcon},
      {navTo: 'search', icon: Images.Pictures.lesbainIcon},
    ],
  });

  const [visible, setVisible] = useState(false);

  return (
    <>
      <View style={{height: 70, width: '100%', backgroundColor: 'white'}}>
        <View
          style={{
            flexDirection: 'row',
            width: '90%',
            alignItems: 'center',
            justifyContent: 'space-between',
            height: '100%',
            alignSelf: 'center',
            backgroundColor: 'white',
          }}>
          <View
            style={{
              position: 'absolute',
              left: 0,
              right: 0,
              top: -30,
              bottom: 0,
            }}>
            <TouchableOpacity
              style={{
                width: 71,
                height: 73,
                // marginTop: -65,
                // position: 'absolute',
                // left: '40%',
                alignSelf: 'center',
              }}
              activeOpacity={0.7}
              onPress={() => {
                setVisible(true);
              }}>
              <Image
                source={Images.Pictures.tabBtn}
                style={{width: '100%', height: '100%'}}
              />
            </TouchableOpacity>
          </View>

          {state.bottomTab.map((item, i) => {
            const isFocused = bIndex.index === i;

            // return i === 2 ? (
            // <TouchableOpacity
            //   style={{width: 71, height: 73, marginTop: -65}}
            //   activeOpacity={0.7}
            //   onPress={() => {
            //     setVisible(true);
            //   }}>
            //   <Image
            //     source={Images.Pictures.tabBtn}
            //     style={{width: '100%', height: '100%'}}
            //   />
            // </TouchableOpacity>
            // ) : (
            return (
              <TouchableOpacity
                key={i}
                style={{width: 30, height: 30, marginRight: i == 1 ? 80 : 0}}
                onPress={() => {
                  setState({...state, index: 0});
                  props.navigation.navigate(item.navTo);
                }}>
                <Image
                  tintColor={isFocused ? '#F54F84' : 'grey'}
                  source={item.icon}
                  style={{width: '100%', height: '100%'}}
                  resizeMode="contain"
                />
              </TouchableOpacity>
            );
          })}

          {/* <TouchableOpacity
            style={{width: 31, height: 20}}
            onPress={() => {
              setState({...state, index: 1});
              props.navigation.navigate('chatRoom');
            }}>
            <Image
              source={Images.Pictures.usersIcon}
              style={{width: '100%', height: '100%'}}
              tintColor={isFocused == 'chatRoom' ? '#F54F84' : null}
            />
          </TouchableOpacity> */}

          {/* <TouchableOpacity
            style={{width: 71, height: 73, marginTop: -65}}
            activeOpacity={0.7}
            onPress={() => {
              setVisible(true);
            }}>
            <Image
              source={Images.Pictures.tabBtn}
              style={{width: '100%', height: '100%'}}
            />
          </TouchableOpacity> */}

          {/* <TouchableOpacity
            style={{width: 28, height: 25}}
            onPress={() => {
              setState({...state, index: 2});
            }}>
            <Image
              source={Images.Pictures.msgIcon}
              style={{width: '100%', height: '100%'}}
              tintColor={bIndex.index === state.index ? '#F54F84' : null}
            />
          </TouchableOpacity>

          <TouchableOpacity
            style={{width: 31, height: 31}}
            onPress={() => {
              setState({...state, index: 3});
              props.navigation.navigate('search');
            }}>
            <Image
              source={Images.Pictures.lesbainIcon}
              style={{width: '100%', height: '100%'}}
              tintColor={bIndex.index === state.index ? '#F54F84' : null}
            />
          </TouchableOpacity> */}
        </View>
      </View>

      <CustomPopup
        stateOverlay={visible}
        setstateOverlay={() => setVisible(false)}
        modelHeight={341}
        tabPopup
        border_radius={15}
        OBonPress={() => {
          setVisible(false);
        }}
      />
    </>
  );
};

export {CustomTabBar};

const styles = StyleSheet.create({});
