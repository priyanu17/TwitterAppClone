import React from 'react';
import {FlatList} from 'react-native';
import {ScreenContainer} from '../../templates/ScreenContainer';
import {Tweet} from './components/Tweet';
import {styles} from './styles';
import tweetsData from '../../data/tweets.json';

export const HomeScreen = () => {
  return (
    <ScreenContainer
      containerStyle={styles.screenContainer}
      edges={['bottom', 'left', 'right']}>
      <FlatList
        showsVerticalScrollIndicator={false}
        data={tweetsData.tweets}
        keyExtractor={item => item.id.toString()}
        renderItem={({item}) => <Tweet tweet={item} />}
      />
    </ScreenContainer>
  );
};
