import { StyleSheet } from 'react-native';
import colors from '../../styles';

export default StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: 'center',
    flexDirection: 'column',
    position: 'absolute',
    width: '100%',
  },
  infoContainer: {
    padding: 10,
    backgroundColor: '#38afc2',
  },
  titleContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: colors.white,
    paddingBottom: 10,
  },
  locationDetails: {
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  addressContainer: {
    flexDirection: 'row',
    paddingBottom: 10,
  },
  address: {
    fontSize: 22,
    color: colors.white,
  },
  addressIcon: { paddingRight: 10 },
  phoneContainer: {
    flexDirection: 'row',
    paddingBottom: 10,
  },
  phone: {
    fontSize: 22,
    color: colors.white,
  },
  phoneIcon: { paddingRight: 10 },
  url: {
    paddingVertical: 5,
    fontSize: 22,
    color: colors.orange,
  },
  descrContainer: {
    flexDirection: 'row',
    paddingBottom: 10,
  },
  description: {
    fontSize: 22,
    color: colors.white,
  },
  infoIcon: { paddingRight: 10 },
});
