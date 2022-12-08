import { StyleSheet } from 'react-native';
import colors from '../../styles/index';

export default StyleSheet.create({
  line: {
    height: 2,
    backgroundColor: '#C4C4C4',
    alignSelf: 'center',
  },
  seperatorContainer: {
    maxWidth: '80%',
    flexDirection: 'row',
    alignItems: 'space-between',
    justifyContent: 'space-between',
  },
  label: {
    fontSize: 20,
    fontWeight: 'bold',
    color: colors.gray,
  },
});
