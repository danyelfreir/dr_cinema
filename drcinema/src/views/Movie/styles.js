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
    height: 200,
    width: 125,
    marginTop: -75,
  },
  backdropPlaceholder: {
    height: 200,
  },
  body: {
    margin: 20,
  },
  informationContainer: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  informationTextPair: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginLeft: 10,
    marginRight: 10,
    marginBottom: 2,
  },
  informationTextKey: {
    width: '47%',
    color: '#C4C4C4',
    fontWeight: 'bold',
    // marginLeft: 20,
  },
  informationTextValue: {
    width: '53%',
    color: '#C4C4C4',
    marginLeft: 5,
    alignSelf: 'flex-end',
    // maxWidth: 100,
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
