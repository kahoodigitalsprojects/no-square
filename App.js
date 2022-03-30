import React from 'react';
import MyStack from './src/navigation/stack';
import Toast from 'react-native-toast-message';
import {MenuProvider} from 'react-native-popup-menu';

const App = props => {
  return (
    <>
      <MenuProvider>
        <MyStack {...props} />
      </MenuProvider>
      <Toast />
    </>
  );
};

export default App;
