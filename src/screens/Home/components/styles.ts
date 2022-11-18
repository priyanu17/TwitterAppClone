import {StyleSheet} from 'react-native';
import {Colors} from '../../../utils/constants/Colors';
import {Sizes} from '../../../utils/constants/Sizes';

export const styles = StyleSheet.create({
  tweetContainer: {
    flexDirection: 'row',
    marginBottom: Sizes.xs,
    borderBottomWidth: Sizes.micro,
    borderColor: Colors.lightGray,
    paddingBottom: Sizes.xxs,
  },
  avatarContainer: {
    marginRight: Sizes.xs,
  },
  tweetContentContainer: {
    flex: 1,
  },
  tweetHeaderContainer: {
    flexDirection: 'row',
  },
  downArrow: {
    flex: 1,
    alignItems: 'flex-end',
    marginRight: Sizes.xs,
  },
  tweetImage: {
    width: '100%',
    height: Sizes.tweetImageHeight,
  },
  tweetImageContainer: {
    borderRadius: Sizes.md,
    overflow: 'hidden',
    width: '100%',
    height: Sizes.tweetImageHeight,
    marginBottom: Sizes.sm,
  },
  headerText: {
    marginRight: Sizes.sm,
  },
  grayText: {
    color: Colors.gray,
  },
  content: {
    fontSize: Sizes.md,
    marginVertical: Sizes.xs,
    lineHeight: Sizes.lg,
  },
  tweetFooter: {
    flexDirection: 'row',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: Sizes.md,
    marginTop: Sizes.xs,
  },
  iconContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  marginRight: {
    marginRight: Sizes.sm,
  },
  shareIcon: {
    marginRight: Sizes.md * 2,
  },
});
