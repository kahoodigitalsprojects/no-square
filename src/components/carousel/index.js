import React, {useState} from 'react';
import {
  Image,
  Text,
  View,
  StyleSheet,
  Dimensions,
  useWindowDimensions,
  ImageBackground,
} from 'react-native';
import SwipeCards from 'react-native-swipe-cards';
// import Carousel, {getInputRangeFromIndexes} from 'react-native-snap-carousel';
import {Images} from '../../constants';
import {CustomPopup} from '../customPopup';

const Card = props => {
  return (
    <>
      <View style={styles.card}>
        <ImageBackground style={styles.thumbnail} source={props.image}>
          <View style={styles.imageText}>
            <Text style={{color: 'white', fontSize: 15}}>Jennie Fernandis</Text>
            <Text style={{color: 'white', fontSize: 10, color: '#F2E8E8'}}>
              Self Employeed
            </Text>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <View style={styles.activeIcon}></View>
              <Text style={{marginLeft: 5, color: 'white', fontSize: 10}}>
                Active Now
              </Text>
            </View>
          </View>
        </ImageBackground>
      </View>
      <CustomPopup
        stateOverlay={props.visible}
        setstateOverlay={() => props.setVisible(false)}
        friendRequest
        modelHeight={285}
        modelWidth={250}
        border_radius={15}
        OBonPress={() => {
          props.setVisible(false);
        }}
      />
    </>
  );
};
const NoMoreCards = () => {
  return (
    <View>
      <Text style={styles.noMoreCardsText}>No more cards</Text>
    </View>
  );
};
const Corousel = props => {
  const [state, setState] = useState({
    cards: [
      {
        name: '1',
        image: Images.Backgrounds.slider1,
      },
      {
        name: '2',
        image: Images.Backgrounds.slider1,
      },
      {
        name: '3',
        image: Images.Backgrounds.slider1,
      },
      {
        name: '4',
        image: Images.Backgrounds.slider1,
      },
      {
        name: '5',
        image: Images.Backgrounds.slider1,
      },
      {
        name: '6',
        image: Images.Backgrounds.slider1,
      },
    ],
  });

  const [visible, setVisible] = useState(false);

  return (
    <SwipeCards
      cards={state.cards}
      loop={false}
      renderCard={cardData => (
        <Card setVisible={setVisible} visible={visible} {...cardData} />
      )}
      renderNoMoreCards={() => <NoMoreCards />}
      showYup={true}
      showNope={true}
      handleYup={() => {
        setVisible(true);
      }}
    />
  );
};
export {Corousel};

const styles = StyleSheet.create({
  card: {
    alignItems: 'center',
    borderRadius: 5,
  },
  thumbnail: {
    width: 350,
    height: 361,
  },

  noMoreCards: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageText: {
    width: 150,
    height: 60,
    justifyContent: 'space-evenly',
    position: 'absolute',
    alignItems: 'center',
    bottom: 20,
    left: 30,
  },
  activeIcon: {
    width: 10,
    height: 10,
    borderRadius: 50,
    backgroundColor: '#24A206',
  },
});
