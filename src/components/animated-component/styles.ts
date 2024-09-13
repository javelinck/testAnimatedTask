import {Dimensions, StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    height: 350,
  },
  wrapper: {
    position: 'absolute',
    alignSelf: 'center',
    alignItems: 'center',
    alignContent: 'center',
    justifyContent: 'center',
  },
  linear: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  axis: {
    position: 'absolute',
    borderWidth: 2,
    borderColor: '#ccc',
    opacity: 0,
  },
  card: {
    width: 167,
    height: 106,
    borderRadius: 10,
  },
  item: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
});
