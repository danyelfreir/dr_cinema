import { StyleSheet } from 'react-native';
import colors from '../../styles/index';

export default StyleSheet.create({
  container: {
    backgroundColor: '#FFF',
    borderRadius: 20,
    width: '80%',
    alignItems: 'center',
    shadowOffset: {
      width: -2,
      height: 2,
    },
    shadowOpacity: 0.75,
    shadowColor: '#000',
  },
  timeslotTitleContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  timeslotTitle: {
    fontSize: 24,
    paddingTop: 10,
  },
  timeslotSubTitle: {
    fontSize: 16,
    color: '#848484',
    padding: 5,
  },
  timeslotContainer: {
    flexDirection: 'row',
    width: 225,
    paddingTop: 20,
    paddingBottom: 20,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  timeslot: {
    fontSize: 18,
  },
  buyButton: {
    fontSize: 20,
    fontWeight: 'bold',
    color: colors.blue,
  },
});
