import { StyleSheet, Dimensions } from 'react-native';
import colors from '../../styles';

const { width } = Dimensions.get('window');

export default StyleSheet.create({
  infoContainer: {
    padding: 10,
    width: '100%',
    flex: 2,
    paddingTop: 20,
    paddingBottom: 30,
    justifyContent: 'space-between',
  },
  contactInfoContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  titleContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: colors.white,
  },
  icon: {
    paddingRight: 10,
    color: colors.cinemaButtons,
  },
  buttonContainer: {
    width: '100%',
    justifyContent: 'space-between',
    height: 100,
  },
  bigButton: {
    backgroundColor: colors.cinemaButtonText,
    flexDirection: 'row',
    height: 45,
    width: '100%',
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  smallButton: {
    backgroundColor: colors.cinemaButtonText,
    flexDirection: 'row',
    height: 45,
    width: width / 2.2,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'stretch',
  },
  buttonText: {
    fontSize: 18,
    color: colors.cinemaButtons,
  },
  addressContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
  },
  address: {
    fontSize: 18,
    color: colors.cinemaAddress,
  },
  addressIcon: {
    paddingRight: 10,
    color: colors.cinemaAddressIcon,
  },
});
