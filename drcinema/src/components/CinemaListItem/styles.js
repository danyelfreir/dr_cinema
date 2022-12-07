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
    backgroundColor: '#38afc2',
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
    color: 'white',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: colors.white,
    left: 10,
  },
  url: {
    fontSize: 18,
    fontWeight: 'bold',
    color: colors.orange,
    padding: 10,
    width: '65%',
  },
});
