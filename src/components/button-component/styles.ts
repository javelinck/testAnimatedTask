import {StyleSheet} from 'react-native';
import {Fonts} from '../../styles/fonts.ts';

export default StyleSheet.create({
  buttonContainer: {
    height: 46,
    borderRadius: 12,
    alignItems: 'center',
    marginVertical: 10,
  },
  gradient: {
    height: 46,
    paddingHorizontal: 24,
    borderRadius: 12,
    paddingVertical: 12,
    alignItems: 'center',
  },
  label: {
    color: 'white',
    fontWeight: '700',
    fontFamily: Fonts.MontserratBold,
    fontSize: 16,
  },
});
