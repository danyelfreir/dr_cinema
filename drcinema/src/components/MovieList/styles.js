import { StyleSheet } from 'react-native';
import colors from '../../styles';

export default StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: colors.yaleBlue,
    // backgroundColor: 'red',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    color: colors.cinemaListItemTitle,
    paddingLeft: 10,
  },
  item: {
    margin: 8,
    width: 250,
  },
});
