import { StyleSheet } from 'react-native';
import colors from '../styles/index';

export default StyleSheet.create({
  navBar: {
    headerStyle: {
      backgroundColor: colors.blue,
    },
    headerTintColor: colors.white,
  },
  searchIcon: {
    color: '#fff',
    marginRight: 20,
  },
});
