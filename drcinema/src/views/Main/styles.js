import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    width: '100%',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 70,
  },
  buttonContainer: {
    height: 70,
    borderColor: 'grey',
    borderWidth: 2,
    // paddingBottom: 24,
    // paddingTop: 24,
    position: 'absolute',
    bottom: 0,
    backgroundColor: 'white',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    width: '105%',
    flexDirection: 'row',
    alignSelf: 'center',
  },
});
