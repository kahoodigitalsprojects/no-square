import React, {useState} from 'react';
import {ScrollView, StatusBar, StyleSheet, Text, View} from 'react-native';
import {AppButton, HomeHeader, CustomPopup} from '../../../components';
import {SafeAreaView} from 'react-native-safe-area-context';
import LinearGradient from 'react-native-linear-gradient';
import DropDownPicker from 'react-native-dropdown-picker';

const SubcriptionPlan = props => {
  const {navigation} = props;

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
              settingIconProps={() => navigation.goBack()}
              setting
              right
              text={'Subscriptions Plan'}
              textColor={'#191919B8'}
              fontSize={24}
            />
            <View style={styles.mainContainer}>
              <View style={styles.headerView}>
                <View
                  style={{
                    width: '100%',
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    height: '50%',
                  }}>
                  <Text style={{fontSize: 18, color: '#323232'}}>
                    Sign Up Date
                  </Text>
                  <Text style={{fontSize: 13, color: '#323232'}}>
                    2/20/2022
                  </Text>
                </View>
                <View
                  style={{
                    width: '100%',
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    height: '50%',
                  }}>
                  <Text style={{fontSize: 18, color: '#323232'}}>
                    Subscriptions Expiry
                  </Text>
                  <Text style={{fontSize: 13, color: '#323232'}}>
                    4/20/2022
                  </Text>
                </View>
              </View>
              <View
                style={{
                  borderBottomWidth: 1,
                  width: '100%',
                  marginTop: 10,
                }}></View>
              <View style={{width: '100%', marginTop: 30}}>
                <Text style={{fontSize: 18, color: '#323232'}}>
                  {' '}
                  Subscriptions Extention
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

              <LinearGradient
                colors={['#F52667', '#F54F84']}
                style={styles.loginBtn}>
                <AppButton
                  label="Proceed To Pay"
                  onPress={() => {
                    props.navigation.navigate('Statics', {
                      screen: 'paymentMethod',
                    });
                  }}
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

export default SubcriptionPlan;

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
  headerView: {
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
