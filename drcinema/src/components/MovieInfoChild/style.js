import { StyleSheet } from 'react-native';
import colors from '../../styles/index';

export default StyleSheet.create({
  informationTextPair: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginLeft: 10,
    marginRight: 10,
    marginBottom: 4,
  },
  informationTextKey: {
    color: colors.movieLabel,
    fontWeight: 'bold',
  },
  informationTextValue: {
    width: '60%',
    color: colors.movieInfo,
    marginLeft: 5,
    alignSelf: 'flex-end',
  },
});
