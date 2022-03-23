import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import {CustomTabBar} from '../../components';
import ChatRoom from '../../screens/homes/chatRoom';
import {Homes} from '../stack';
import Search from '../../screens/homes/search';
import Connections from '../../screens/homes/connections';
import Home from '../../screens/homes/home';
import Messeges from '../../screens/homes/messeges';

const Tab = createBottomTabNavigator();

const MyTabs = () => {
  return (
    <Tab.Navigator tabBar={props => <CustomTabBar {...props} />}>
      <Tab.Screen name="home" component={Home} options={{headerShown: false}} />

      <Tab.Screen
        name="chatRoom"
        component={ChatRoom}
        options={{headerShown: false}}
      />

      <Tab.Screen
        name="messeges"
        component={Messeges}
        options={{headerShown: false}}
      />
      <Tab.Screen
        name="search"
        component={Search}
        options={{headerShown: false}}
      />
    </Tab.Navigator>
  );
};

export default MyTabs;
