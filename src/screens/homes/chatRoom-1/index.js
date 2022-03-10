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
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import LinearGradient from 'react-native-linear-gradient';

import {
  AppButton,
  FormInput,
  HomeHeader,
  TextWithLine,
} from '../../../components';
import {Themes, Images} from './../../../constants';

const CreactChatRoom = props => {
  const statusData = [
    {
      imageUri: Images.Backgrounds.Ellipse2,
      Text: 'Yu Chin',
    },
    {
      imageUri: Images.Backgrounds.Ellipse3,
      Text: 'Maria',
    },
    {
      imageUri: Images.Backgrounds.Ellipse4,
      Text: 'Alexa',
    },
    {
      imageUri: Images.Backgrounds.Ellipse4,
      Text: 'Alexa',
    },
  ];
  const [userInfo, setUserInfo] = useState({
    roomTitle: '',
    roomMate: '',
  });

  const [state, setState] = useState({
    focus: false,
  });
  return (
    <SafeAreaView style={styles.screenContainer}>
      <StatusBar backgroundColor={'white'} barStyle="dark-content" />
      <ScrollView
        keyboardShouldPersistTaps="handled"
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{flexGrow: 1}}>
        <View style={{marginTop: 40}}>
          <HomeHeader
            navigation={props.navigation}
            setting
            text={'Create Chat Rooms'}
            left
            onPress={() => props.navigation.goBack()}
          />

          <View style={styles.mainBody}>
            <View
              style={{marginVertical: 20, width: '90%', alignSelf: 'center'}}>
              <Text
                style={{
                  alignSelf: 'flex-start',
                  fontSize: 14,
                  color: Themes.textColors.blackText,
                }}>
                Room Title
              </Text>
              <View
                style={{
                  marginVertical: 8,
                  borderColor: state.focus === 'roomTitle' ? '#F54F84' : 'grey',
                  borderWidth: state.focus === 'roomTitle' ? 1 : 0.5,
                  borderRadius: 8,
                }}>
                <FormInput
                  borderW={1}
                  borderC={'#F52667'}
                  autoCapitalize="none"
                  value={userInfo.roomTitle}
                  onChangeText={value =>
                    setUserInfo({...userInfo, roomTitle: value})
                  }
                  placeHolder="Type Title"
                  onFocus={() => setState({...state, focus: 'roomTitle'})}
                  onBlur={() => setState({...state, focus: ''})}
                />
              </View>
            </View>

            <View
              style={{marginVertical: 10, width: '90%', alignSelf: 'center'}}>
              <Text
                style={{
                  alignSelf: 'flex-start',
                  fontSize: 14,
                  color: Themes.textColors.blackText,
                }}>
                Add Room Mate
              </Text>
              <View
                style={{
                  marginVertical: 8,
                  borderColor: state.focus === 'roomMate' ? '#F54F84' : 'grey',
                  borderWidth: state.focus === 'roomMate' ? 1 : 0.5,
                  borderRadius: 8,
                }}>
                <FormInput
                  borderW={1}
                  borderC={'#F52667'}
                  autoCapitalize="none"
                  value={userInfo.roomMate}
                  onChangeText={value =>
                    setUserInfo({...userInfo, roomMate: value})
                  }
                  placeHolder="@Username"
                  onFocus={() => setState({...state, focus: 'roomMate'})}
                  onBlur={() => setState({...state, focus: ''})}
                />
              </View>
            </View>
            <TextWithLine
              left={0}
              text="Total Roommates : 4"
              lineColor={'#F54F84'}
              fontWeight="normal"
            />
            <View style={styles.header}>
              <ScrollView
                showsHorizontalScrollIndicator={false}
                horizontal={true}
                contentContainerStyle={{flexGrow: 1}}>
                {statusData.map((item, i) => {
                  return (
                    <View
                      key={i}
                      style={{
                        alignItems: 'center',
                        justifyContent: 'center',
                      }}>
                      <TouchableOpacity
                        style={styles.statusBox}
                        activeOpacity={0.8}
                        onPress={() => {
                          {
                            props.navigation.navigate('Statics', {
                              screen: 'status',
                            });
                          }
                        }}>
                        <ImageBackground
                          source={item.imageUri}
                          style={{width: 65, height: 65}}>
                          {item.Text === 'You' ? (
                            <TouchableOpacity
                              style={styles.plusBtn}
                              activeOpacity={0.8}>
                              <Image
                                source={item.plusIcon}
                                style={{width: '100%', height: '100%'}}
                              />
                            </TouchableOpacity>
                          ) : null}
                        </ImageBackground>
                      </TouchableOpacity>
                      <Text>{item.Text}</Text>
                    </View>
                  );
                })}
              </ScrollView>
            </View>
            <TextWithLine
              left={0}
              text="Suggested Roommate"
              lineColor={'#F54F84'}
              fontWeight="normal"
            />

            <View style={styles.header}>
              <ScrollView
                showsHorizontalScrollIndicator={false}
                horizontal={true}
                contentContainerStyle={{flexGrow: 1}}>
                {statusData.map((item, i) => {
                  return (
                    <View
                      key={i}
                      style={{
                        alignItems: 'center',
                        justifyContent: 'center',
                      }}>
                      <TouchableOpacity
                        style={styles.statusBox}
                        activeOpacity={0.8}
                        onPress={() => {
                          {
                            props.navigation.navigate('Statics', {
                              screen: 'status',
                            });
                          }
                        }}>
                        <ImageBackground
                          source={item.imageUri}
                          style={{width: 65, height: 65}}>
                          {item.Text === 'You' ? (
                            <TouchableOpacity
                              style={styles.plusBtn}
                              activeOpacity={0.8}>
                              <Image
                                source={item.plusIcon}
                                style={{width: '100%', height: '100%'}}
                              />
                            </TouchableOpacity>
                          ) : null}
                        </ImageBackground>
                      </TouchableOpacity>
                      <Text>{item.Text}</Text>
                    </View>
                  );
                })}
              </ScrollView>
            </View>
            {userInfo.roomMate === '' ? null : (
              <View
                style={{
                  width: '100%',
                  marginTop: 80,
                }}>
                <LinearGradient
                  colors={['#F52667', '#F54F84']}
                  style={styles.loginBtn}>
                  <AppButton
                    label="Create"
                    onPress={() => {
                      props.navigation.navigate('subcrption');
                    }}
                  />
                </LinearGradient>
              </View>
            )}
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default CreactChatRoom;

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    backgroundColor: 'white',
  },
  mainBody: {
    width: '90%',
    height: '100%',
    alignSelf: 'center',
    paddingBottom: 30,
  },
  header: {
    width: '100%',
    height: 100,
    marginTop: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  statusBox: {
    marginLeft: 5,
    width: 80,
    height: 80,
    borderRadius: 50,
    backgroundColor: 'white',
    borderWidth: 3,
    borderColor: '#F54F84',
    alignItems: 'center',
    justifyContent: 'center',
  },
  plusBtn: {
    width: 24,
    height: 24,
    borderRadius: 24,
    borderWidth: 3,
    borderColor: '#F54F84',
    position: 'absolute',
    bottom: -3,
    right: -8,
    backgroundColor: 'white',
  },
  loginBtn: {
    width: '50%',
    alignSelf: 'center',
    height: 38,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
