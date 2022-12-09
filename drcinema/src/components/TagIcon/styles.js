import { StyleSheet } from 'react-native';
import colors from '../../styles/index';

export default StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
    height: 30,
    padding: 1,
    margin: 2,
    backgroundColor: colors.movieItemGenre,
    // backgroundColor: 'teal',
  },
  tag: {
    color: colors.movieItemGenreText,
    fontWeight: 'bold',
    fontSize: 12,
    paddingLeft: 2,
    paddingRight: 2,
    // letterSpacing: -2,
  },
});
