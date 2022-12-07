import { StyleSheet } from 'react-native';
import colors from '../../styles';

export default StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    backgroundColor: colors.white,
    padding: 10,
  },
  logoContainer: {
    width: '100%',
    height: 150,
    justifyContent: 'center',
    flex: 0.2,
  },
  cinemaInfo: {
    flex: 1,
    alignItems: 'center',
    width: '100%',
  },
});
