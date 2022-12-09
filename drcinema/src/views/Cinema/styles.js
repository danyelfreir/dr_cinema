import { StyleSheet } from 'react-native';
import colors from '../../styles';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.darkJungleGreen,
  },
  infoContainer: {
    flex: 1,
    alignItems: 'center',
  },
  logoContainer: {
    width: '100%',
    height: '10%',
    justifyContent: 'center',
  },
  movies: {
    position: 'absolute',
    bottom: 10,
    height: '60%',
    width: '100%',
    // marginBottom: 30,
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
