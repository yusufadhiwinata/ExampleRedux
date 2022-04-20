import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import BookScreen from '../screens/BookScreen';
import CartScreen from '../screens/CartScreen';
import ShoppingCart from './ShoppingCart';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer independent={true}>
      <Stack.Navigator initialRouteName="BookScreen">
        <Stack.Screen
          name="BookScreen"
          component={BookScreen}
          options={{headerRight: props => <ShoppingCart {...props} />}}
        />
        <Stack.Screen name="CartScreen" component={CartScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
