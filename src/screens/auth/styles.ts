import {StyleSheet} from 'react-native';
import {Fonts} from '../../styles/fonts.ts';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F4F5',
  },
  scroll: {
    height: '100%',
    flex: 1,
  },
  contentContainerStyle: {
    justifyContent: 'space-between',
  },
  textInput: {
    backgroundColor: 'white',
    height: 46,
    gap: 10,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#0F0F100D',
    paddingHorizontal: 18,
    paddingVertical: 12,
    marginVertical: 5,
  },
  margin: {margin: 20},
  buttonWrapper: {
    alignItems: 'flex-start',
    marginHorizontal: 20,
  },
});
