import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    height: 208,
    backgroundColor: 'dodgerblue',
    overflow: 'hidden',
    padding: 6,
    borderRadius: 8,
    borderTopRightRadius: 0,
  },
  title: {
    backgroundColor: 'dodgerblue',
    height: 30,
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
    width: 30,
    alignSelf: 'flex-end',
  },
  closeButton: {
    alignItems: 'flex-end',
  },
  icon: {
    margin: 2.5,
    fontSize: 25,
    color: 'white',
  },
});
