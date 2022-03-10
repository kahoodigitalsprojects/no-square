import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {Icon} from 'native-base';
import {AppText} from '..';
import {Images, theme} from '../../constants';

const UserComment = ({onReply, nested, isLikeButton}) => {
  return (
    <>
      <View style={styles.commentContainer}>
        <View style={styles.commentImageComponent}>
          <View style={styles.commenterImage}>
            <Image
              source={Images.Backgrounds.postProfile}
              style={{width: '100%', height: '100%'}}
            />
          </View>
        </View>
        <View style={styles.commentTextComponent}>
          <View style={styles.commenterName}>
            <AppText text={'Amber Grey'} bold size={14} Spacing />
          </View>
          <AppText
            text={'Lorem ipsum dolor sit amet, consetetur sadipscing 😍🥺 '}
            color={'grey'}
            size={10}
            // paddingT
          />
          <View
            style={{
              flexDirection: 'row',
            }}>
            {isLikeButton && (
              <TouchableOpacity
                activeOpacity={0.7}
                onPress={onReply}
                style={(styles.commentComponentReply, [{}])}>
                <AppText text={'Like'} color={'grey'} />
              </TouchableOpacity>
            )}
            <TouchableOpacity
              activeOpacity={0.7}
              onPress={onReply}
              style={styles.commentComponentReply}>
              <AppText text={'Like'} color={'#2D3F7B'} />
            </TouchableOpacity>
            <TouchableOpacity
              activeOpacity={0.7}
              onPress={onReply}
              style={styles.commentComponentReply2}>
              <AppText text={'Reply'} color={'#2D3F7B'} />
            </TouchableOpacity>

            <View
              activeOpacity={0.7}
              onPress={onReply}
              style={styles.commentTime}>
              <AppText text={'2 Days Ago'} color={'#2D3F7B'} size={9} />
            </View>
          </View>
        </View>
      </View>

      {nested && (
        <View style={{width: '90%', alignSelf: 'center'}}>
          <View style={styles.commentContainer2}>
            <View style={styles.commentImageComponent}>
              <View style={styles.commenterImage}>
                <Image
                  source={Images.Backgrounds.postProfile}
                  style={{width: '100%', height: '100%'}}
                />
              </View>
            </View>
            <View style={styles.commentTextComponent2}>
              <View style={styles.commenterName}>
                <AppText text={'Amber Grey '} bold size={14} Spacing />
              </View>
              <AppText
                text="lorem ipsum constreif cvvcosfd "
                color="grey"
                size={11}
              />
            </View>
          </View>
        </View>
      )}
    </>
  );
};

export {UserComment};

const styles = StyleSheet.create({
  commentContainer: {
    width: '100%',
    flexDirection: 'row',
    height: 78,
    backgroundColor: '#B9B3B333',
    alignItems: 'center',
    borderRadius: 30,
  },
  commentContainer2: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    height: 78,
    alignItems: 'center',
    borderRadius: 30,
  },

  commentImageComponent: {
    width: '15%',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: -5,
  },

  commenterImage: {
    width: 40,
    height: 40,
    borderRadius: 100,
    overflow: 'hidden',
  },

  commenterName: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  commentTextComponent2: {
    width: '84%',
    flexDirection: 'row',
    alignItems: 'center',
  },
  commentTextComponent: {
    width: '84%',
  },

  commentComponentReply: {
    marginTop: 0,
    padding: 2,
  },
  commentComponentReply2: {marginTop: 0, padding: 2, marginLeft: 5},
  commentTime: {
    position: 'absolute',
    right: 10,
  },
});
