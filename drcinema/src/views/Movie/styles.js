import { StyleSheet, Dimensions } from 'react-native';
import colors from '../../styles/index';

const { height: winHeight, width: winWidth } = Dimensions.get('window');

export default StyleSheet.create({
  background: {
    backgroundColor: colors.background,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  description: {
    marginTop: 20,
    marginBottom: 20,
    color: colors.black,
  },
  body: {
    margin: 20,
  },
  showtimesContainer: {
    marginTop: 20,
    marginBottom: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
