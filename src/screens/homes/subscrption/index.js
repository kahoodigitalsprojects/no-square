import React, {useState} from 'react';
import {
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
  ImageBackground,
  Picker,
} from 'react-native';
import {
  FormInput,
  AppButton,
  CheckBox,
  Header,
  HomeHeader,
  CustomPopup,
} from '../../../components';
import {SafeAreaView} from 'react-native-safe-area-context';
import LinearGradient from 'react-native-linear-gradient';
import DropDownPicker from 'react-native-dropdown-picker';

import {Themes, Images} from './../../../constants';
import {Icon} from 'native-base';
import {color} from 'react-native-reanimated';

const Subcrption = props => {
  const {navigation} = props;
  const [error, setError] = useState('');

  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([
    {label: '1 Month', value: '1 Month'},
    {label: '2 Month', value: '2 Month'},
    {label: '3 Month', value: '3 Month'},
    {label: '6 Month', value: '3 Month'},
    {label: '1 Year', value: '1 Year'},
  ]);
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
    text: '',
  });

  return (
    <>
      <SafeAreaView
        style={{
          flex: 1,
          backgroundColor: 'white',
        }}>
        <StatusBar backgroundColor={'white'} barStyle="dark-content" />
        <ScrollView
          keyboardShouldPersistTaps="handled"
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{flexGrow: 1}}>
          <View style={styles.container}>
            <HomeHeader
              onPress={() => navigation.goBack()}
              setting
              left
              text={'Subscriptions'}
              textColor={'black'}
              fontSize={24}
            />
            <View style={styles.mainContainer}>
              <View style={styles.headerTextView}>
                <Text style={styles.headerText}>
                  Select you subscription plan according to your need and get
                  some new sugar friends
                </Text>
              </View>
              <View style={styles.headerTextView2}>
                <Text style={styles.headerText2}>
                  Nosquare Membership Is $3.99 For 1 Month
                </Text>
              </View>
              <View style={{width: '100%', marginTop: 30}}>
                <DropDownPicker
                  placeholder={items[0].label}
                  placeholderStyle={{
                    textAlign: 'center',
                  }}
                  open={open}
                  value={value}
                  items={items}
                  setOpen={setOpen}
                  setValue={setValue}
                  setItems={setItems}
                  containerStyle={styles.dropdownContainer}
                  style={styles.dropdownStyle}
                  listItemLabelStyle={styles.dropdownListItemLabel}
                  listItemContainerStyle={styles.dropdownListItemContainer}
                  dropDownContainerStyle={{
                    borderColor: '#F53572',
                    borderTopWidth: 0,
                  }}
                  labelStyle={{
                    fontSize: 14,
                    textAlign: 'center',
                  }}
                  arrowIconStyle={{
                    width: 20,
                    height: 20,
                  }}
                />
              </View>
              <Text style={{marginTop: 20, fontSize: 15, color: '#615C5C'}}>
                Amount Payable $3.99
              </Text>
              <View
                style={{
                  width: '100%',

                  marginTop: 10,
                  justifyContent: 'space-between',
                  alignItems: 'center',
                }}>
                <View>
                  <View style={{flexDirection: 'row', alignItems: 'center'}}>
                    <View
                      style={{
                        width: '10%',
                        flexDirection: 'row',
                        borderColor: 'black',
                      }}>
                      <View style={{flexDirection: 'row'}}>
                        <CheckBox
                          alignItem={'flex-start'}
                          onPress={() => setState({checked: !state.checked})}
                          checked={state.checked}
                        />
                      </View>
                    </View>
                    <View
                      style={{
                        flexDirection: 'row',
                        width: '88%',
                        flexWrap: 'wrap',
                      }}>
                      <Text
                        Text
                        style={{
                          fontSize: 15,
                          color: 'black',
                          fontWeight: '600',
                        }}>
                        I agree with all
                      </Text>
                      <Text>
                        <TouchableOpacity
                          style={{
                            justifyContent: 'center',
                            alignItems: 'center',
                            paddingLeft: 5,
                          }}
                          onPress={() => {
                            setVisible(true);
                            setState({...state, text: 'Terms & Conditions'});
                          }}>
                          <Text style={{color: '#F54F84'}}>
                            Terms & Conditions
                          </Text>
                        </TouchableOpacity>
                      </Text>
                      <Text
                        Text
                        style={{
                          fontSize: 15,
                          color: 'black',
                          fontWeight: '600',
                          paddingLeft: 5,
                        }}>
                        add
                      </Text>

                      <TouchableOpacity
                        style={{marginLeft: 5}}
                        onPress={() => {
                          setVisible(true);
                          setState({...state, text: 'Privacy Policy'});
                        }}>
                        <Text style={{color: '#F54F84'}}>Privacy Policy</Text>
                      </TouchableOpacity>
                    </View>
                  </View>
                </View>
              </View>

              <LinearGradient
                colors={['#F52667', '#F54F84']}
                style={styles.loginBtn}>
                <AppButton
                  label="Proceed To Pay"
                  onPress={() => {
                    navigation.navigate('paymentMethod');
                  }}
                  // onPress={() => {
                  //   navigation.navigate('Statics', {
                  //     screen: 'paymentMethod',
                  //     params: {
                  //       isHome: false,
                  //     },
                  //   });
                  // }}
                />
              </LinearGradient>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>

      <CustomPopup
        stateOverlay={visible}
        setstateOverlay={() => setVisible(false)}
        modelHeight={618}
        modelWidth={332}
        privacy
        paymentSuccesProps={navigation}
        border_radius={30}
        privacyText={state.text}
        OBonPress={() => {
          setVisible(false);
        }}
      />
    </>
  );
};

export default Subcrption;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
  },
  mainContainer: {
    width: '90%',
    height: '100%',
    alignSelf: 'center',
    marginTop: 10,
    paddingBottom: 250,
  },
  headerTextView: {
    width: '100%',
    height: 79,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
  },
  headerText: {fontSize: 19, color: '#111111', textAlign: 'center'},
  headerTextView2: {
    width: '100%',
    height: 21,
    marginTop: 25,
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerText2: {
    fontSize: 15,
    color: '#615C5C',
    fontWeight: '500',
  },
  loginBtn: {
    position: 'absolute',
    bottom: 100,
    width: '100%',
    height: 56,
    borderRadius: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },
  dropdown: {
    flex: 1,
    paddingTop: 40,
    alignItems: 'center',
  },
  dropdownContainer: {
    width: '100%',
    height: 49,
    borderRadius: 10,
  },
  dropdownListItemLabel: {
    textAlign: 'center',
    borderBottomColor: '#F53572',
    borderBottomWidth: 1.2,
    height: 35,
    alignItems: 'center',
    justifyContent: 'center',
  },
  dropdownStyle: {
    borderColor: '#F53572',
    borderWidth: 1,
    borderRadius: 10,
  },
  dropdownListItemContainer: {
    width: '80%',
    height: 49,
    alignSelf: 'center',
  },
});
