import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ImageBackground,
  Image,
} from 'react-native';
import {Images, Themes} from '../../constants';
import {Icon} from 'native-base';

const PostComponent = props => {
  const {
    onProfilePress,
    onPostPress,
    onLikePress,
    onCommentPress,
    onToolTipPress,
    onSharePress,
    onMorePress,
    post,
    onBookMarkPress,
  } = props;

  //   const [tooltipVisible, setTooltipVisible] = React.useState(false);

  return (
    <View style={styles.PostVIew}>
      <View style={styles.postHeader}>
        <View style={styles.postHeaderContentLeft}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <TouchableOpacity
              onPress={onProfilePress}
              style={styles.postHeaderImg}
              activeOpacity={0.8}>
              <Image
                source={Images.Backgrounds.profileImg}
                style={{width: '100%', height: '100%'}}
              />

              {/* <ImageBackground
                source={Images.Backgrounds.profileImg}
                style={{
                  height: '100%',
                  height: '100%',
                }}></ImageBackground> */}
            </TouchableOpacity>
            <View>
              <Text style={styles.postHeaderContentRight}>{post.name}</Text>
              <Text style={{fontSize: 9, color: '#BABDC9', paddingLeft: 10}}>
                <Image
                  source={Images.Backgrounds.globe}
                  style={{width: 8.1, height: 8.1}}
                />
                3 hours ago
              </Text>
            </View>
          </View>

          <View style={styles.postIcon}>
            <TouchableOpacity
              onPress={onBookMarkPress}
              style={styles.dotLine}
              activeOpacity={0.9}>
              <Icon
                style={{fontSize: 15, color: '#969EB7'}}
                borderColor="#969EB7"
                borderWidth={1}
                name={'bookmark'}
                type={'FontAwesome'}
              />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                onToolTipPress(props.index);
              }}
              style={styles.dotLine}
              activeOpacity={0.9}>
              <Icon
                name="dots-three-horizontal"
                type="Entypo"
                style={{fontSize: 15}}
              />
            </TouchableOpacity>
          </View>
        </View>
        <Text
          style={{
            width: '100%',
            fontSize: 12,
            color: '#444D6E',
          }}>
          {post.text}
        </Text>
        <Text style={{color: '#F54F84'}}>See more</Text>

        <TouchableOpacity
          activeOpacity={1}
          onPress={onPostPress}
          style={{width: '100%', height: 217}}>
          <Image
            style={{width: '100%', height: '100%', borderRadius: 14}}
            source={post.image}
          />
        </TouchableOpacity>
        <Text style={{fontSize: 10, color: '#747EA0', marginTop: 5}}>
          30 comments · 5 shares
        </Text>
        <View style={{width: '100%', height: 100.9}}>
          <View style={styles.icons}>
            <View style={{flexDirection: 'row'}}>
              <TouchableOpacity style={styles.likeBtn} activeOpacity={0.7}>
                <Image
                  source={Images.Backgrounds.like}
                  style={{width: 14.71, height: 13.24}}
                />
              </TouchableOpacity>
              <TouchableOpacity style={styles.iconBtn} activeOpacity={0.7}>
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
                source={post.commentProfile}
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
                {post.commentName}
              </Text>
              <Text>Lorem ipsum dolor sit amet, consetetur</Text>
              <View style={{flexDirection: 'row'}}>
                <TouchableOpacity activeOpacity={0.7}>
                  <Text style={{color: '#2D3F7B', fontSize: 9}}>Like</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{marginLeft: 5}} activeOpacity={0.7}>
                  <Text style={{color: '#2D3F7B', fontSize: 9}}>Reply</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      </View>
      {post.tooltip && (
        <View style={styles.postToolDrop}>
          {['Report', 'Block', 'Hide'].map((item, index) => {
            return (
              <TouchableOpacity
                onPress={() => {
                  onToolTipPress();
                }}
                style={{
                  width: '100%',
                  height: 25,
                  zIndex: 99998999,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Text style={{color: 'grey'}}> {item} Post</Text>
              </TouchableOpacity>
            );
          })}
        </View>
      )}
    </View>
  );
};

export {PostComponent};

const styles = StyleSheet.create({
  postToolDrop: {
    minWidth: 100,
    zIndex: 1000,
    minHeight: 50,
    position: 'absolute',
    backgroundColor: '#EFF2F7',
    top: 40,
    borderRadius: 14,
    right: '5%',
    padding: 10,
  },

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
    zIndex: 1000,
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
  postIcon: {
    height: 22.64,
    width: 50,
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  dotLine: {
    width: 22.64,
    height: 22.64,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#EFF2F7',
    borderRadius: 20,
  },
  savedImage: {
    width: 12.68,
    height: 3.62,
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
