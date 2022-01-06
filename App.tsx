import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from './src/screens/home/HomeScreen';
import {RootStackParamList} from './src/shared/constants/NavigatorTypes';
import MenuScreen from './src/screens/menus/MenuScreen';

const RootStack = createNativeStackNavigator<RootStackParamList>();

function App() {
  return (
    <NavigationContainer>
      <RootStack.Navigator>
        <RootStack.Screen
          name="Home"
          component={HomeScreen}
          options={{
            headerShown: false,
          }}
        />
        <RootStack.Screen
          name="Menu"
          component={MenuScreen}
          options={{
            title: 'Menu',
            animation: 'fade',
          }}
        />
      </RootStack.Navigator>
    </NavigationContainer>
  );
}

export default App;
