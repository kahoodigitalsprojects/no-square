import React, {useState} from 'react';
import {SwipeListView} from 'react-native-swipe-list-view';
import {
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
  ImageBackground,
  Dimensions,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Icon, Item} from 'native-base';
import {TouchableWithoutFeedback} from 'react-native';
import {Themes, Images} from './../../constants';
const VisibleItem = props => {
  const {data} = props;
  return (
    // <View style={[styles.rowfront, {height: 60}]}>
    //   <View style={styles.chatBox}>
    //     <View
    //       style={{
    //         flexDirection: 'row',
    //         alignItems: 'center',
    //         justifyContent: 'center',
    //       }}>
    //       <View style={styles.chatProfile}>
    //         <Image
    //           source={Images.Backgrounds.chatProfile2}
    //           style={{width: '100%', height: '100%'}}
    //         />
    //         <View
    //           style={{
    //             width: 13,
    //             height: 13,
    //             borderRadius: 14,
    //             backgroundColor: '#24A206',
    //             position: 'absolute',
    //             top: 0,
    //             right: 0,
    //           }}></View>
    //       </View>
    //       <View>
    //         <Text style={styles.profileName}>ifhfhiowfh</Text>
    //         <Text style={styles.profileTitle}></Text>
    //       </View>
    //     </View>
    //   </View>
    // </View>
    <View style={styles.rowFront}>
      <Text>I am {data.item.text} in a SwipeListView</Text>
    </View>
  );
};

const HiddenItemWithActions = props => {
  const {rightActionActivated, swipeAnimatedValue, data} = props;
  return (
    <View style={styles.rowBack}>
      {/* <TouchableWithoutFeedback>
        <View
          style={[
            styles.backBtn,
            styles.backRightBtn,
            styles.backRightBtnLeft,
            {width: 60},
          ]}>
          <View style={styles.backBtnInner}>
            <Icon name="left" type="AntDesign" />
            <Text>Delete</Text>
          </View>
        </View>
      </TouchableWithoutFeedback>
      <TouchableWithoutFeedback>
        <View
          style={[
            styles.backBtn,
            styles.backRightBtn,
            styles.backRightBtnLeft,
            {width: 60},
          ]}>
          <View style={styles.backBtnInner}>
            <Icon name="right" type="AntDesign" />
            <Text>block</Text>
          </View>
        </View>
      </TouchableWithoutFeedback> */}
      <Text>JACKIE</Text>
      <Text>CHAN</Text>
    </View>
  );
};

{
  /* {ChatData.map((item, i) => {
              return (
                <View style={styles.chatBox}>
                  <View
                    style={{
                      flexDirection: 'row',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}>
                    <View style={styles.chatProfile}>
                      <Image
                        source={item.image}
                        style={{width: '100%', height: '100%'}}
                      />
                      {item.text === 'Helan' ||
                      item.text === 'Marcia Dor' ||
                      item.text === 'Lucy Grey' ? (
                        <View
                          style={{
                            width: 13,
                            height: 13,
                            borderRadius: 14,
                            backgroundColor: '#24A206',
                            position: 'absolute',
                            top: 0,
                            right: 0,
                          }}></View>
                      ) : null}
                    </View>

                    <View>
                      <Text style={styles.profileName}>{item.text}</Text>
                      <Text style={styles.profileTitle}>{item.title}</Text>
                    </View>
                  </View> */
}

{
  /* <View
                    style={{alignItems: 'center', justifyContent: 'center'}}>
                    <Text style={{fontSize: 10}}>20 min</Text>
                    <Text style={{fontSize: 12}}>20k Members</Text>
                  </View> */
}
{
  /* </View>
              );
            })} */
}

const ChatWithDeleteBlockBtn = () => {
  const [state, setState] = useState({
    active: true,
    listViewData: [{}],
  });

  const [list, setList] = useState([
    [...new Array(20)].map((_, index) => ({
      key: `${index}`,
      text: `This is item Number ${index}`,
    })),
  ]);
  const renderItem = (data, rowMap) => (
    <VisibleItem data={data} rowMap={rowMap} />
  );
  const renderHiddenItem = (data, rowMap) => (
    <HiddenItemWithActions data={data} rowMap={rowMap} />
  );
  return (
    <View style={{flex: 0.5, marginTop: 20}}>
      <SwipeListView
        data={list}
        renderItem={renderItem}
        renderHiddenItem={renderHiddenItem}
      />
    </View>
  );
};

export {ChatWithDeleteBlockBtn};

const styles = StyleSheet.create({
  rowfront: {
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: 'red',
    borderBottomColor: 'gray',
    width: '100%',
  },
  rowBack: {
    // height: 60,
    flexDirection: 'row',
    // width: '100%',
  },
  backBtn: {position: 'absolute', bottom: 0, top: 0, justifyContent: 'center'},
  backRightBtn: {},
  backRightBtnLeft: {right: 60, backgroundColor: 'blue'},
  backRightBtnRight: {right: 60, backgroundColor: 'red'},
  backBtnInner: {alignItems: 'center'},
  backBtnText: {color: 'white', marginTop: 2},
  profileTitle: {
    marginLeft: 10,
    fontSize: 12,
    color: '#707070',
  },
  activeLine: {
    width: '65%',
    borderBottomWidth: 1.5,
    borderColor: '#707070',
    alignSelf: 'center',
  },
  chatBox: {
    width: '100%',
    flexDirection: 'row',
    marginTop: 20,
    alignSelf: 'center',
    justifyContent: 'space-between',
  },
  chatProfile: {width: 60, height: 60},
  profileName: {
    fontSize: 15,
    color: '#6D6B6B',
    marginLeft: 10,
    fontWeight: '600',
  },
});
