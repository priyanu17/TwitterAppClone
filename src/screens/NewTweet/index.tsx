import React, {useState} from 'react';
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
  const [newTweet, setNewTweet] = useState<string>('');
  const [image, setImage] = useState<string>('');

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
            value={newTweet}
            onChangeText={val => setNewTweet(val)}
          />
          <TextInput
            placeholder={Strings.newTweet.imageInputPlaceholder}
            style={styles.input}
            value={image}
            onChangeText={val => setImage(val)}
          />
        </View>
      </View>
    </ScreenContainer>
  );
};
