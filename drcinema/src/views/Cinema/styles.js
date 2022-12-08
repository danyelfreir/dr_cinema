import { StyleSheet } from 'react-native';
import colors from '../../styles';

export default StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    backgroundColor: '#38afc2',
  },
  logoContainer: {
    width: '100%',
    height: '10%',
    justifyContent: 'center',
  },
  cinemaInfo: {
    flex: 1,
    alignItems: 'center',
    width: '100%',
    marginBottom: 8,
    marginTop: 8,
    // backgroundColor: 'tomato',
  },
  movies: {
    position: 'absolute',
    bottom: 0,
    height: '50%',
    width: '100%',
  },
  nameImageContainer: {
    padding: 10,
  },
});
