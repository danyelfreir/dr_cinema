import { StyleSheet } from 'react-native';
import colors from '../../styles';

export default StyleSheet.create({
  container: {
    position: 'absolute',
    width: '100%',
    marginVertical: 60,
    padding: 10,
    backgroundColor: colors.yaleBlue,
  },
  titleContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 26,
    color: colors.white,
    paddingBottom: 10,
  },
  description: {
    fontSize: 16,
    color: colors.white,
  },
});
