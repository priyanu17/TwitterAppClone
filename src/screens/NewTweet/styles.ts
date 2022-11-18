import {StyleSheet} from 'react-native';
import {Sizes} from '../../utils/constants/Sizes';
import {Colors} from '../../utils/constants/Colors';
export const styles = StyleSheet.create({
  screenContainer: {
    paddingTop: Sizes.xs,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: Sizes.lg,
  },
  newTweetButton: {
    backgroundColor: Colors.twitterBlue,
    paddingVertical: Sizes.sm + Sizes.xs,
    paddingHorizontal: Sizes.xl,
    borderRadius: Sizes.md * 2,
  },
  buttonText: {
    color: Colors.white,
    fontSize: Sizes.md,
    fontWeight: 'bold',
  },
  avatar: {
    marginRight: Sizes.sm,
  },
  tweetContainer: {
    flexDirection: 'row',
  },
  inputContainer: {},
  input: {
    height: Sizes.tweetInput,
    fontSize: Sizes.md,
  },
});
