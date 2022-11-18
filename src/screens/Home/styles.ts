import {StyleSheet} from 'react-native';
import {Sizes} from '../../utils/constants/Sizes';
import {Colors} from '../../utils/constants/Colors';

export const styles = StyleSheet.create({
  screenContainer: {
    paddingTop: Sizes.md,
  },
  newTweet: {
    position: 'absolute',
    right: Sizes.md,
    bottom: Sizes.md,
    backgroundColor: Colors.twitterBlue,
    padding: Sizes.md,
    borderRadius: Sizes.xl * 2,
  },
});
