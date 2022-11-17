import React from 'react';
import {View, StyleSheet, Image} from 'react-native';
import {moderateScale} from 'react-native-size-matters';
import {Colors} from '../../utils/constants/Colors';
import AsyncImage from '../AsyncImage/index';
import TouchReceptor from '../TouchReceptor';

type AvatarSize = 'xSmall' | 'small' | 'medium' | 'large' | 'xlarge';

const avatarSizes = {
  small: moderateScale(32),
  medium: moderateScale(64),
  large: moderateScale(80),
  xlarge: moderateScale(150),
  xSmall: moderateScale(20),
};

interface IAvatar {
  source: any;
  imageProps?: any;
  onPress?: any;
  containerStyle?: object;
  imageStyle?: object;
  size?: AvatarSize;
  rounded?: boolean;
  showLoaderAnimation?: boolean;
}

// NOTE: We are not using TouchableReceptor for this component
const Avatar = ({
  /**
   * Image source
   */
  source = null,
  /**
   * Optional properties to pass to the avatar e.g "resizeMode"
   */
  imageProps = {},
  /**
   * Callback to call when Avatar is clicked
   */
  onPress = null,
  /**
   * Styling for the entire container that wrap Avatar
   */
  containerStyle = {},
  /**
   * Image style
   */
  imageStyle = {},
  /**
   * Size of the Avatar, can either be a number or
   * one of the string from 'small', 'medium', 'large', 'xlarge'
   *
   * @default is 'small'
   */
  size = 'small',
  /**
   * Should Avatar be round in shape
   */
  rounded = true,
  /**
   * whether to show loader animation in image
   */
  showLoaderAnimation = false,
}: IAvatar) => {
  const width =
    typeof size === 'number' ? size : avatarSizes[size] || avatarSizes.small;
  const height = width;

  const Component = onPress ? TouchReceptor : View;

  return (
    <Component
      disableBlurEffect
      onPress={onPress}
      style={StyleSheet.flatten([
        styles.container,
        {width, height},
        {overflow: 'hidden'},
        rounded && {borderRadius: width / 2},
        containerStyle,
      ])}>
      <>
        {!source ? null : (
          <View
            style={{
              ...(rounded && {borderRadius: width / 2, overflow: 'hidden'}),
            }}>
            {source?.uri?.length > 0 ? (
              <AsyncImage
                resizeMode="cover"
                targetURL={source?.uri}
                {...imageProps}
                style={StyleSheet.flatten([
                  styles.avatar,
                  {width, height},
                  rounded && {borderRadius: width / 2},
                  imageProps.style || {},
                  imageStyle,
                ])}
                showLoadingAnimation={showLoaderAnimation}
              />
            ) : (
              <Image
                source={require('../../assets/PlaceholderImage.png')}
                {...imageProps}
                style={StyleSheet.flatten([
                  styles.avatar,
                  {width, height},
                  rounded && {borderRadius: width / 2},
                  imageProps.style || {},
                  styles.defaultImage,
                  imageStyle,
                ])}
              />
            )}
          </View>
        )}
      </>
    </Component>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  avatar: {
    flex: 1,
  },
  defaultImage: {
    backgroundColor: Colors.white,
  },
});

export default Avatar;
