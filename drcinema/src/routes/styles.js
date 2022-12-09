import { StyleSheet } from 'react-native';
import colors from '../styles/index';

export default StyleSheet.create({
  navBar: {
    headerStyle: {
      backgroundColor: colors.yaleBlue,
    },
    headerTintColor: colors.white,
    headerTitleAlign: 'center',
  },
  searchIcon: {
    color: '#fff',
    marginRight: 20,
  },
});
