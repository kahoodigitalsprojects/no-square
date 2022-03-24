import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  StyleSheet,
  TextInput,
} from 'react-native';
import {Overlay} from 'react-native-elements';
import LinearGradient from 'react-native-linear-gradient';
import {Images, theme} from '../../constants';
import {Switch} from 'react-native-paper';
import {AppButton} from '..';
import ForgetPassword from '../../screens/auth/forgetPassword';
import {Icon} from 'native-base';
const CustomPopup = props => {
  const [isSwitchOn, setIsSwitchOn] = useState(false);
  const [isSwitchOn2, setIsSwitchOn2] = useState(false);
  const [notifty, setNotify] = useState(false);
  const onToggleSwitch = () => setIsSwitchOn(!isSwitchOn);
  const onToggleSwitch2 = () => setIsSwitchOn2(!isSwitchOn2);
  const {
    stateOverlay,
    setstateOverlay,
    Photo,
    Discription,
    leftButton,
    rightButton,
    OneButton,
    LBonPress,
    RBonPress,
    descriptionSize,
    buttonTextStyleProps,
    OBonPress,
    leftButtonColor,
    rightButtonColor,
    notBold,
    modelHeight,
    modelWidth,
    border_radius,
    tabPopup,
    paymentPopup,
    paymentSuccesProps,
    forgetPassword,
    privacy,
    privacyText,
    contactSendMessege,
    accountDelete,
    friendRequest,
    onDelete,
  } = props;
  return (
    <Overlay
      isVisible={stateOverlay}
      onBackdropPress={setstateOverlay}
      overlayStyle={{
        borderRadius: border_radius || 20,
        paddingHorizontal: 0,
        paddingVertical: 8,
        backgroundColor: '#FFF',
        width: modelWidth || '90%',
        // minHeight:100,

        height: notifty ? 290 : modelHeight || 100,
      }}>
      {tabPopup && (
        <View
          style={{
            width: '100%',
            height: '100%',
          }}>
          <View
            style={{
              width: '100%',
              justifyContent: 'center',
              flexDirection: 'row',
            }}>
            <TouchableOpacity activeOpacity={0.9}>
              <LinearGradient
                colors={['#F52667', '#F54F84']}
                style={styles.headerBtn}>
                <View style={{width: 20.75, height: 12.4}}>
                  <Image
                    source={Images.Pictures.videoCall}
                    style={{width: '100%', height: '100%'}}
                  />
                </View>
                <Text style={{fontSize: 12, color: 'white'}}>Video</Text>
              </LinearGradient>
            </TouchableOpacity>
            <TouchableOpacity activeOpacity={0.9}>
              <LinearGradient
                colors={['#F52667', '#F54F84']}
                style={styles.headerBtn}>
                <View style={{width: 10.87, height: 10.87}}>
                  <Image
                    source={Images.Pictures.photos}
                    style={{width: '100%', height: '100%'}}
                  />
                </View>
                <Text style={{fontSize: 12, color: 'white'}}>Photos</Text>
              </LinearGradient>
            </TouchableOpacity>
            <TouchableOpacity activeOpacity={0.9}>
              <LinearGradient
                colors={['#F52667', '#F54F84']}
                style={styles.headerBtn}>
                <View style={{width: 20.75, height: 12.4}}>
                  <Image
                    source={Images.Pictures.camIcon}
                    style={{width: '100%', height: '100%'}}
                  />
                </View>
                <Text style={{fontSize: 12, color: 'white'}}>Camera</Text>
              </LinearGradient>
            </TouchableOpacity>
          </View>

          <View style={styles.midBody}>
            <TextInput
              style={{height: 50, fontWeight: '200'}}
              placeholder={'Whats In your mind...?'}
              placeholderTextColor={'#2B2828'}
              fontSize={26}
            />

            <View
              style={{
                width: '100%',
                height: 65,
                flexDirection: 'row',
              }}>
              <Image
                source={Images.Backgrounds.statusImage1}
                style={{width: 63, height: 61, marginLeft: 10}}
              />
              <Image
                source={Images.Backgrounds.statusImage2}
                style={{width: 63, height: 61, marginLeft: 10}}
              />
            </View>
          </View>
          <View style={styles.footer}>
            <View style={styles.footerData}>
              <Image
                source={Images.Backgrounds.smileIcon}
                style={{width: 19.32, height: 19.32}}
              />
              <Image
                source={Images.Backgrounds.tagIcon}
                style={{width: 21.46, height: 22.82}}
              />
              <Image
                source={Images.Backgrounds.iconLocation}
                style={{width: 17.24, height: 24.41}}
              />
            </View>
          </View>
          <View style={styles.footerView}>
            <View style={styles.footerLeftData}>
              <View>
                <Text
                  style={{fontSize: 12, color: '#464242', fontWeight: '500'}}>
                  Activate like
                </Text>
                <Text
                  style={{fontSize: 12, color: '#464242', fontWeight: '500'}}>
                  Activate Share
                </Text>
              </View>
              <View style={{marginRight: 10}}>
                <Switch
                  value={isSwitchOn}
                  onValueChange={onToggleSwitch}
                  color="#F54F84"
                  style={{width: 21.77, height: 21.77}}
                />
                <Switch
                  value={isSwitchOn2}
                  onValueChange={onToggleSwitch2}
                  color="#F54F84"
                  style={{width: 21.77, height: 21.77}}
                />
              </View>
            </View>
            <TouchableOpacity onPress={OBonPress}>
              <LinearGradient
                colors={['#F52667', '#F54F84']}
                style={styles.footerRightData}>
                <Text style={{fontSize: 15, color: '#ffff'}}>Post</Text>
              </LinearGradient>
            </TouchableOpacity>
          </View>
        </View>
      )}

      {paymentPopup && (
        <View style={{width: '90%', height: '100%', alignSelf: 'center'}}>
          <View
            style={{
              width: '100%',
              alignItems: 'center',
              justifyContent: 'center',
              marginTop: 20,
            }}>
            <Text style={{fontSize: 20, color: '#000000', fontWeight: 'bold'}}>
              Notify
            </Text>
          </View>

          {notifty === true ? (
            <View
              style={{
                width: '100%',
                marginTop: 20,
                alignItems: 'center',
              }}>
              <Image
                source={Images.Backgrounds.correct}
                style={{width: 69, height: 69}}
              />
              <View
                style={{
                  width: 220,
                  height: 58,
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginTop: 10,
                }}>
                <Text style={{fontSize: 20}}>Payment Processed</Text>
                <Text style={{fontSize: 20}}>Successfully</Text>
              </View>
              <TouchableOpacity
                style={styles.paymentSuccesBtn}
                onPress={() =>
                  paymentSuccesProps.navigate('Auth', {screen: 'login'})
                }>
                <Text style={{fontSize: 15, color: 'white'}}>Continue</Text>
              </TouchableOpacity>
            </View>
          ) : (
            <>
              <View
                style={{
                  width: '100%',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginTop: 20,
                }}>
                <Text style={{fontSize: 20, color: '#000000'}}>
                  Confirm this Payment?
                </Text>
              </View>
              <View
                style={{
                  width: '100%',
                  flexDirection: 'row',
                  alignItems: 'center',
                  marginTop: 20,
                  justifyContent: 'space-evenly',
                }}>
                <TouchableOpacity
                  style={[
                    styles.btn,
                    {
                      backgroundColor: 'white',
                    },
                  ]}
                  activeOpacity={0.9}
                  onPress={OBonPress}>
                  <Text
                    style={{
                      fontSize: 15,
                      color: '#F54D83',
                    }}>
                    Cancel
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.btn}
                  activeOpacity={0.9}
                  onPress={() => {
                    setNotify(true);
                  }}>
                  <Text style={{fontSize: 15, color: '#ffff'}}>confirm</Text>
                </TouchableOpacity>
              </View>
            </>
          )}
        </View>
      )}
      {friendRequest && (
        <View style={{width: '90%', height: '100%', alignSelf: 'center'}}>
          <View
            style={{
              width: '100%',
              alignItems: 'center',
              justifyContent: 'center',
              marginTop: 20,
            }}>
            <Text style={{fontSize: 20, color: '#000000', fontWeight: 'bold'}}>
              Notify
            </Text>
          </View>

          <View
            style={{
              width: '100%',
              marginTop: 20,
              alignItems: 'center',
            }}>
            <Image
              source={Images.Backgrounds.correct}
              style={{width: 69, height: 69}}
            />
            <View
              style={{
                width: 220,
                height: 58,
                alignItems: 'center',
                justifyContent: 'center',
                marginTop: 10,
              }}>
              <Text style={{fontSize: 20, color: '#2E2B2B'}}>
                Friend Request Sent!
              </Text>
            </View>
            <TouchableOpacity
              style={styles.paymentSuccesBtn}
              onPress={OBonPress}>
              <Text style={{fontSize: 15, color: 'white'}}>Continue</Text>
            </TouchableOpacity>
          </View>
        </View>
      )}

      {forgetPassword && (
        <View style={{width: '90%', height: '100%', alignSelf: 'center'}}>
          <View
            style={{
              width: '100%',
              alignItems: 'center',
              justifyContent: 'center',
              marginTop: 20,
            }}>
            <Text style={{fontSize: 20, color: '#000000', fontWeight: 'bold'}}>
              Notify
            </Text>
          </View>
          <View
            style={{
              width: '90%',
              height: 28,
              alignSelf: 'center',
              alignItems: 'center',
              justifyContent: 'center',
              marginTop: 40,
            }}>
            <Text style={{fontSize: 20, color: '#2E2B2B'}}>
              Password Reset Link Sent In
            </Text>
            <Text style={{fontSize: 20, color: '#2E2B2B'}}>
              Email Check Your Inbox
            </Text>
          </View>
          <TouchableOpacity
            style={styles.forgetPasswordBtn}
            onPress={() =>
              paymentSuccesProps.navigate('Auth', {screen: 'login'})
            }>
            <Text style={{fontSize: 15, color: 'white'}}>Continue</Text>
          </TouchableOpacity>
        </View>
      )}
      {contactSendMessege && (
        <View style={{width: '90%', height: '100%', alignSelf: 'center'}}>
          <View
            style={{
              width: '100%',
              alignItems: 'center',
              justifyContent: 'center',
              marginTop: 20,
            }}>
            <Text style={{fontSize: 20, color: '#000000', fontWeight: 'bold'}}>
              Thank You
            </Text>
            <View style={{marginTop: 15}}>
              <Image
                source={Images.Backgrounds.correct}
                style={{width: 50, height: 50}}
              />
            </View>

            <Text style={{fontSize: 20, marginTop: 10}}>Send Successfully</Text>
            <LinearGradient
              colors={['#F52667', '#F54F84']}
              style={styles.loginBtn2}>
              <AppButton label="Close" onPress={OBonPress} />
            </LinearGradient>
          </View>
        </View>
      )}
      {accountDelete && (
        <View style={{width: '90%', height: '100%', alignSelf: 'center'}}>
          <View
            style={{
              width: '100%',
              alignItems: 'center',
              justifyContent: 'center',
              marginTop: 20,
            }}>
            {notifty === true ? (
              <Icon
                name="delete-outline"
                type="MaterialCommunityIcons"
                style={{fontSize: 60, color: '#F54D83'}}
              />
            ) : (
              <Text style={{fontSize: 20, color: '#BE0909'}}>Warning</Text>
            )}
          </View>

          {notifty === true ? (
            <View
              style={{
                width: '100%',
                marginTop: 20,
                alignItems: 'center',
              }}>
              <View
                style={{
                  width: 220,
                  height: 58,
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <Text style={{fontSize: 20, textAlign: 'center'}}>
                  Account deleted successfully
                </Text>
              </View>
              <TouchableOpacity
                style={styles.paymentSuccesBtn}
                onPress={onDelete}>
                <Text style={{fontSize: 15, color: 'white'}}>Continue</Text>
              </TouchableOpacity>
            </View>
          ) : (
            <>
              <View
                style={{
                  width: '100%',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginTop: 20,
                  height: 52,
                }}>
                <Text
                  style={{fontSize: 20, color: '#000000', textAlign: 'center'}}>
                  Are you sure to Delete your account
                </Text>
              </View>
              <View
                style={{
                  width: '100%',
                  flexDirection: 'row',
                  alignItems: 'center',
                  marginTop: 20,
                  justifyContent: 'space-evenly',
                }}>
                <TouchableOpacity
                  style={[
                    styles.btn2,
                    {
                      backgroundColor: 'white',
                    },
                  ]}
                  activeOpacity={0.9}
                  onPress={OBonPress}>
                  <Text
                    style={{
                      fontSize: 15,
                      color: '#F54D83',
                    }}>
                    No
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.btn2}
                  activeOpacity={0.9}
                  onPress={() => {
                    setNotify(true);
                  }}>
                  <Text style={{fontSize: 15, color: '#ffff'}}>Yes</Text>
                </TouchableOpacity>
              </View>
            </>
          )}
        </View>
      )}

      {privacy && (
        <View style={{width: '90%', height: '100%', alignSelf: 'center'}}>
          <View
            style={{
              width: '100%',
              alignItems: 'center',
              justifyContent: 'center',
              marginTop: 20,
            }}>
            <Text style={{fontSize: 20, color: '#615C5C', fontWeight: 'bold'}}>
              {privacyText || 'Privacy Policy'}
            </Text>
          </View>
          <View
            style={{
              width: '90%',
              height: 413,
              alignSelf: 'center',
              alignItems: 'center',
              justifyContent: 'center',
              marginTop: 30,
            }}>
            <Text
              style={{
                fontSize: 15,
                color: '#000',
                letterSpacing: 1.56,
              }}>
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erat, sed diam voluptua. At vero eos et accusam et justo duo
              dolores et ea rebum. Stet clita kasd gubergren, no sea takimata
              sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit
              amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor
              invidunt ut labore et dolore magna aliquyam erat, sed diam
              voluptua. At vero eos et accusam et justo duo dolores et ea rebum.
              Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum
              dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing
              Elitr.
            </Text>
          </View>
          <LinearGradient
            colors={['#F52667', '#F54F84']}
            style={styles.loginBtn}>
            <AppButton label="Close" onPress={OBonPress} />
          </LinearGradient>
        </View>
      )}
    </Overlay>
  );
};
export {CustomPopup};

