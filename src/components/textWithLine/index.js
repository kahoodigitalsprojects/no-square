import React from 'react';
import {View, Text} from 'react-native';

const TextWithLine = ({text, left, right, fontSize, fontWeight, lineColor}) => {
  return (
    <>
      <View
        style={{
          width: '100%',
          height: 25,
          alignItems: 'center',
          justifyContent: 'center',
          marginTop: 10,
          flexDirection: 'row',
        }}>
        <View
          style={{
            width: '100%',
            height: 2,
            backgroundColor: lineColor || 'grey',
            alignItems: 'center',
          }}>
          <View
            style={{
              position: 'absolute',
              top: -13,
              height: 25,
              left: left,
              right: right,
              overflow: 'hidden',
              backgroundColor: '#ffff',
              paddingHorizontal: 10,
            }}>
            <Text
              style={{
                fontSize: fontSize || 18,
                color: '#211E1F',
                fontWeight: fontWeight || 'bold',
              }}>
              {text}
            </Text>
          </View>
        </View>
        {/* <View style={styles.activeRoom}></View>
        <Text style={styles.activeRoomText}>{text}</Text>
        <View style={styles.activeLine}></View> */}
      </View>
    </>
  );
};

export {TextWithLine};
