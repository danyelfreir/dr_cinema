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
  movies: {
    position: 'absolute',
    bottom: 30,
    height: '60%',
    width: '100%',
    // marginBottom: 30,
  },
  message: {
    fontSize: 24,
    fontWeight: 'bold',
    color: colors.white,
    textAlign: 'center',
  },
});
