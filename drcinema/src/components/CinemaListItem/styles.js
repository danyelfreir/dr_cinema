import { StyleSheet } from 'react-native';
import colors from '../../styles';

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    flexDirection: 'row',
    width: '100%',
    height: '100%',
    padding: 10,
    backgroundColor: colors.yaleBlue,
  },
  infoContainer: {
    flex: 1,
    justifyContent: 'center',
    flexDirection: 'column',
  },
  iconContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 50,
  },
  icon: {
    color: colors.magnolia,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: colors.magnolia,
    left: 10,
  },
  urlContainer: {
    width: '45%',
  },
  url: {
    fontSize: 18,
    fontWeight: 'bold',
    color: colors.pumpkin,
    padding: 10,
  },
});
