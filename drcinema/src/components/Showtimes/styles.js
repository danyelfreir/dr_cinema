import { StyleSheet } from 'react-native';
import colors from '../../styles/index';

export default StyleSheet.create({
  container: {
    borderWidth: 1,
    borderColor: '#000',
    backgroundColor: '#FFF',
    borderRadius: 20,
    width: '80%',
    alignItems: 'center',
  },
  timeslotTitle: {
    fontSize: 20,
    padding: 10,
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
    borderRadius: 16,
    padding: 8,
    fontSize: 20,
    fontWeight: 'bold',
    color: colors.white,
    backgroundColor: 'green',
  },
});
