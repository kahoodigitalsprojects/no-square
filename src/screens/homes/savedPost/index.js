import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {
  ImageBackground,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import {HomeHeader, TextWithLine} from '../../../components';
import {View, Text} from 'react-native';
import {Images} from '../../../constants';
import {Icon} from 'native-base';

const SavedPostBox = () => {
  return (
    <View style={styles.postContainer}>
      <View style={styles.postDetail}>
        <View style={styles.postImage}>
          <ImageBackground
            style={{width: '100%', height: '100%'}}
            source={Images.Backgrounds.box1}>
            <View style={styles.postLength}>
              <Text style={{fontSize: 12, textAlign: 'center', color: '#fff'}}>
                13:00 Min
              </Text>
            </View>
          </ImageBackground>
        </View>
        <View style={styles.postInfo}>
          <View>
            <Text style={{color: '#000', fontSize: 15, fontWeight: 'bold'}}>
              Video Title
            </Text>
          </View>
          <View style={{paddingTop: 6}}>
            <Text style={styles.postLiteText}>Jon Doe</Text>
          </View>
          <View style={{paddingTop: 6}}>
            <Text style={styles.postLiteText}>Saved 2W Ago</Text>
          </View>
        </View>
      </View>

      <View style={styles.deleteContainer}>
        <TouchableOpacity activeOpacity={0.7} style={styles.deleteButton}>
          <Icon
            name="delete-sweep"
            type="MaterialCommunityIcons"
            style={{color: '#F779A1', fontSize: 20}}
          />
          <View style={{paddingTop: 2}}>
            <Text style={{color: '#000', fontSize: 10}}>Delete</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const SavedPost = props => {
  return (
    <>
      <SafeAreaView style={styles.container}>
        {/* ADD Header HERE */}

        <View style={{marginBottom: 20}}>
          <HomeHeader
            onPress={() => props.navigation.goBack()}
            setting
            left
            text={'Saved Post'}
            textColor={'#191919B8'}
            fontSize={20}
          />
        </View>

        <ScrollView
          contentContainerStyle={{flexGrow: 1}}
          showsVerticalScrollIndicator={false}>
          <View style={styles.screenBody}>
            {/* <View style={styles.headerText}>
              <Text style={styles.headText}>Saved Post</Text>
            </View> */}

            <View style={{marginBottom: 10}}>
              <TextWithLine text="Most Recent" left={0} />
            </View>

            {['', '', ''].map((item, i) => (
              <SavedPostBox />
            ))}

            <View
              style={{
                height: 50,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <TextWithLine text="Last Month" left={0} />
            </View>

            {['', ''].map((item, i) => (
              <SavedPostBox />
            ))}
            <TouchableOpacity
              activeOpacity={0.7}
              style={{
                width: '100%',
                justifyContent: 'center',
                alignItems: 'center',
                paddingTop: 40,
              }}>
              <Text
                style={{color: '#F54F84', fontSize: 15, textAlign: 'center'}}>
                See More...
              </Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

export default SavedPost;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },

  screenBody: {
    width: '90%',
    alignSelf: 'center',
    paddingBottom: 10,
  },

  headerText: {
    width: '100%',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 10,
  },

  headText: {
    color: '#191919B8',
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },

  postContainer: {
    width: '100%',
    height: 85,
    // backgroundColor: '#F5F5F5',
    marginVertical: 10,
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  postDetail: {
    width: '80%',
    height: '100%',
    justifyContent: 'flex-start',
    alignItems: 'center',
    flexDirection: 'row',
  },

  deleteContainer: {
    height: '100%',
    width: '20%',
    alignItems: 'flex-end',
    justifyContent: 'center',
    paddingRight: 10,
  },

  deleteButton: {
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },

  postImage: {
    width: 99,
    height: 85,
    backgroundColor: 'pink',
    borderRadius: 10,
  },

  postLength: {
    position: 'absolute',
    bottom: 0,
    width: '60%',
    alignSelf: 'center',
    height: 20,
    backgroundColor: '#000',
    justifyContent: 'center',
    alignItems: 'center',
  },

  postInfo: {
    height: '80%',
    paddingLeft: 15,
    justifyContent: 'center',
  },

  postLiteText: {color: '#000', fontSize: 12, fontWeight: '300'},
});
