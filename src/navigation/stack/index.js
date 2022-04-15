import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import splash from '../../screens/auth/splash';
import login from '../../screens/auth/login';
import home from '../../screens/homes/home';
import signup from '../../screens/auth/signup';
import mainAuth from '../../screens/auth/mainAuth';
import MyTabs from '../bottomTab';
import Splash2 from '../../screens/auth/splash2';
import MyDrawer from '../Drawer';
import Connections from '../../screens/homes/connections';
import Settings from '../../screens/homes/settings';
import NotificationPrivacy from '../../screens/homes/NotificationPrivacy';
import privacySetting from '../../screens/homes/privacySetting';
import ChangePassword from '../../screens/auth/changePassword';
import FitnessGame from '../../screens/homes/fitnessGame';
import Blogs from '../../screens/homes/blogs';
import Status from '../../screens/homes/status';
import InnerPost from '../../screens/homes/innerPost';
import MyProfile from '../../screens/homes/myProfile';
import BusinessChat from '../../screens/homes/businessChat';
import PaymentMethod from '../../screens/homes/paymentMethod';
import EditProfile from '../../screens/homes/editProfile';
import SearchPage from '../../screens/homes/searchPage';
import ForgetPassword from '../../screens/auth/forgetPassword';
import Subcrption from '../../screens/homes/subscrption';
import NotificationPage from '../../screens/homes/notificationPage';
import SavedPost from '../../screens/homes/savedPost';
import NotificationSettings from '../../screens/homes/notificationSettings';
import ChatRoom from '../../screens/homes/chatRoom';
import Chat from '../../screens/homes/chat';
import Recording from '../../components/recording';
import AddStatus from '../../screens/homes/addStatus';
import Status3 from '../../screens/homes/status3';
import CreactChatRoom from '../../screens/homes/chatRoom-1';
import ContactUs from '../../screens/homes/contactUs';
import DeleteAccount from '../../screens/homes/deleteAccount';
import DeleteAccountConfirmation from '../../screens/homes/deleteAccountConfirmation';
import SubcriptionPlan from '../../screens/homes/subcriptionPlan';
import Messeges from '../../screens/homes/messeges';
import BusinessRoom from '../../screens/homes/businessRoom';
import {useSelector, useDispatch} from 'react-redux';
import CheckingCredentials from '../../screens/auth/CheckingCredentials';
import {isNewApp} from '../../slices/authSlice';

const Stack = createNativeStackNavigator();

const Auth = () => {
  const {isLogin, checkIsNewApp} = useSelector(state => state.auth);
  const dispatch = useDispatch();
  let scrn;
  let a = undefined;
  if (checkIsNewApp == a || (checkIsNewApp == true && isLogin == false)) {
    scrn = (
      <>
        <Stack.Screen
          name="splash"
          component={splash}
          options={{headerShown: false}}
        />

        <Stack.Screen
          name="splash2"
          component={Splash2}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="mainAuth"
          component={mainAuth}
          options={{headerShown: false}}
        />

        <Stack.Screen
          name="login"
          component={login}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="signup"
          component={signup}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="forgetPassword"
          component={ForgetPassword}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="subcrption"
          component={Subcrption}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="paymentMethod"
          component={PaymentMethod}
          options={{headerShown: false}}
        />
      </>
    );
    dispatch(isNewApp());
  } else {
    if (isLogin == false) {
      scrn(
        <>
          <Stack.Screen
            name="mainAuth"
            component={mainAuth}
            options={{headerShown: false}}
          />

          <Stack.Screen
            name="login"
            component={login}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="signup"
            component={signup}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="forgetPassword"
            component={ForgetPassword}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="subcrption"
            component={Subcrption}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="paymentMethod"
            component={PaymentMethod}
            options={{headerShown: false}}
          />
        </>,
      );
    } else {
      scrn = (
        <Stack.Screen
          name="CheckingCredentials"
          component={CheckingCredentials}
          options={{headerShown: false}}
        />
      );
    }
  }

  return <Stack.Navigator>{scrn}</Stack.Navigator>;
};

