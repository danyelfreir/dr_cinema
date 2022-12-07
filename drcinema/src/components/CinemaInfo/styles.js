import { StyleSheet } from 'react-native';
import colors from '../../styles';

export default StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: 'center',
    flexDirection: 'column',
    position: 'absolute',
    width: '100%',
    borderWidth: 1,
    borderColor: colors.darkBlue,
  },
  infoContainer: {
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
    color: colors.orange,
  },
  description: {
    fontSize: 16,
    color: colors.white,
  },
  descrContainer: {
    flex: 1,
    justifyContent: 'center',
    flexDirection: 'column',
  },
});
