import { StyleSheet, Dimensions } from 'react-native';

const { width: winWidth, height: winHeight } = Dimensions.get('window');

export default StyleSheet.create({
  modal: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  body: {
    alignItems: 'center',
    justifyContent: 'space-evenly',
    flexGrow: 0.3,
    borderRadius: 10,
    width: winWidth - 10,
    backgroundColor: 'white',
  },
});