const styles = StyleSheet.create({
  headerBtn: {
    width: 89.69,
    height: 36.94,
    borderRadius: 3,
    margin: 5,
    justifyContent: 'space-evenly',
    alignItems: 'center',
    flexDirection: 'row',
    elevation: 10,
  },
  midBody: {
    width: '90%',
    alignSelf: 'center',
    height: 120,
    marginTop: 66,
  },
  footer: {
    width: '100%',
    height: 50,
    borderTopWidth: 0.5,
    borderTopColor: 'grey',
    borderBottomWidth: 0.5,
    borderBottomColor: 'black',
  },
  footerData: {
    flexDirection: 'row',
    height: '100%',
    width: 100,
    alignItems: 'center',
    justifyContent: 'space-between',
    marginLeft: 30,
  },
  footerView: {
    width: '100%',
    height: 50,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  footerLeftData: {
    marginLeft: 10,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: 150,
  },
  footerRightData: {
    width: 99,
    height: 39,
    backgroundColor: 'red',
    borderRadius: 5,
    marginRight: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },

  btn: {
    borderWidth: 1,
    borderColor: '#F54D83',
    width: 112,
    height: 38,
    borderRadius: 5,
    backgroundColor: '#F54D83',
    alignItems: 'center',
    justifyContent: 'center',
  },

  btn2: {
    borderWidth: 1,
    borderColor: '#F54D83',
    width: 90,
    height: 38,
    borderRadius: 5,
    backgroundColor: '#F54D83',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paymentSuccesBtn: {
    marginTop: 20,
    width: '80%',
    alignSelf: 'center',
    height: 38,
    backgroundColor: '#F54D83',
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  forgetPasswordBtn: {
    marginTop: 30,
    width: '60%',
    alignSelf: 'center',
    height: 38,
    backgroundColor: '#F54D83',
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  loginBtn: {
    position: 'absolute',
    bottom: 10,
    width: 223,
    alignSelf: 'center',
    height: 56,
    borderRadius: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },
  loginBtn2: {
    marginTop: 15,
    width: '60%',
    alignSelf: 'center',
    height: 45,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
