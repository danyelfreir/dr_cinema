import { StyleSheet } from 'react-native';
import colors from '../../styles';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.darkJungleGreen,
  },
  infoContainer: {
    flex: 0.65,
    alignItems: 'center',
  },
  logoContainer: {
    width: '100%',
    height: '10%',
    justifyContent: 'center',
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
  message: {
    fontSize: 24,
    fontWeight: 'bold',
    color: colors.white,
    textAlign: 'center',
  },
});
