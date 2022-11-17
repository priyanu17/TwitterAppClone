import React from 'react';
import {HomeScreen} from '../screens/Home';
import {Routes} from '../utils/constants/Routes';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon, {IconTypes} from '../templates/Icons/Icon';
import {SearchScreen} from '../screens/Search';
import {MessagesScreen} from '../screens/Messages/index';
import {NotificationsScreen} from '../screens/Notifications';
import {Colors} from '../utils/constants/Colors';

const Tab = createBottomTabNavigator();

export const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        headerShown: false,
        tabBarLabel: '',
        tabBarIcon: ({focused}) => {
          let iconName = '';
          let iconType: IconTypes = 'material';

          switch (route.name) {
            case Routes.home:
              iconName = 'home';
              iconType = 'entypo';
              break;
            case Routes.search:
              iconName = 'search';
              iconType = 'feather';
              break;
            case Routes.notifications:
              iconName = 'bell';
              iconType = 'feather';
              break;

            case Routes.messages:
              iconName = 'envelope';
              iconType = 'font-awesome';
          }

          return (
            <Icon
              name={iconName}
              type={iconType}
              color={focused ? Colors.twitterBlue : Colors.black}
            />
          );
        },
      })}>
      <Tab.Screen name={Routes.home} component={HomeScreen} />
      <Tab.Screen name={Routes.search} component={SearchScreen} />
      <Tab.Screen name={Routes.notifications} component={NotificationsScreen} />
      <Tab.Screen name={Routes.messages} component={MessagesScreen} />
    </Tab.Navigator>
  );
};
