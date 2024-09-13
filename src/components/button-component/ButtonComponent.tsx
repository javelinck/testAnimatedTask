import {GestureResponderEvent, Text, TouchableOpacity} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import React from 'react';
import styles from './styles.ts';

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
      colors={isDisable ? ['gray', 'gray'] : ['#3274C6', '#458de1']}
      locations={[0, 0.8]}
      start={{x: 0, y: 0.5}}
      end={{x: 0.5, y: 1}}
      style={styles.gradient}>
      <Text style={styles.label}>{label}</Text>
    </LinearGradient>
  </TouchableOpacity>
);

export {ButtonComponent};
