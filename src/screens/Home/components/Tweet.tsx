import React from 'react';
import {Text, View} from 'react-native';
import {TweetsEntity} from '../../../entities/TweetsEntity';
import AsyncImage from '../../../templates/AsyncImage';
import Avatar from '../../../templates/Avatar';
import Icon from '../../../templates/Icons/Icon';
import {styles} from './styles';

interface ITweet {
  tweet: TweetsEntity;
}

export const Tweet = ({tweet}: ITweet) => {
  return (
    <View style={styles.tweetContainer}>
      <Avatar
        source={{
          uri: tweet.user.photo_url,
        }}
        containerStyle={styles.avatarContainer}
        size={'medium'}
      />
      <View style={styles.tweetContentContainer}>
        <View style={styles.tweetHeaderContainer}>
          <Text style={styles.headerText}>{tweet.user.name || ''}</Text>
          <Text style={[styles.headerText, styles.grayText]}>
            {`@${tweet.user.username}` || ''}
          </Text>
          <Text style={[styles.headerText, styles.grayText]}>{'15s'}</Text>
          <Icon
            name={'chevron-down'}
            type={'font-awesome'}
            size={20}
            containerStyle={styles.downArrow}
          />
        </View>
        <Text>{tweet.content}</Text>

        {tweet.image ? (
          <View style={styles.tweetImageContainer}>
            <AsyncImage targetURL={tweet.image} style={styles.tweetImage} />
          </View>
        ) : (
          <></>
        )}
      </View>
    </View>
  );
};
