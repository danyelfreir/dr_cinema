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
    color: '#FFF',
  },
  container: {
    backgroundColor: '#141414',
  },
  label: {
    fontSize: 20,
    fontWeight: 'bold',
    color: colors.gray,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  description: {
    marginTop: 20,
    marginBottom: 20,
    color: '#FFF',
  },
  poster: {
    height: 175,
    width: 100,
    marginTop: -75,
  },
  body: {
    margin: 20,
  },
  informationContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginBottom: 20,
  },
  informationText: {
    color: '#C4C4C4',
    marginLeft: 20,
  },
  informationTextContainer: {
    width: 250,
  },
  carouselItem: {
    height: 200,
  },
  showtimesContainer: {
    marginTop: 20,
    marginBottom: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  seperatorContainer: {
    maxWidth: '80%',
    flexDirection: 'row',
    alignItems: 'space-between',
    justifyContent: 'space-between',
  },
  trailersContainer: {
    paddingTop: 20,
  },
});
