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
import Toast from 'react-native-toast-message';
import {
  FormInput,
  AppButton,
  CheckBox,
  Header,
  HomeHeader,
  SearchBar,
} from '../../../components';
import {Themes, Images} from './../../../constants';
import {Icon} from 'native-base';
const Home = props => {
  const {navigation} = props;
  const statusData = [
    {
      imageUri: Images.Backgrounds.Ellipse1,
      Text: 'You',
      plusIcon: Images.Pictures.plusIcon,
      props: 'status',
    },
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
    {
      imageUri: Images.Backgrounds.Ellipse2,
      Text: 'Yu Chin',
    },
    {
      imageUri: Images.Backgrounds.Ellipse4,
      Text: 'Alexa',
    },
    {
      imageUri: Images.Backgrounds.Ellipse3,
      Text: 'Maria',
    },
  ];

  const Post = [
    {
      image: Images.Backgrounds.postImage,
      text: 'Lorem ipsum dolor sit amet, consetetur sadipscing 🥺',
      prop: 'innerPost',
      name: ' Daniela Fernández Ramos',
      commentProfile: Images.Backgrounds.commentProfile,
      commentName: 'Carolyn Gordon',
    },
    {
      image: Images.Backgrounds.postImage2,
      prop: 'innerPost',
      text: 'Lorem ipsum dolor sit amet, consetetur sadipscing 🥺',
      name: ' Daniela Fernández Ramos',
      commentProfile: Images.Backgrounds.Profile,
      commentName: 'Amber Gray',
    },
  ];

  return (
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
        <>
          <HomeHeader home navigation={props.navigation} {...props} notify />
          <TouchableOpacity
            onPress={() => {
              props.navigation.navigate('Statics', {screen: 'searchPage'});
            }}>
            <SearchBar />
          </TouchableOpacity>
          <View style={styles.container}>
            <View style={styles.mainContainer}>
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
                            props.navigation.navigate('Statics', {
                              screen: 'status',
                            });
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
              <Text style={styles.newFeed}>News Feed</Text>
              {Post.map((item, i) => {
                return (
                  <TouchableOpacity
                    style={styles.PostVIew}
                    activeOpacity={1}
                    onPress={() => {
                      props.navigation.navigate('Statics', {
                        screen: 'innerPost',
                      });
                    }}>
                    <View style={styles.postHeader}>
                      <View style={styles.postHeaderContentLeft}>
                        <View
                          style={{flexDirection: 'row', alignItems: 'center'}}>
                          <TouchableOpacity
                            style={styles.postHeaderImg}
                            activeOpacity={0.8}>
                            <ImageBackground
                              source={Images.Backgrounds.profileImg}
                              style={{
                                height: '100%',
                                height: '100%',
                              }}></ImageBackground>
                          </TouchableOpacity>
                          <View>
                            <Text style={styles.postHeaderContentRight}>
                              {item.name}
                            </Text>
                            <Text
                              style={{
                                fontSize: 9,
                                color: '#BABDC9',
                                paddingLeft: 10,
                              }}>
                              <Image
                                source={Images.Backgrounds.globe}
                                style={{width: 8.1, height: 8.1}}
                              />
                              {'  '}3 hours ago
                            </Text>
                          </View>
                        </View>

                        <View style={styles.dotLine}>
                          <Image
                            style={{width: 12.68, height: 3.6}}
                            source={Images.Backgrounds.dotLine}
                          />
                        </View>
                      </View>
                      <Text
                        style={{
                          width: '100%',
                          fontSize: 12,
                          color: '#444D6E',
                        }}>
                        {item.text}
                      </Text>
                      <Text style={{color: '#F54F84'}}>See more</Text>

                      <View
                        style={{
                          width: '100%',
                          height: 217,
                        }}>
                        <Image
                          style={{
                            width: '100%',
                            height: '100%',
                            borderRadius: 14,
                          }}
                          source={item.image}
                        />
                      </View>
                      <Text
                        style={{fontSize: 10, color: '#747EA0', marginTop: 5}}>
                        30 comments · 5 shares
                      </Text>
                      <View
                        style={{
                          width: '100%',
                          height: 100.9,
                        }}>
                        <View style={styles.icons}>
                          <View style={{flexDirection: 'row'}}>
                            <TouchableOpacity
                              style={styles.likeBtn}
                              activeOpacity={0.7}>
                              <Image
                                source={Images.Backgrounds.like}
                                style={{width: 14.71, height: 13.24}}
                              />
                            </TouchableOpacity>
                            <TouchableOpacity
                              style={styles.iconBtn}
                              activeOpacity={0.7}>
                              <Image
                                source={Images.Backgrounds.chat}
                                style={{width: 14.71, height: 13.24}}
                              />
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.iconBtn}>
                              <Image
                                source={Images.Backgrounds.move}
                                style={{width: 14.71, height: 13.24}}
                              />
                            </TouchableOpacity>
                          </View>
                          <View
                            style={{
                              flexDirection: 'row',
                              alignItem: 'center',
                              justifyContent: 'center',
                            }}>
                            <Text
                              style={{
                                marginTop: 2,
                                color: '#747EA0',
                                fontSize: 9,
                              }}>
                              1.2k
                            </Text>
                            <TouchableOpacity style={styles.rightIconBtn}>
                              <Icon
                                name="like"
                                type="Fontisto"
                                style={{
                                  fontSize: 8,
                                  alignSelf: 'center',
                                  color: 'white',
                                }}
                              />
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.rightIconBtn2}>
                              <Icon
                                name="heart"
                                type="AntDesign"
                                style={{
                                  fontSize: 8,
                                  alignSelf: 'center',
                                  color: 'white',
                                }}
                              />
                            </TouchableOpacity>
                          </View>
                        </View>

                        <View
                          style={{
                            flexDirection: 'row',
                            widht: '100%',
                            marginTop: 10,
                          }}>
                          <View style={{marginTop: 5}}>
                            <ImageBackground
                              source={item.commentProfile}
                              style={{
                                width: 25.11,
                                height: 25.11,
                              }}></ImageBackground>
                          </View>

                          <View style={{marginLeft: 10}}>
                            <Text
                              style={{
                                color: '#1B1B1B',
                                fontSize: 10,
                                fontWeight: 'bold',
                              }}>
                              {item.commentName}
                            </Text>
                            <Text>Lorem ipsum dolor sit amet, consetetur</Text>
                            <View style={{flexDirection: 'row'}}>
                              <TouchableOpacity activeOpacity={0.7}>
                                <Text style={{color: '#2D3F7B', fontSize: 9}}>
                                  Like
                                </Text>
                              </TouchableOpacity>
                              <TouchableOpacity
                                style={{marginLeft: 5}}
                                activeOpacity={0.7}>
                                <Text style={{color: '#2D3F7B', fontSize: 9}}>
                                  Reply
                                </Text>
                              </TouchableOpacity>
                            </View>
                          </View>
                        </View>
                      </View>
                    </View>
                  </TouchableOpacity>
                );
              })}
            </View>
          </View>
        </>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
  },
  mainContainer: {
    width: '90%',
    height: '100%',
    alignSelf: 'center',
    paddingBottom: 50,
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
  newFeed: {
    fontSize: 20,
    color: '#191919B8',
    alignSelf: 'center',
    marginTop: 10,
    fontWeight: 'bold',
  },
  PostVIew: {
    width: '100%',
    height: 442.03,
    backgroundColor: 'red',
    marginTop: 15,
    borderRadius: 24,
    backgroundColor: '#FFFFFF',
    elevation: 5,
    shadowOffset: 40,
  },
  postHeader: {width: '90%', height: '100%', alignSelf: 'center'},
  postHeaderContentLeft: {
    width: '100%',
    flexDirection: 'row',
    marginTop: 10,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  postHeaderImg: {
    width: 29.89,
    height: 29.89,
    borderWidth: 2,
    borderColor: '#F54F84',
    borderRadius: 29,
  },
  postHeaderContentRight: {
    fontSize: 13,
    paddingLeft: 10,
    fontWeight: 'bold',
    color: '#19295C',
  },
  dotLine: {
    width: 28.64,
    height: 22.64,
    alignItem: 'center',
    justifyContent: 'center',
  },
  icons: {
    flexDirection: 'row',
    marginTop: 10,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  likeBtn: {
    width: 30.8,
    height: 30.8,
    alignItem: 'center',
    justifyContent: 'center',
  },
  iconBtn: {
    width: 30.8,
    height: 30.8,
    alignItem: 'center',
    justifyContent: 'center',
    marginLeft: 10,
  },
  rightIconBtn: {
    width: 19.93,
    height: 19.93,
    alignItem: 'center',
    justifyContent: 'center',
    backgroundColor: '#1977F3',
    borderRadius: 15,
  },
  rightIconBtn2: {
    width: 19.93,
    height: 19.93,
    alignItem: 'center',
    justifyContent: 'center',
    backgroundColor: '#F31954',
    borderRadius: 15,
  },
});
