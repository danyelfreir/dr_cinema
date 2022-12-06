import { StyleSheet } from 'react-native';
import colors from '../../styles';

export default StyleSheet.create({
  container: {
    width: '100%',
    backgroundColor: 'black',
  },
  error: {
    fontSize: 24,
    fontWeight: 'bold',
    color: colors.white,
  },
  errorContainer: {
    flex: 1,
    justifyContent: 'center',
    flexDirection: 'column',
    width: 400,
    padding: 10,
  },
});
