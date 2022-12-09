import { StyleSheet } from 'react-native';
import colors from '../styles/index';

export default StyleSheet.create({
  navBar: {
    headerStyle: {
      backgroundColor: colors.navBarBackground,
    },
    headerTintColor: colors.navBarTitle,
    headerTitleAlign: 'center',
  },
  searchIcon: {
    color: '#fff',
    marginRight: 20,
  },
});
