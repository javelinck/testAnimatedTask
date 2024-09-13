import {Text} from 'react-native';
import React from 'react';
import styles from './styles.ts';

type TextComponentProps = {
  text: string;
  isHeader?: boolean;
  isError?: boolean;
};

const TextComponent = ({text, isHeader, isError}: TextComponentProps) => (
  <Text
    style={[
      styles.text,
      isHeader && styles.headerText,
      isError && styles.errorText,
    ]}>
    {text}
  </Text>
);

export {TextComponent};
