import { StyleSheet } from 'react-native';
import colors from '../../styles/index';

export default StyleSheet.create({
  container: {
    backgroundColor: 'black',
    position: 'absolute',
    height: '100%',
    width: '100%',
  },
  age: {
    flex: 1,
    position: 'absolute',
    zIndex: 99,
    right: 0,
    top: 0,
  },
  image: {
    flex: 3,
  },
  thumbnail: {
    flex: 1,
    height: '100%',
    width: '100%',
  },
  description: {
    flex: 1,
    width: '100%',
    backgroundColor: colors.movieItemGradient,
  },
  name: {
    flex: 0.8,
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
    textAlign: 'center',
    marginTop: 5,
  },
  tags: {
    flex: 1.8,
    zIndex: 99,
    padding: 5,
    width: '100%',
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
});
