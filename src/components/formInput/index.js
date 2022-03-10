import React from 'react';
import {TextInput, TouchableOpacity, View, Text} from 'react-native';
import {Icon} from 'native-base';

const FormInput = ({
  value,
  placeHolder,
  placeHolderColor,
  onChangeText,
  onBlur,
  onFocus,
  secureText,
  iconR,
  iconRName,
  iconRType,
  iconL,
  iconLName,
  iconLType,
  borderC,
  styleL,
  styleI,
  styleR,
  iconColor,
  borderW,
  bgColor,
  onPressR,
  keyboardType,
  multiLine,
  autoCapitalize,
  borderRadius,
  phoneNo,
  height,
  textHeight,
}) => {
  return (
    <View
      style={{
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderRadius: borderRadius || 8,
        backgroundColor: bgColor || null,
        borderWidth: borderW || 0,
        borderColor: borderC,
        height: height || 45,
      }}>
      {iconL && (
        <View
          style={{
            width: '10%',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          {phoneNo ? (
            <View
              style={{
                borderRightWidth: 1,
                color: 'black',
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <TextInput
                style={{width: '10%'}}
                placeholder="+966 "
                keyboardType={keyboardType || 'default'}
                maxLength={3}
              />
            </View>
          ) : (
            <Icon
              name={iconLName}
              type={iconLType}
              style={styleL || {fontSize: 17, color: iconColor || 'grey'}}
            />
          )}
        </View>
      )}
      <TextInput
        style={[
          styleI,
          {
            width: iconL && iconR ? '80%' : iconL ? '90%' : '100%',
            paddingLeft: iconL ? 0 : 10,
            color: 'black',
            textAlignVertical: multiLine ? 'top' : 'center',
            height: textHeight || null,
          },
        ]}
        value={value}
        autoCapitalize={autoCapitalize}
        placeholder={placeHolder}
        placeholderTextColor={placeHolderColor || 'grey'}
        onChangeText={onChangeText}
        onFocus={onFocus || null}
        onBlur={onBlur || null}
        secureTextEntry={secureText}
        multiline={multiLine}
        keyboardType={keyboardType || 'default'}
      />

      {iconR && (
        <TouchableOpacity
          activeOpacity={0.7}
          onPress={onPressR}
          style={{
            width: '10%',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Icon
            name={iconRName || 'eye-with-line'}
            type={iconRType || 'Entypo'}
            style={styleR || {fontSize: 17, color: iconColor || 'grey'}}
          />
        </TouchableOpacity>
      )}
    </View>
  );
};

export {FormInput};
