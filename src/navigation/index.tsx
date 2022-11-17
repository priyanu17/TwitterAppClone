import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Routes} from '../utils/constants/Routes';
import {BottomTabNavigator} from './BottomTabNavigator';

const Stack = createNativeStackNavigator();

export const RootNavigator = () => {
  return (
    <Stack.Navigator initialRouteName={Routes.bottomTabs}>
      <Stack.Screen
        name={Routes.bottomTabs}
        component={BottomTabNavigator}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
};
