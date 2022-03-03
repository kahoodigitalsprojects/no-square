import React from 'react';
import MyStack from './src/navigation/stack';
import Toast from 'react-native-toast-message';
import Recording from './src/components/recording';

const App = props => {
  return (
    <>
      <MyStack {...props} />
      <Toast />
      {/* <Recording /> */}
    </>
  );
};

export default App;
