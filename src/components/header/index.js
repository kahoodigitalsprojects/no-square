import React from 'react';
import {Text, TouchableOpacity, View, Image} from 'react-native';
import {Themes, Images} from './../../constants';
import {Icon} from 'native-base';

const Header = ({
  fontColor,
  heightImage,
  viewHeight,
  width,
  fontSize,
  leftIcon,
  text,
  leftIconProps,
}) => {
  return (
    <View
      style={{
        alignSelf: 'center',
        width: '90%',
        height: viewHeight || 120,
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      {leftIcon && (
        <TouchableOpacity
          style={{
            width: 24,
            height: 24,
            position: 'absolute',
            alignItems: 'center',
            justifyContent: 'center',
            left: 0,
            top: 0,
          }}
          activeOpacity={0.7}
          onPress={leftIconProps}>
          <Icon
            name="left"
            type="AntDesign"
            style={{color: Themes.textColors.blackText, fontSize: 20}}
          />
        </TouchableOpacity>
      )}
      <Image
        source={Images.Pictures.appLogo}
        style={{width: width || 66, height: heightImage || 67}}
      />
      {text && (
        <Text style={{fontSize: fontSize || 30, color: fontColor || '#F54F84'}}>
          NoSquare
        </Text>
      )}
    </View>
  );
};

export {Header};