export const Homes = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="home"
        component={home}
        options={{headerShown: false}}
      />

      <Stack.Screen
        name="chatRoom"
        component={ChatRoom}
        options={{headerShown: false}}
      />

      <Stack.Screen
        name="connections"
        component={Connections}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="settings"
        component={Settings}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="notificationPrivacy"
        component={NotificationPrivacy}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="notificationSettings"
        component={NotificationSettings}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="savedPost"
        component={SavedPost}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="privacySetting"
        component={privacySetting}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="changePassword"
        component={ChangePassword}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="fitnessGame"
        component={FitnessGame}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="blogs"
        component={Blogs}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="status"
        component={Status}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="addStatus"
        component={AddStatus}
        options={{headerShown: false}}
      />

      <Stack.Screen
        name="createChatRoom"
        component={CreactChatRoom}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="contactUs"
        component={ContactUs}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="deleteAccount"
        component={DeleteAccount}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="deleteAccountConfirmation"
        component={DeleteAccountConfirmation}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="subcriptionPlan"
        component={SubcriptionPlan}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="messeges"
        component={Messeges}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="businessRoom"
        component={BusinessRoom}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export const Statics = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="finessGame"
        component={FitnessGame}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="status"
        component={Status}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="chat"
        component={Chat}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="recording"
        component={Recording}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="blogs"
        component={Blogs}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="chatRoom"
        component={ChatRoom}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="settings"
        component={Settings}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="notificationPrivacy"
        component={NotificationPrivacy}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="privacySetting"
        component={privacySetting}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="changePassword"
        component={ChangePassword}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="savedPost"
        component={SavedPost}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="connections"
        component={Connections}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="innerPost"
        component={InnerPost}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="notificationSettings"
        component={NotificationSettings}
        options={{headerShown: false}}
      />

      <Stack.Screen
        name="myProfile"
        component={MyProfile}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="businessChat"
        component={BusinessChat}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="paymentMethod"
        component={PaymentMethod}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="editProfile"
        component={EditProfile}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="searchPage"
        component={SearchPage}
        options={{headerShown: false}}
      />

      <Stack.Screen
        name="notificationPage"
        component={NotificationPage}
        options={{headerShown: false}}
      />

      <Stack.Screen
        name="addStatus"
        component={AddStatus}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="status3"
        component={Status3}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="createChatRoom"
        component={CreactChatRoom}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="contactUs"
        component={ContactUs}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="deleteAccount"
        component={DeleteAccount}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="deleteAccountConfirmation"
        component={DeleteAccountConfirmation}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="subcriptionPlan"
        component={SubcriptionPlan}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="businessRoom"
        component={BusinessRoom}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

const MyStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Auth"
          component={Auth}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="MyDrawer"
          component={MyDrawer}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Homes"
          component={Homes}
          options={{headerShown: false}}
        />

        <Stack.Screen
          name="status"
          component={Status}
          options={{headerShown: false}}
        />

        <Stack.Screen
          name="connections"
          component={Connections}
          options={{headerShown: false}}
        />

        <Stack.Screen
          name="settings"
          component={Settings}
          options={{headerShown: false}}
        />

        <Stack.Screen
          name="finessGame"
          component={FitnessGame}
          options={{headerShown: false}}
        />

        <Stack.Screen
          name="chatRoom"
          component={ChatRoom}
          options={{headerShown: false}}
        />

        <Stack.Screen
          name="savedPost"
          component={SavedPost}
          options={{headerShown: false}}
        />

        <Stack.Screen
          name="contactUs"
          component={ContactUs}
          options={{headerShown: false}}
        />

        <Stack.Screen
          name="myProfile"
          component={MyProfile}
          options={{headerShown: false}}
        />

        {/* <Stack.Screen
          name="MyTabs"
          component={MyTabs}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Statics"
          component={Statics}
          options={{headerShown: false}}
        /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MyStack;
