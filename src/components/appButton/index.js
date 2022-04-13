import {Icon} from 'native-base';
import React from 'react';
import {View, Text, TouchableOpacity,ActivityIndicator} from 'react-native';

const AppButton = ({
  loader,
  onPress,
  label,
  iconBG,
  iconN,
  iconT,
  iconL,
  iconR,
  buttonStyle,
  color,
  fontSize,
  disable,
}) => {
  const icon = iconL || iconR;

  return (
    <TouchableOpacity
      disabled={loader}
      onPress={onPress}
      activeOpacity={0.7}
      style={
        buttonStyle || {
          width: '100%',
          height: 50,
          borderRadius: 8,
          justifyContent: 'center',
          alignItems: 'center',
        }
      }>
      {loader? <ActivityIndicator color={'white'}size={'small'} />: <Text style={{color: color || 'white', fontSize: fontSize || 15}}>
        {' '}
        {label}{' '}
      </Text>
      }
      {icon && (
        <View
          style={{
            width: 35,
            height: 35,
            backgroundColor: iconBG || 'pink',
            borderRadius: 8,
            position: 'absolute',
            right: iconR ? 15 : null,
            left: iconL ? 15 : null,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Icon
            name={iconN || 'right'}
            type={iconT || 'AntDesign'}
            style={{fontSize: 20}}
          />
        </View>
      )}
    </TouchableOpacity>
  );
};

export {AppButton};
