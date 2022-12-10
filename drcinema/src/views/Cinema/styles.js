import { StyleSheet } from 'react-native';
import colors from '../../styles';

export default StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: colors.background,
  },
  infoContainer: {
    flex: 0.35,
    alignItems: 'center',
  },
  movies: {
    flex: 0.65,
    width: '100%',
    marginBottom: 10,
    paddingBottom: 10,
  },
});
