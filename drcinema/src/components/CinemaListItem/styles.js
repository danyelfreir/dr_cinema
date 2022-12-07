import { StyleSheet } from 'react-native';
import colors from '../../styles';

export default StyleSheet.create({
  items: {
    flexDirection: 'row',
    height: 100,
    borderColor: 'white',
    borderWidth: 1,
    width: '100%',
    backgroundColor: '#293241',
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
    color: '#ee6c4d',
    left: 20,
  },
  urlContainer: {
    width: 160,
  },
});
