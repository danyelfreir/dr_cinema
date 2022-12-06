import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    height: 220,
    backgroundColor: 'dodgerblue',
    overflow: 'hidden',
    borderRadius: 8,
    paddingTop: 6,
  },
  bottom: {
    backgroundColor: 'dodgerblue',
    height: 50,
    borderBottomRightRadius: 15,
    borderBottomLeftRadius: 15,
    width: 50,
    alignSelf: 'center',
  },
  closeButton: {
    alignItems: 'flex-end',
  },
  icon: {
    margin: 2.5,
    fontSize: 40,
    color: 'white',
  },
});
