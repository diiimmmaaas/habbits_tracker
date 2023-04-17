import {NavigationContainer} from '@react-navigation/native';
import {HomeScreen} from '../screens/Home';
import React from 'react';
import {Challenges} from '../screens/Challenges';
import {Settings} from '../screens/Settings';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

export type RootStackParamList = {
  Home: undefined;
  Challenges: undefined;
};

const Tab = createBottomTabNavigator();
export const Routes = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator initialRouteName={'Home'}>
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="My challenges" component={Challenges} />
        <Tab.Screen name="Settings" component={Settings} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};
