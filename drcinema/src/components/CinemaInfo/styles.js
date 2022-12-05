import { StyleSheet } from 'react-native';
import colors from '../../styles';

export default StyleSheet.create({
  infoContainer: {
    flex: 1,
    justifyContent: 'center',
    flexDirection: 'column',
    position: 'absolute',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: colors.white,
  },
  locationDetails: {
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  address: {
    fontSize: 16,
    color: colors.white,
  },
  phone: {
    fontSize: 16,
    color: colors.white,
  },
  url: {
    fontSize: 16,
    color: '#7A66F3',
  },
  descrContainer: {
    justifyContent: 'center',
    flexDirection: 'column',
    width: 300,
  },
  description: {
    fontSize: 16,
    color: 'grey',
    top: 10,
  },
});
