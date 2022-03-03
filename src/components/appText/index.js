import React from 'react';
import {StyleSheet, Text} from 'react-native';
import {theme} from '../../constants';
const AppText = ({
  text,
  bold,
  semiBold,
  italic,
  upperCase,
  lowerCase,
  underline,
  size,
  heading,
  subHeading,
  color,
  textStyle,
  primary,
  secondary,
  white,
  paddingV,
  paddingH,
  paddingB,
  paddingT,
  paddingL,
  paddingR,
  textAlign,
  Spacing,
  lineH,
  width,
  textD,
  fontW,
  alignSelf,
}) => {
  return (
    <Text
      style={[
        styles.commonTextStyles,
        primary && {color: theme.primaryColor},
        white && {color: theme.textColors.whiteText},
        bold && {fontWeight: 'bold'},
        semiBold && {fontWeight: '600'},
        fontW && {fontWeight: fontW},
        upperCase && {textTransform: 'uppercase'},
        lowerCase && {textTransform: 'lowercase'},
        italic && {fontStyle: 'italic'},
        underline && {textDecorationLine: textD || 'underline'},
        heading && {fontSize: 17},
        textD && {textDecorationStyle: 'solid'},
        subHeading && {fontSize: 14},
        size && {fontSize: size},
        color && {color: color},
        width && {width: width},
        paddingV && {paddingVertical: 6},
        paddingH && {paddingHorizontal: 5},
        paddingB && {paddingBottom: 10},
        paddingT && {paddingTop: 5},
        paddingL && {paddingLeft: 5},
        paddingR && {paddingRight: 5},
        textAlign && {textAlign: 'center'},
        Spacing && {letterSpacing: 0.5},
        lineH && {lineHeight: 16.5},
        textStyle,
        alignSelf && {alignSelf: 'center'},
      ]}>
      {text}
    </Text>
  );
};
const styles = StyleSheet.create({
  commonTextStyles: {
    fontSize: 12,
    color: 'black',
    fontFamily: 'Poppins-Medium',
  },
});
export {AppText};
