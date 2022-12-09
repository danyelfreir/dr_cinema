import { StyleSheet } from 'react-native';
import colors from '../../styles';

export default StyleSheet.create({
  infoContainer: {
    padding: 10,
    width: '100%',
    backgroundColor: colors.yaleBlue,
    flex: 1,
    height: '100%',
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
    justifyContent: 'center',
  },
  address: {
    fontSize: 22,
    color: colors.white,
  },
  addressIcon: { paddingRight: 10 },
  phoneContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50,
    width: '100%',
    height: 50,
    padding: 5,
    backgroundColor: colors.ruby,
    marginBottom: 10,
  },
  phone: {
    fontSize: 22,
    color: colors.white,
  },
  phoneIcon: { paddingRight: 10 },
  urlContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50,
    width: '100%',
    height: 50,
    backgroundColor: colors.ruby,
    marginBottom: 10,
  },
  url: {
    fontSize: 22,
    color: colors.white,
  },
  urlIconContainer: {
    paddingRight: 10,
  },
  descrContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50,
    width: '100%',
    height: 50,
    backgroundColor: colors.ruby,
    marginBottom: 10,
  },
  description: {
    fontSize: 22,
    color: colors.white,
    padding: 5,
  },
  infoIcon: {},
});
