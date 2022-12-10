import { StyleSheet, Dimensions } from 'react-native';
import colors from '../../styles';

const { height } = Dimensions.get('window');

export default StyleSheet.create({
  container: {
    position: 'absolute',
    minHeight: height / 4,
    width: '100%',
    marginVertical: 60,
    padding: 20,
    backgroundColor: colors.modalBackground,
    justifyContent: 'space-between',
  },
  titleContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 26,
    color: colors.white,
    paddingBottom: 10,
  },
  description: {
    fontSize: 16,
    color: colors.white,
  },
  closeButton: {
    color: colors.modalCloseButton,
    alignSelf: 'center',
    fontSize: 18,
  },
});
