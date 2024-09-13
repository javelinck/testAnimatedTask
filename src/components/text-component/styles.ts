import {StyleSheet} from 'react-native';
import {Fonts} from '../../styles/fonts.ts';

export default StyleSheet.create({
  headerText: {
    fontSize: 48,
    fontWeight: '600',
    textTransform: 'uppercase',
    lineHeight: 45.6,
  },
  text: {
    color: 'black',
    fontSize: 16,
    fontFamily: Fonts.MontserratRegular,
    fontWeight: '400',
    lineHeight: 22,
  },
  errorText: {
    color: 'red',
  },
});
