import React from 'react';
import {HomeScreen} from '../screens/HomeScreen';
import {Routes} from '../utils/constants/Routes';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

export const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Tab.Screen name={Routes.home} component={HomeScreen} />
    </Tab.Navigator>
  );
};
