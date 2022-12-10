import { StyleSheet } from 'react-native';
import colors from '../styles/index';

export default StyleSheet.create({
  navBar: {
    headerStyle: {
      backgroundColor: colors.navBarBackground,
    },
    headerTintColor: colors.navBarTitle,
    headerTitleStyle: {
      fontSize: 18,
    },
    headerTitleAlign: 'center',
  },
  searchIcon: {
    color: '#fff',
    marginRight: 20,
  },
});
