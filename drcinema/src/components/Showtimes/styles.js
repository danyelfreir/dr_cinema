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
    fontSize: 18,
    fontWeight: 'bold',
    color: colors.red,
    textShadowColor: 'rgba(0, 0, 0, 0.45)',
    textShadowOffset: {
      width: -1,
      height: 1,
    },
    textShadowRadius: 2,
  },
});
