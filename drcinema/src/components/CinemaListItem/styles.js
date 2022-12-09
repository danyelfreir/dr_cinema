import { StyleSheet } from 'react-native';
import colors from '../../styles';

export default StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: colors.yaleBlue,
    marginTop: 10,
    borderRadius: 50,
    flexDirection: 'row',
  },
  infoContainer: {
    flex: 1,
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 25,
  },
  icon: {
    color: colors.magnolia,
  },
  title: {
    fontSize: 24,
    color: colors.magnolia,
  },
  urlContainer: {
    width: '80%',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50,
    backgroundColor: colors.ruby,
    height: 40,
    marginHorizontal: 10,
    right: 10,
  },
  url: {
    fontSize: 16,
    color: colors.white,
  },
  titleContainer: {
    width: '55%',
  },
});
