/* eslint-disable prettier/prettier */
import React from 'react';
import MyStack from './src/navigation/stack';
import Toast from 'react-native-toast-message';
import {MenuProvider} from 'react-native-popup-menu';
import { Provider } from 'react-redux';
import {store} from './src/store.js';
import { PersistGate } from 'redux-persist/integration/react';
import { persistStore } from 'redux-persist';

let persistor = persistStore(store);

const App = props => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
    <>
      <MenuProvider>
        <MyStack {...props} />
      </MenuProvider>
      <Toast />
    </>
    </PersistGate>
    </Provider>
  );
};

export default App;
