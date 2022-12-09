import { StyleSheet } from 'react-native';
import colors from '../../styles';

export default StyleSheet.create({
  infoContainer: {
    padding: 10,
    width: '100%',
    backgroundColor: colors.cinemaInfoBackground,
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
    backgroundColor: colors.cinemaButtonText,
    marginBottom: 10,
    height: 45,
    borderRadius: 50,
  },
  address: {
    fontSize: 18,
    color: colors.cinemaButtons,
  },
  locationIcon: { paddingRight: 10, color: colors.cinemaButtons },
  addressIcon: { paddingRight: 10, color: colors.cinemaButtons },
  phoneContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50,
    width: '100%',
    height: 45,
    padding: 5,
    backgroundColor: colors.cinemaButtonText,
    marginBottom: 10,
  },
  phone: {
    fontSize: 18,
    color: colors.cinemaButtons,
  },
  phoneIcon: {
    paddingRight: 10,
    color: colors.cinemaButtons,
  },
  urlContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50,
    width: '100%',
    height: 45,
    backgroundColor: colors.cinemaButtonText,
    marginBottom: 10,
  },
  url: {
    fontSize: 18,
    color: colors.cinemaButtons,
  },
  urlIcon: {
    color: colors.cinemaButtons,
  },
  urlIconContainer: {
    paddingRight: 5,
    color: colors.cinemaButtons,
  },
  descrContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50,
    width: '100%',
    height: 45,
    backgroundColor: colors.cinemaButtonText,
    marginBottom: 10,
  },
  description: {
    fontSize: 18,
    color: colors.cinemaButtons,
    padding: 5,
  },
  infoIcon: { color: colors.cinemaButtons },
});
