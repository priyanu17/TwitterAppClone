import React from 'react';
import {Text, TextInput, TouchableOpacity, View} from 'react-native';
import Icon from '../../templates/Icons/Icon';
import {ScreenContainer} from '../../templates/ScreenContainer';
import {Sizes} from '../../utils/constants/Sizes';
import {styles} from './styles';
import {Colors} from '../../utils/constants/Colors';
import {Strings} from '../../utils/constants/Strings';
import Avatar from '../../templates/Avatar';
import userData from '../../data/user.json';

interface INewTweet {
  navigation: any;
}

export const NewTweetScreen = ({navigation}: INewTweet) => {
  const goBack = () => navigation.goBack();

  const newTweetOnPress = () => {};
  return (
    <ScreenContainer containerStyle={styles.screenContainer}>
      <View style={styles.header}>
        <Icon
          name={'x'}
          type={'feather'}
          size={Sizes.md * 2}
          color={Colors.twitterBlue}
          onPress={goBack}
        />

        <TouchableOpacity
          style={styles.newTweetButton}
          onPress={newTweetOnPress}>
          <Text style={styles.buttonText}>{Strings.newTweet.buttonText}</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.tweetContainer}>
        <Avatar
          source={{uri: userData.user.photo_url}}
          size={'large'}
          containerStyle={styles.avatar}
        />

        <View style={styles.inputContainer}>
          <TextInput
            placeholder={Strings.newTweet.inputPlaceholder}
            style={styles.input}
          />
          <TextInput
            placeholder={Strings.newTweet.imageInputPlaceholder}
            style={styles.input}
          />
        </View>
      </View>
    </ScreenContainer>
  );
};
