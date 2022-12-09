import { StyleSheet } from 'react-native';
import colors from '../../styles/index';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
  age: {
    flex: 1,
    position: 'absolute',
    zIndex: 99,
    right: 0,
    top: 0,
  },
  image: {
    flex: 2,
  },
  thumbnail: {
    height: '100%',
    width: '100%',
  },
  description: {
    flex: 1,
    width: '100%',
    backgroundColor: colors.movieItemGradient,
  },
  name: {
    flex: 1,
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
    textAlign: 'center',
  },
  tags: {
    flex: 1.5,
    zIndex: 99,
    padding: 5,
    width: '100%',
    flexDirection: 'row',
    flexWrap: 'wrap',
    padding: 2,
  },
});
