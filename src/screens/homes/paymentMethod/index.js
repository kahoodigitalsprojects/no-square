import React, {useState} from 'react';
import {
  ImageBackground,
  ScrollView,
  StyleSheet,
  Text,
  View,
  StatusBar,
  TouchableOpacity,
  Image,
  SafeAreaView,
} from 'react-native';
import {
  AppButton,
  AppHeader,
  CheckBox,
  FormInput,
  HomeHeader,
  CustomPopup,
} from '../../../components';
import LinearGradient from 'react-native-linear-gradient';
import {Images, Themes} from '../../../constants';

const PaymentMethod = props => {
  const {navigation} = props;

  const [visible, setVisible] = useState(false);
  const [userInfo, setUserInfo] = useState({
    cardName: '',
    cardNum: '',
    expDate: '',
    cvv: '',
  });
  const [state, setState] = useState({
    checked: false,
    checked2: false,
    card: 'master',
    focus: false,
  });

  return (
    <>
      <SafeAreaView style={styles.screenContainer}>
        <StatusBar
          backgroundColor={'transparent'}
          translucent={true}
          barStyle="light-content"
        />
        <HomeHeader
          left
          setting
          text={'Payment Method'}
          fontSize={35}
          onPress={() => {
            props.navigation.navigate('subcription');
          }}
        />

        <ScrollView
          contentContainerStyle={{flexGrow: 1}}
          showsVerticalScrollIndicator={false}>
          <View style={styles.body}>
            <View style={styles.screenBody}>
              <View style={{marginTop: 10}}>
                <Text
                  style={{
                    color: '#0A0A0Aaa',
                    fontSize: 14,
                    fontWeight: 'bold',
                  }}>
                  Name on Card
                </Text>
                <View
                  style={{
                    borderBottomColor: 'black',
                    borderBottomWidth: 1,
                    // borderRadius: 8,
                  }}>
                  <FormInput
                    value={userInfo.cardName}
                    onChangeText={value =>
                      setUserInfo({...userInfo, cardName: value})
                    }
                    placeHolder="Rabecca Spade"
                    placeHolderColor={'#0A0A0A'}
                    onFocus={() => setState({...state, focus: 'David Spade'})}
                    onBlur={() => setState({...state, focus: ''})}
                    iconColor={'black'}
                  />
                </View>
              </View>

              <View style={{marginTop: 20}}>
                <Text
                  style={{
                    color: '#0A0A0Aaa',
                    fontSize: 14,
                    fontWeight: 'bold',
                  }}>
                  Card Number
                </Text>
                <View
                  style={{
                    borderBottomColor: 'black',
                    flexDirection: 'row',
                    borderBottomWidth: 1,
                    justifyContent: 'space-evenly',
                    // borderRadius: 8,
                  }}>
                  <FormInput
                    value={userInfo.cardName}
                    onChangeText={value =>
                      setUserInfo({...userInfo, cardName: value})
                    }
                    placeHolder="4560 5674 3224 4543"
                    placeHolderColor={'black'}
                    onFocus={() => setState({...state, focus: 'David Spade'})}
                    onBlur={() => setState({...state, focus: ''})}
                    iconColor={'black'}
                  />
                  <Image
                    source={Images.Pictures.masterCard}
                    style={{width: 42, height: 30}}
                  />
                </View>
              </View>

              <View
                style={{
                  marginTop: 20,
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                }}>
                <View style={{width: '40%'}}>
                  <Text
                    style={{
                      color: '#0A0A0Aaa',
                      fontSize: 14,
                      fontWeight: 'bold',
                    }}>
                    Expiry Date
                  </Text>
                  <View
                    style={{
                      borderBottomColor: 'black',

                      borderBottomWidth: 1,
                      // borderRadius: 8,
                    }}>
                    <FormInput
                      value={userInfo.cardName}
                      onChangeText={value =>
                        setUserInfo({...userInfo, cardName: value})
                      }
                      placeHolder="09 / 18"
                      placeHolderColor={'black'}
                      onFocus={() => setState({...state, focus: 'David Spade'})}
                      onBlur={() => setState({...state, focus: ''})}
                      iconColor={'white'}
                    />
                  </View>
                </View>

                <View style={{width: '40%'}}>
                  <Text
                    style={{
                      color: '#0A0A0Aaa',
                      fontSize: 14,
                      fontWeight: 'bold',
                    }}>
                    CVV
                  </Text>
                  <View
                    style={{
                      borderBottomColor: 'black',

                      borderBottomWidth: 1,
                    }}>
                    <FormInput
                      value={userInfo.cardName}
                      onChangeText={value =>
                        setUserInfo({...userInfo, cardName: value})
                      }
                      placeHolder="667"
                      placeHolderColor={'black'}
                      onFocus={() => setState({...state, focus: 'David Spade'})}
                      onBlur={() => setState({...state, focus: ''})}
                      iconColor={'white'}
                    />
                  </View>
                </View>
              </View>
              <CheckBox
                alignItem={'flex-start'}
                onPress={() => setState({checked2: !state.checked2})}
                checked={state.checked2}
                text={'Save this card details'}
                left
              />
              <TouchableOpacity
                activeOpacity={0.8}
                onPress={() => {
                  setVisible(true);
                }}>
                <LinearGradient
                  colors={['#F54F84', '#F52667']}
                  style={{
                    width: 229,
                    alignSelf: 'center',
                    marginTop: 20,
                    height: 66,
                    borderRadius: 15,
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}>
                  <Text
                    style={{
                      color: '#ffffff',
                      fontSize: 20,
                      fontWeight: 'bold',
                    }}>
                    Pay Now
                  </Text>
                </LinearGradient>
              </TouchableOpacity>
              <View
                style={{
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: 64,
                  height: 28,
                  alignSelf: 'center',
                }}>
                <Text style={{fontSize: 20, color: 'black'}}>- OR -</Text>
              </View>
              <TouchableOpacity
                style={{
                  width: 229,
                  alignSelf: 'center',
                  marginTop: 10,
                  alignItems: 'center',
                  justifyContent: 'center',
                  borderRadius: 15,
                  backgroundColor: '#FFFFFF',
                  borderWidth: 1,
                  borderColor: '#F5316F',
                  height: 66,
                  flexDirection: 'row',
                }}
                activeOpacity={0.8}>
                <Image
                  source={Images.Pictures.paypal}
                  style={{width: 16.93, height: 20}}
                />
                <Text style={{color: '#0E0F10', fontSize: 14, paddingLeft: 5}}>
                  PayPal
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
      {/* <OverlayModal
        visible={visible}
        cancel={() => setVisible(false)}
        height={200}>
        <View>
          <Text
            style={{
              textAlign: 'center',
              fontSize: 17,
              fontWeight: '600',
              color: 'white',
            }}>
            Notify
          </Text>
        </View>

        <View style={{paddingTop: 8}}>
          <Text style={{textAlign: 'center', fontSize: 13, color: 'white'}}>
            Confirm this payment?
          </Text>
        </View>
        <View style={{paddingTop: 15, width: '100%'}}>
          <View style={{marginVertical: 5}}>
            <AppButton
              height={35}
              label={'Confirm'}
              onPress={() => {
                setVisible(false);
              }}
            />
          </View>
          <View style={{marginVertical: 5}}>
            <AppButton
              gradient1={'white'}
              gradient2={'white'}
              color={'#707070'}
              height={35}
              label={'Cancel'}
              onPress={() => {
                setVisible(false);
              }}
            />
          </View>
        </View>
      </OverlayModal> */}

      <CustomPopup
        stateOverlay={visible}
        setstateOverlay={() => setVisible(false)}
        modelHeight={178}
        modelWidth={296}
        paymentSuccesProps={navigation}
        border_radius={30}
        paymentPopup
        OBonPress={() => {
          setVisible(false);
        }}
      />
    </>
  );
};

export default PaymentMethod;

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    paddingTop: 40,
    backgroundColor: 'white',
  },
  body: {
    width: '90%',
    flex: 1,
    alignSelf: 'center',
    marginTop: 20,
  },

  screenBody: {
    width: '90%',
    alignSelf: 'center',
    paddingTop: 20,
    paddingBottom: 20,
  },
});
