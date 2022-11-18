import React from 'react';
import {Text, View} from 'react-native';
import {TweetsEntity} from '../../../entities/TweetsEntity';
import AsyncImage from '../../../templates/AsyncImage';
import Avatar from '../../../templates/Avatar';
import Icon from '../../../templates/Icons/Icon';
import {styles} from './styles';
import {Colors} from '../../../utils/constants/Colors';

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
        <Text style={styles.content}>{tweet.content}</Text>
        {tweet.image ? (
          <View style={styles.tweetImageContainer}>
            <AsyncImage targetURL={tweet.image} style={styles.tweetImage} />
          </View>
        ) : (
          <></>
        )}
        <View style={styles.tweetFooter}>
          <View style={styles.iconContainer}>
            <Icon
              name={'ios-chatbubble-outline'}
              type={'ionicon'}
              color={Colors.gray}
              containerStyle={styles.marginRight}
            />
            <Text style={styles.grayText}>{tweet.number_of_comments}</Text>
          </View>
          <View style={styles.iconContainer}>
            <Icon
              name={'retweet'}
              type={'antdesign'}
              color={Colors.gray}
              containerStyle={styles.marginRight}
            />
            <Text style={styles.grayText}>{tweet.number_of_retweets}</Text>
          </View>
          <View style={styles.iconContainer}>
            <Icon
              name={'hearto'}
              type={'antdesign'}
              color={Colors.gray}
              containerStyle={styles.marginRight}
            />
            <Text style={styles.grayText}>{tweet.number_of_likes}</Text>
          </View>
          <Icon
            name={'share-2'}
            type={'feather'}
            color={Colors.gray}
            containerStyle={styles.shareIcon}
          />
        </View>
      </View>
    </View>
  );
};
