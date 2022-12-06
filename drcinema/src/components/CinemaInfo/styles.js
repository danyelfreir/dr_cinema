import { StyleSheet } from 'react-native';
import colors from '../../styles';

export default StyleSheet.create({
  infoContainer: {
    flex: 1,
    justifyContent: 'center',
    flexDirection: 'column',
    position: 'absolute',
    width: 330,
    borderColor: 'white',
    borderWidth: 1,
    padding: 10,
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
    paddingVertical: 5,
    fontSize: 16,
    color: '#7A66F3',
  },
  description: {
    fontSize: 16,
    color: '#e5e5e5',
  },
  descrContainer: {
    flex: 1,
    justifyContent: 'center',
    flexDirection: 'column',
  },
});
