import React from 'react';
import {HomeScreen} from '../screens/Home';
import {Routes} from '../utils/constants/Routes';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon, {IconTypes} from '../templates/Icons/Icon';
import {SearchScreen} from '../screens/Search';
import {MessagesScreen} from '../screens/Messages/index';
import {NotificationsScreen} from '../screens/Notifications';
import {Colors} from '../utils/constants/Colors';
import {Sizes} from '../utils/constants/Sizes';
import Avatar from '../templates/Avatar';

const Tab = createBottomTabNavigator();

export const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
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
              color={focused ? Colors.twitterBlue : Colors.gray}
            />
          );
        },
      })}>
      <Tab.Screen
        name={Routes.home}
        component={HomeScreen}
        options={{
          headerTitle: () => (
            <Icon
              name={'twitter'}
              type={'entypo'}
              color={Colors.twitterBlue}
              size={Sizes.xl}
            />
          ),
          headerRight: () => (
            <Icon
              name={'star-four-points-outline'}
              type={'material-community'}
              color={Colors.twitterBlue}
            />
          ),

          headerLeft: () => (
            <Avatar
              source={{
                uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHLkybiP3I5YBAAE11TvQBCRNXt-00rlnEi9k8G5kQJDJ1zdG49ZZqdVFeRR3MqOlyXfM&usqp=CAU',
              }}
              size={'xSmall'}
            />
          ),
          headerRightContainerStyle: {
            paddingRight: Sizes.md,
          },
          headerLeftContainerStyle: {
            paddingLeft: Sizes.md,
          },
        }}
      />
      <Tab.Screen
        name={Routes.search}
        options={{
          headerShown: false,
        }}
        component={SearchScreen}
      />
      <Tab.Screen
        name={Routes.notifications}
        options={{
          headerShown: false,
        }}
        component={NotificationsScreen}
      />
      <Tab.Screen
        name={Routes.messages}
        options={{
          headerShown: false,
        }}
        component={MessagesScreen}
      />
    </Tab.Navigator>
  );
};
