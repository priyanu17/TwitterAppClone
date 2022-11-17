import React from 'react';
import {Text} from 'react-native';
import {ScreenContainer} from '../../templates/ScreenContainer';
import {styles} from './styles';

export const HomeScreen = () => {
  return (
    <ScreenContainer
      containerStyle={styles.screenContainer}
      edges={['bottom', 'left', 'right']}>
      <Text>Home Screen</Text>
    </ScreenContainer>
  );
};
