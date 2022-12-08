import { StyleSheet } from 'react-native';
import colors from '../../styles';

export default StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    backgroundColor: '#38afc2',
    padding: 10,
  },
  logoContainer: {
    width: '100%',
    height: 150,
    justifyContent: 'center',
  },
  cinemaInfo: {
    flex: 1,
    alignItems: 'center',
    width: '100%',
    marginBottom: 8,
    marginTop: 8,
  },
  movies: {
    flex: 0.7,
  },
});
