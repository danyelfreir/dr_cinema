import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  poster: {
    height: 200,
    width: 125,
    marginTop: -75,
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
  },
  informationTextContainer: {
    width: 250,
  },
});