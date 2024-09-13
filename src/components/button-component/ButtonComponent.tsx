import {GestureResponderEvent, Text, TouchableOpacity} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import React from 'react';
import styles from './styles.ts';
import {Colors} from '../../styles/colors.ts';

type ButtonComponentProps = {
  label: string;
  isDisable?: boolean;
  onPress: ((event: GestureResponderEvent) => void) | undefined;
};

const ButtonComponent = ({label, isDisable, onPress}: ButtonComponentProps) => (
  <TouchableOpacity
    disabled={isDisable}
    onPress={onPress}
    style={styles.buttonContainer}>
    <LinearGradient
      colors={
        isDisable ? [Colors.gray, Colors.gray] : [Colors.blue, Colors.lightBlue]
      }
      locations={[0, 0.8]}
      start={{x: 0, y: 0.5}}
      end={{x: 0.5, y: 1}}
      style={styles.gradient}>
      <Text style={styles.label}>{label}</Text>
    </LinearGradient>
  </TouchableOpacity>
);

export {ButtonComponent};
