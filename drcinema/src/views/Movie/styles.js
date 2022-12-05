import { StyleSheet, Dimensions } from 'react-native';
import colors from '../../styles/index';

const { height: winHeight, width: winWidth } = Dimensions.get('window');

export default StyleSheet.create({
  header: {
    height: 100,
    backgroundColor: colors.red,
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  headerTitle: {
    paddingBottom: 10,
    fontSize: 20,
    fontWeight: 'bold',
  },
  container: {},
  label: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  description: {
    paddingBottom: 20,
  },
  poster: {
    height: 200,
  },
  body: {},
  paginationContainer: {
    position: 'absolute',
    top: winHeight / 3,
    left: winWidth / 6,
  },
  paginationDots: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: 'rgba(255, 255, 255, 0.92)',
  },
  paginationInactiveDots: {},
});
