import { StyleSheet } from 'react-native';
import colors from '../../styles';

export default StyleSheet.create({
  infoContainer: {
    padding: 10,
    width: '100%',
    backgroundColor: colors.yaleBlue,
    flex: 1,
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
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
  },
  address: {
    fontSize: 18,
    color: colors.white,
  },
  locationIcon: { paddingRight: 10 },
  addressIcon: { paddingRight: 10 },
  phoneContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50,
    width: '100%',
    height: 45,
    padding: 5,
    backgroundColor: colors.ruby,
    marginBottom: 10,
  },
  phone: {
    fontSize: 18,
    color: colors.white,
  },
  phoneIcon: { paddingRight: 10 },
  urlContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50,
    width: '100%',
    height: 45,
    backgroundColor: colors.ruby,
    marginBottom: 10,
  },
  url: {
    fontSize: 18,
    color: colors.white,
  },
  urlIconContainer: {
    paddingRight: 5,
  },
  descrContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50,
    width: '100%',
    height: 45,
    backgroundColor: colors.ruby,
    marginBottom: 10,
  },
  description: {
    fontSize: 18,
    color: colors.white,
    padding: 5,
  },
  infoIcon: {},
});
