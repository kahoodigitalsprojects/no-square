import React from 'react';
import {
  Image,
  Text,
  View,
  Dimensions,
  useWindowDimensions,
  ImageBackground,
} from 'react-native';

import Carousel, {getInputRangeFromIndexes} from 'react-native-snap-carousel';
import {Images} from '../../constants';

const Corousel = () => {
  const {height, width} = useWindowDimensions();
  // const windowWidth = Dimensions.get('screen').width;
  // const windowHeight = Dimensions.get('screen').height;
  const scrollInterpolator = (index, carouselProps) => {
    const range = [2, 2, 1, 0, -1];
    const inputRange = getInputRangeFromIndexes(range, index, carouselProps);
    const outputRange = range;

    return {inputRange, outputRange};
  };

  const animatedStyles = (index, animatedValue, carouselProps) => {
    const sizeRef = carouselProps.vertical
      ? carouselProps.itemHeight
      : carouselProps.itemWidth;
    const translateProp = carouselProps.vertical ? 'translateY' : 'translateX';

    return {
      zIndex: carouselProps.data.length,
      opacity: animatedValue.interpolate({
        inputRange: [1, 1, 1],
        outputRange: [2, 2, 2],
      }),
      transform: [
        {
          rotate: animatedValue.interpolate({
            inputRange: [-1, 0, 2, 2, 3],
            outputRange: ['15deg', '0deg', '-3deg', '2.8deg', '10deg'],
            extrapolate: 'clamp',
          }),
        },
        {
          [translateProp]: animatedValue.interpolate({
            inputRange: [-1, 0, 1],
            outputRange: [-1, 0, 1],
            extrapolate: 'clamp',
          }),
        },
      ],
    };
  };

  const renderItem = ({item}) => {
    return (
      <View
        style={{
          width: '100%',
          height: '100%',
          alignSelf: 'center',
          borderRadius: 30,
        }}>
        <ImageBackground
          source={item.uri}
          imageStyle={{borderRadius: 30}}
          style={{
            borderRadius: 30,
            width: '100%',
            height: '100%',
          }}></ImageBackground>
      </View>
    );
  };

  return (
    <Carousel
      data={[
        {
          uri: Images.Backgrounds.slider2,
        },
        {
          uri: Images.Backgrounds.slider1,
        },
        {
          uri: Images.Backgrounds.slider3,
        },
        {
          uri: Images.Backgrounds.slider3,
        },
      ]}
      renderItem={renderItem}
      sliderHeight={Math.floor(Number(height))}
      itemWidth={width}
      itemHeight={Math.floor(Number(height))}
      sliderWidth={width}
      scrollInterpolator={scrollInterpolator}
      slideInterpolatedStyle={animatedStyles}
      useScrollView={true}
    />
  );
};
export {Corousel};
