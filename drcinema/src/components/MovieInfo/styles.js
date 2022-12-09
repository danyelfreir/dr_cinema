import { StyleSheet } from 'react-native';
import colors from '../../styles/index';

export default StyleSheet.create({
  poster: {
    height: 200,
    width: 125,
    marginTop: -75,
    borderWidth: 1,
    borderColor: '#FFF',
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
    color: colors.gray,
    fontWeight: 'bold',
    // marginLeft: 20,
  },
  informationTextValue: {
    width: '53%',
    // color: '#C4C4C4',
    color: 'blue',
    marginLeft: 5,
    alignSelf: 'flex-end',
  },
  informationTextContainer: {
    width: 250,
  },
});
