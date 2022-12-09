import { StyleSheet } from 'react-native';
import colors from '../../styles';

export default StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: colors.cinemaListItemBackground,
    marginTop: 8,
    flexDirection: 'row',
  },
  infoContainer: {
    flex: 1,
    flexDirection: 'column',
    marginLeft: 15,
  },
  iconContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 20,
    marginRight: 15,
  },
  icon: {
    color: colors.cinemaListItemTitle,
  },
  title: {
    fontSize: 28,
    color: colors.cinemaListItemTitle,
  },
  titleContainer: {
    width: '75%',
    justifyContent: 'center',
    marginLeft: 5,
  },
  urlContainer: {
    width: '45%',
    alignItems: 'center',
    borderRadius: 50,
    backgroundColor: colors.cinemaListItemUrlButton,
    height: 35,
    marginTop: 5,
    flexDirection: 'row',
    marginBottom: 5,
  },
  url: {
    fontSize: 16,
    color: colors.cinemaListItemUrl,
  },
  urlIconContainer: {
    paddingRight: 5,
    marginLeft: 10,
  },
});
