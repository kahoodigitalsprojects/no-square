/* eslint-disable prettier/prettier */
import React from 'react';
import MyStack from './src/navigation/stack';
import Toast from 'react-native-toast-message';
import {MenuProvider} from 'react-native-popup-menu';
import { Provider } from 'react-redux';
import {store} from './src/store.js';

const App = props => {
  return (
    <Provider store={store}>
    <>
      <MenuProvider>
        <MyStack {...props} />
      </MenuProvider>
      <Toast />
    </>
    </Provider>
  );
};

export default App;
