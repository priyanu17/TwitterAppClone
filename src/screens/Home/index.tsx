import React from 'react';
import {FlatList, TouchableOpacity} from 'react-native';
import {ScreenContainer} from '../../templates/ScreenContainer';
import {Tweet} from './components/Tweet';
import {styles} from './styles';
import tweetsData from '../../data/tweets.json';
import Icon from '../../templates/Icons/Icon';
import {Colors} from '../../utils/constants/Colors';
import {Sizes} from '../../utils/constants/Sizes';
import {Routes} from '../../utils/constants/Routes';

interface IHomeScreen {
  navigation: any;
}

export const HomeScreen = ({navigation}: IHomeScreen) => {
  const navigateToNewTweetScreen = () =>
    navigation.navigate(Routes.newTweetScreen);
  return (
    <ScreenContainer
      containerStyle={styles.screenContainer}
      edges={['left', 'right']}>
      {/* Tweet Feed */}
      <FlatList
        showsVerticalScrollIndicator={false}
        data={tweetsData.tweets}
        keyExtractor={item => item.id.toString()}
        renderItem={({item}) => <Tweet tweet={item} />}
      />
      {/* New Tweet Button */}
      <TouchableOpacity
        style={styles.newTweet}
        activeOpacity={1}
        onPress={navigateToNewTweetScreen}>
        <Icon
          name="feather"
          type={'material-community'}
          color={Colors.white}
          size={Sizes.newTweetIcon}
        />
      </TouchableOpacity>
    </ScreenContainer>
  );
};
