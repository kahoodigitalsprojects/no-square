import React from 'react';
import MyTabs from '../bottomTab';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {CustomDrawer} from './../../components';
import {Homes, Statics} from '../stack';
import {Dimensions} from 'react-native';

const Drawer = createDrawerNavigator();

function MyDrawer() {
  return (
    <Drawer.Navigator
      screenOptions={{
        drawerStyle: {
          backgroundColor: 'transparent',
          overflow: 'hidden',
          width: Dimensions.get('window').width / 1.5,
        },
      }}
      drawerContent={props => <CustomDrawer {...props} />}>
      <Drawer.Screen
        name="MyTabs"
        component={MyTabs}
        options={{headerShown: false}}
      />

      {/* <Drawer.Screen
        name="Homes"
        component={Homes}
        options={{headerShown: false}}
      /> */}

      <Drawer.Screen
        name="Statics"
        component={Statics}
        options={{headerShown: false}}
      />
    </Drawer.Navigator>
  );
}

export default MyDrawer;
