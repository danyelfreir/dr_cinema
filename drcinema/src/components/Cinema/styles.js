import { StyleSheet } from 'react-native';
import colors from '../../styles';

export default StyleSheet.create({
  infoContainer: {
    flex: 1,
    justifyContent: 'center',
    flexDirection: 'column',
  },
  iconContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 50,
  },
  icon: {
    color: 'white',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: colors.white,
    left: 10,
  },
  url: {
    fontSize: 16,
    color: '#7A66F3',
    left: 20,
  },
  background: {
    flexDirection: 'row',
    padding: 10,
    margin: 10,
    borderColor: colors.blackAlpha2,
    borderWidth: 1,
    borderRadius: 10,
    overflow: 'hidden',
    height: 100,
  },
});
