import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    width: '100%',
    flex: 0.85,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonContainer: {
    flex: 0.15,
    paddingBottom: 24,
    paddingTop: 24,
    justifyContent: 'space-evenly',
    alignItems: 'center',
    width: '105%',
    flexDirection: 'row',
    alignSelf: 'center',
    margin: 0,
    elevation: 5,
    shadowColor: 'black',
  },
});
