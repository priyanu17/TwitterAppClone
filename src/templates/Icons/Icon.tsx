import React from 'react';
import {
  StyleSheet,
  Image,
  TouchableOpacityProps,
  ImageSourcePropType,
  View,
  ViewStyle,
  ActivityIndicator,
} from 'react-native';
import {Colors} from '../../utils/constants/Colors';
import {Sizes} from '../../utils/constants/Sizes';
import TouchReceptor from '../TouchReceptor';
import getIconType from './IconTypes';

export type IconTypes =
  | 'zocial'
  | 'octicon'
  | 'material'
  | 'material-community'
  | 'ionicon'
  | 'foundation'
  | 'evilicon'
  | 'entypo'
  | 'font-awesome'
  | 'font-awesome-5'
  | 'fontisto'
  | 'simple-line-icon'
  | 'feather'
  | 'antdesign';
export interface IIcon extends TouchableOpacityProps {
  name: string;
  type: IconTypes;
  source?: ImageSourcePropType;
  disabled?: boolean;
  size?: number;
  color?: string;
  onPress?: () => void;
  iconStyle?: object;
  imageStyle?: object;
  imageTintColor?: string;
  rounded?: boolean;
  loading?: boolean;
  opacity?: number;
  containerStyle?: ViewStyle;
}

const Icon: React.FC<IIcon> = ({
  /**
   * type of icon set. Available Icon set are
   * - material
   * - material-community
   * - font-awesome
   * - font-awesome-5
   * - octicon
   * - ionicon
   * - foundation
   * - evilicon
   * - simple-line-icon
   * - zocial
   * - entypo
   * - feather
   * - antdesign
   * - fontisto
   *
   * Default value is 'material'
   */
  type = 'material',
  /**
   * size of icon (optional)
   */
  size = Sizes.lg,
  /**
   * Name of the icon to be shown
   *
   * Search here: https://oblador.github.io/react-native-vector-icons/
   */
  name = '',
  /**
   * color of icon (optional)
   *
   * If provided, it will be used for icon and Image tint color, if not, then default theme.iconColor for only icon
   */
  color = null,
  /**
   * additional styling to icon (optional)
   */
  iconStyle = {},
  /**
   * Callback to call when Icon is clicked
   */
  onPress = null,
  /**
   * If true, the onPress callback won't be called
   */
  disabled = false,
  /**
   * source Image url source={localImage}, source={{uri:'url'}}
   */
  source = null,
  /**
   * source image style
   */
  imageStyle = {},
  /**
   * tint color added to image
   */
  imageTintColor = null,
  /**
   *  rounded in case of image
   */
  rounded = false,
  /**
   *  If true, show spinner in place of  icon
   */
  loading = false,
  /**
   * used to set the opacity of touchable component
   */
  opacity = 0.5,
  containerStyle = {},
  ...rest
}) => {
  const Component = onPress !== null ? TouchReceptor : View;
  const IconComponent = getIconType(type);

  return (
    <Component
      {...(onPress && {
        onPress,
        disabled,
        activeOpacity: opacity,
        ...rest,
      })}
      style={containerStyle}>
      {loading ? (
        <View style={[styles.activity, {height: size, width: size}]}>
          <ActivityIndicator color={Colors.black} />
        </View>
      ) : source ? (
        <Image
          source={source}
          style={[
            styles.imageStyle,
            imageStyle,
            {tintColor: imageTintColor, height: size, width: size},
            rounded && {borderRadius: size / 2},
          ]}
        />
      ) : (
        <IconComponent
          testID="icon"
          size={size}
          name={name}
          color={color || Colors.black}
          style={StyleSheet.flatten([styles.iconStyle, iconStyle])}
        />
      )}
    </Component>
  );
};

const styles = StyleSheet.create({
  iconStyle: {
    backgroundColor: 'transparent',
  },
  imageStyle: {
    resizeMode: 'contain',
  },
  activity: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Icon;
