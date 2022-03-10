import React from 'react';
import MyStack from './src/navigation/stack';
import Toast from 'react-native-toast-message';

const App = props => {
  return (
    <>
      <MyStack {...props} />
      <Toast />
    </>
  );
};

export default App;
