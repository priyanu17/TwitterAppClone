import React from 'react';
import {HomeScreen} from '../screens/HomeScreen';
import {Routes} from '../utils/constants/Routes';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from '../templates/Icons/Icon';

const Tab = createBottomTabNavigator();

export const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarIcon: () => {
          return <Icon name={'home'} type={'feather'} />;
        },
      }}>
      <Tab.Screen name={Routes.home} component={HomeScreen} />
    </Tab.Navigator>
  );
};
