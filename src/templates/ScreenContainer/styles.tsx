import {StyleSheet} from 'react-native';
import {Sizes} from '../../utils/constants/Sizes';

// Styles for Screen container template
export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'pink',
    paddingHorizontal: Sizes.md,
    paddingTop: Sizes.md,
  },
  keyboardView: {
    flex: 1,
  },
});
