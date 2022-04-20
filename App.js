import React from 'react';
import MainStackNavigator from './src/components/MainNav';
import {Provider} from 'react-redux';
import store from './src/redux/store';
const App = () => {
  return (
    <Provider store={store}>
      <MainStackNavigator />
    </Provider>
  );
};

export default App;
