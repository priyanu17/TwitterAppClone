import React, {ReactElement} from 'react';
import {KeyboardAvoidingView, Platform, StatusBar} from 'react-native';
import {
  Edge,
  SafeAreaView,
  SafeAreaViewProps,
} from 'react-native-safe-area-context';
import {Colors} from '../../utils/constants/Colors';
import {styles} from './styles';

// Props for Screen Container (used in all screens)
interface IScreenContainer extends SafeAreaViewProps {
  children: ReactElement | ReactElement<any>[];
  containerStyle?: {};
  edges?: Edge[];
  barStyle?: 'light-content' | 'dark-content';
}

// Template Container for screens
// determines default screen padding and Status bar
// accepts children elements to display within the screen
export const ScreenContainer: React.FC<IScreenContainer> = ({
  children,
  containerStyle = {},
  edges,
  barStyle = 'light-content',
  ...rest
}: IScreenContainer) => {
  return (
    // To display components inside correct view
    <SafeAreaView
      style={[styles.container, containerStyle]}
      edges={edges}
      {...rest}>
      {/* to display components correctly when keyboard is opened */}
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.keyboardView}>
        <StatusBar
          barStyle={barStyle}
          backgroundColor={
            barStyle === 'light-content' ? Colors.black : Colors.white
          }
        />
        {children}
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};
