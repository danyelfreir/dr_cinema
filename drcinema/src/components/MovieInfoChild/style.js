import { StyleSheet } from 'react-native';
import colors from '../../styles/index'

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
    color: colors.movieLabel,
    fontWeight: 'bold',
    // marginLeft: 20,
  },
  informationTextValue: {
    width: '53%',
    color: colors.movieInfo,
    marginLeft: 5,
    alignSelf: 'flex-end',
  },
});
