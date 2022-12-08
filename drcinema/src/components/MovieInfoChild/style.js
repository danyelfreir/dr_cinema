import { StyleSheet } from 'react-native';

export default StyleSheet.create({
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
});
